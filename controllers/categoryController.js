const { Category } = require("../models");
// part of
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json({
      status: "success",
      message: "Categories retrieved successfully",
      data: categories,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      error,
    });
  }
};

exports.detailCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);

    if (!category) {
      return response.status(404).json({
        status: "failed",
        message: "Data Id not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Category retrieved successfully",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      error,
    });
  }
};

exports.storeCategory = async (req, res) => {
  try {
    let { name, description } = req.body;
    const newCategory = await Category.create({
      name,
      description,
    });

    res.status(201).json({
      status: "success",
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      error,
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    await Category.update(req.body, {
      where: {
        id: id,
      },
    });

    const newCategory = await Category.findByPk(id);

    if (!newCategory) {
      return res.status(404).json({
        status: "failed",
        message: "Data Id not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Category updated successfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      error,
    });
  }
};

exports.destroyCategory = async (req, res) => {
  const id = req.params.id;

  const idCategory = await Category.findByPk(id);

  if (!idCategory) {
    return res.status(404).json({
      status: "failed",
      message: "Data Id not found",
    });
  }

  await Category.destroy({
    where: {
      id: id,
    },
  });

  return res.status(200).json({
    status: "success",
    message: `Category with id ${id} deleted successfully`,
  });
};
