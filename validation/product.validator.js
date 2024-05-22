const { body, query, param } = require("express-validator");

const ProductValidator = {
  validateProduct() {
    return [
      body("name").not().isEmpty().isString(),
      body("description").not().isEmpty().isString(),
      body("description").isLength({ min: 10, max: 390 }),
      body("stock").not().isEmpty().isInt(),
      body("category").not().isEmpty().isString(),
      body("price").not().isEmpty().isInt(),
    ];
  },
  validateUpdateProduct() {
    return [param("id").not().isEmpty().isMongoId()];
  },
};

module.exports = ProductValidator;
