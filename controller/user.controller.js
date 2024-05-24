const User = require("../model/user.model");
const utils = require("../utils/index");
const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");
const service = require("../service/index");

exports.register = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const user = await service.userService.register(req);
    res
      .json({
        ...baseResponse,
        data: user,
        message: "Başarıyla kullanıcı oluşturdunuz.",
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Kullanıcı oluşturulamadı",
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const _password = utils.helper.hashToPassword(password);
    const user = await User.find({ email: email, password: _password });
    {
    }
    res
      .json({
        ...baseResponse,
        data: user,
        message: "Giriş yapıldı",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Giriş yapılamadı",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await User.find({ email: email });
    if (user === null || user.length === 0) {
      throw new Error("Kullanıcı bulunamadı");
    }
    const id = user[0]._id;
    const _password = utils.helper.hashToPassword(newPassword);
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        password: _password,
      },
      { new: true }
    );
    res
      .json({
        ...baseResponse,
        data: updatedUser,
        message: "Şifrenizi başarıyla güncellediniz",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Şifre güncellenemedi",
        error: error,
        errorMessage: error.message,
        success: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .json({
        ...baseResponse,
        data: users,
        message: "Kullanıcılar:",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Kullanıcılar bulunamadı",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res
      .json({
        ...baseResponse,
        data: user,
        message: "Kullanıcı:",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Kullanıcı bulunamadı",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getUserByName = async (req, res) => {
  try {
    const { name } = req.params;
    const user = await User.find({ name: name });
    res
      .json({
        ...baseResponse,
        data: user,
        message: "Kullanıcılar:",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Girdiğiniz isim ile kullanıcı bulunamadı",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getUserBySalary = async (req, res) => {
  try {
    const { salary } = req.params;
    const user = await User.find({ salary: salary });
    res
      .json({
        ...baseResponse,
        data: user,
        message: "Kullanıcılar:",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Girdiğiniz maaş ile kullanıcı bulunamadı",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const User = await service.userService.updateUser(req)
    res
      .json({
        ...baseResponse,
        data: User,
        message: "Güncelleme başarılı",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Bilgileriniz güncellenemedi",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.updateProfilePhoto = async (req, res) => {
  try {
    const User = await service.userService.updateProfilePhoto(req)
    res
      .json({
        ...baseResponse,
        data: User,
        message: "Güncelleme başarılı",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Bilgileriniz güncellenemedi",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
