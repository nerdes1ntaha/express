const md5 = require("md5");
const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const jsonwebtoken = require("jsonwebtoken");
const fs = require("fs");
const dns = require("dns");
const os = require("os");

const hashToPassword = (password) => {
  return md5(password);
};

const handleValidation = (req) => {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty() === false) {
    return {
      message: "Geçersiz veri",
      success: false,
      error: true,
      validationErrors: validationErrors.array(),
      code: StatusCodes.BAD_REQUEST,
      timestamp: Date.now(),
    };
  }
  return null;
};

const createToken = (userId, name, email) => {
  const token = jsonwebtoken.sign(
    { userId, name, email },
    process.env.SECRET_KEY,
    { expiresIn: "1w", issuer: "localhost" }
  );
  return token;
};

const verifyToken = (token) => {
  const isVerfiy = { decodeToken: null };
  try {
    isVerfiy.decodeToken = jsonwebtoken.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    isVerfiy.decodeToken = null;
    console.log("token verify hatası:", error.message);
  }
  return isVerfiy;
};

const getHost = () => {
  return new Promise((resolve, reject) => {
    dns.lookup(os.hostname(), (err, ip) => {
      resolve(`http://${ip}:${process.env.PORT}`);
    });
  });
};

module.exports = {
  hashToPassword,
  handleValidation,
  verifyToken,
  createToken,
  getHost,
};
