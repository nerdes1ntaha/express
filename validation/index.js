const UserValidator = require("./user.validator");
const productValidator = require("./product.validator");

module.exports = {
  user: UserValidator,
  product: productValidator,
};
