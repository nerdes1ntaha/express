const Cart = require("../model/cart.model");
const User = require("../model/user.model");
const Product = require("../model/product.model");

exports.addToCart = async (req) => {
  try {
    const { user, products } = req.body;
    //kullanıcı var mı kontrol et
    const existUser = await User.findById(user);
    if (!existUser) {
      throw new Error("Kullanıcı bulunamadı");
    }
    //ürün var mı kontrol et
    products.map(async (item) => {
      const existProduct = await Product.findById(item.product);
      if (!existProduct) {
        throw new Error("Ürün bulunamadı");
      }
    });
    //sepet var mı kontrol et
    const existCart = await Cart.findOne({ user });
    if (existCart) {
      //sepet varsa ürünleri ekle
      products.map(async (product) => {
        //ürün var mı kontrol et
        const existProductIndex = existCart.products.findIndex(
          (item) => item.product == product.product
        );
        //ürün varsa miktarı arttır
        if (existProductIndex != -1) {
          //miktar 0 veya daha küçükse hata ver
          if (product.quantity <= 0) {
            throw new Error("Miktar 0 veya daha küçük olamaz");
          }
          existCart.products[existProductIndex].quantity += product.quantity;
        } else {
          //ürün yoksa ekle
          existCart.products.push(product);
        }
      });
      await existCart.save();
      return existCart;
    }
    //sepete ekle
    const cart = new Cart({
      user,
      products,
    });
    await cart.save();
    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.totalPrice = async (req) => {};
