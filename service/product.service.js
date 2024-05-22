const Product = require("../model/product.model");
const productResponse = require("../dto/product.dto");

exports.createProduct = async (req) => {
  try {
    const { name, stock, description, price, category } = req.body;
    const existProduct = await Product.find({ name: name });
    if (existProduct.length > 0) {
      throw new Error("Bu isimde ürün bulunmamaktadır.");
    }
    const product = new Product({
      name,
      description,
      stock,
      price,
      category,
    });
    await product.save();
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateProduct = async (req) => {
  try {
    const { id } = req.params;
    const { name, description, stock, price, category } = req.body;
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("ürün bulunamadı");
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        stock,
        price,
        category,
      },
      { new: true }
    );
    return updatedProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllProducts = async (req) => {
  try {
    const products = await Product.find();
    if (!products) {
      throw new Error("ürünler bulunamadı");
    }
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getProductByName = async (req) => {
  try {
    const { name } = req.params;
    const products = await Product.find({ name: name });
    if (!products) {
      throw new Error("ürünler bulunamadı");
    }
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getProductById = async (req) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    if (!products) {
      throw new Error("ürün bulunamadı");
    }
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getProductByCategory = async (req) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category: category });
    if (!products) {
      throw new Error("ürünler bulunamadı");
    }
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getProductByStock = async (req) => {
  try {
    const { stock } = req.params;
    const products = await Product.find({ stock: stock });
    if (!products) {
      throw new Error("ürünler bulunamadı");
    }
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getProductByPrice = async (req) => {
  try {
    const { price } = req.params;
    const products = await Product.find({ price: price });
    if (!products) {
      throw new Error("ürünler bulunamadı");
    }
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};
