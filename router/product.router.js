const router = require("express").Router();
const validator = require("../validation/index");
const controller = require("../controller/index");

router.post(
  "/createProduct",
  controller.productController.createProduct
);
router.put("/updateProduct", controller.productController.updateProduct);
router.get("/getAllProducts", controller.productController.getAllproducts);
router.get("/getProductById", controller.productController.getProductById);
router.get(
  "/getProductByName/:name",
  controller.productController.getProductByName
);
router.get(
  "/getProductByStock/:stock",
  controller.productController.getProductByStock
);
router.get(
  "/getProductByPrice/:price",
  controller.productController.getProductByPrice
);
router.get(
  "/getProductByCategory/:category",
  controller.productController.getProductByCategory
);

module.exports = {
  product: router,
};
