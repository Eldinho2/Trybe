const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product || product === null) {
    res.status(404).json({ error: 'Product not found' });
  }

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  try {
  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
 } catch (error) {
   res.status(500).json({ message:  `Algo deu errado ao registrar o produto ${error.message}`});
 }
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message:  `Algo deu errado ao deletar o produto ${error.message}`});
  }
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  try {
  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message:  `Algo deu errado ao atualizar o produto ${error.message}`});
  }
});

module.exports = router;
