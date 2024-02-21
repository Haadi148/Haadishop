import Product from "./../models/productsModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.status(200).json(product);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      image,
      description,
      price,
      Oldprice,
      countInstock,
    } = req.body;
    const product = await Product.create({
      name,
      category,
      image,
      description,
      price,
      Oldprice,
      countInstock,
    });

    if (product) {
      res.status(201).json(product);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const UpdateProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      image,
      description,
      price,
      Oldprice,
      countInstock,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name=name
      product.category=category
      product.image=image
      product.description=description
      product.price=price
      product.Oldprice=Oldprice
      product.countInstock=countInstock

      const updetedproduct = await product.save();
      if (updetedproduct) {
        res.status(200).json(updetedproduct);
      }
    }else{
      res.status(404).json({message: "product not found"});
    }
   

   
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

 


 export const deleteproduct = async (req, res) => {
   try {
     const product = await Product.findByIdAndDelete(req.params.id);
 
     if (product) {
       res.status(200).json({message: "product deleted"});
     }
   } catch (e) {
     res.status(500).json({ error: e.message });
   }
 };
 
