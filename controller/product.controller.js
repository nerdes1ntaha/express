const baseResponse = require("../dto/baseResponse.dto");
const service = require("../service/index");
const { StatusCodes } = require("http-status-codes");

exports.createProduct = async (req, res) => {
  try {
    const product = await service.productService.createProduct(req);
    res
      .json({
        ...baseResponse,
        messagee: "Ürün oluşturuldu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürün  oluşturulamadı",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, stock, description, price, category } = req.body;
    const updatedProduct = await Product.findByIdAndupdate(
      id,
      { name, description, stock, category, price },
      { new: true }
    );
    res
      .json({
        ...baseResponse,
        data: updatedProduct,
        message: "Ürün bilgileri başarıyla güncellendi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "ürün güncellenemedi",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAllproducts = async (req, res) => {
  try {
    const products = await service.productService.getAllProducts(req);
    res
      .json({ ...baseResponse, data: products, message: "Ürünler listelendi" })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürünler listelenemedi",
        error: true,
        succes: false,
        errorMessage: error.message,
        error: error,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const products = await service.productService.getProductById(req);
    res
      .json({ ...baseResponse, data: products, message: "Ürünler bulundu" })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürünler bulunamadı",
        error: true,
        succes: false,
        errorMessage: error.message,
        error: error,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductByCategory = async (req, res) => {
  try {
    const products = await service.productService.getProductByCategory(req);
    res
      .json({ ...baseResponse, data: products, message: "Ürünler bulundu" })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürünler bulunamadı",
        error: true,
        succes: false,
        errorMessage: error.message,
        error: error,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductByName = async (req, res) => {
  try {
    const products = await service.productService.getProductByName(req);
    res
      .json({ ...baseResponse, data: products, message: "Ürünler bulundu" })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürünler bulunamadı",
        error: true,
        succes: false,
        errorMessage: error.message,
        error: error,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductByPrice = async (req, res) => {
  try {
    const products = await service.productService.getProductByPrice(req);
    res
      .json({ ...baseResponse, data: products, message: "Ürünler bulundu" })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürünler bulunamadı",
        error: true,
        succes: false,
        errorMessage: error.message,
        error: error,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductByStock = async (req, res) => {
  try {
    const products = await service.productService.getProductByStock(req);
    res
      .json({ ...baseResponse, data: products, message: "Ürünler bulundu" })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Ürünler bulunamadı",
        error: true,
        succes: false,
        errorMessage: error.message,
        error: error,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

