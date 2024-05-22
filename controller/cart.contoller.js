const service = require("../service/index")
const baseResponse = require("../dto/baseResponse.dto");
const { StatusCodes } = require("http-status-codes");

exports.addToCart = async (req, res) => {
    try {
      const product = await service.cartService.addToCart(req);
      res
        .json({
          ...baseResponse,
          messagee: "Ürün sepetinize başarıyla eklendi",
          data: product,
        })
        .status(StatusCodes.CREATED);
    } catch (error) {
      res
        .json({
          ...baseResponse,
          message: "Ürün sepete eklenemedi",
          error: error,
          errorMessage: error.message,
          succes: false,
          error: true,
        })
        .status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  };
