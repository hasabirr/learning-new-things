const express = require("express"); // panggil package express yang ada di node_modules
const router = express.Router(); // buat objek express.Router()
const {
  getAllCategories,
  storeCategory,
  detailCategory,
  updateCategory,
  destroyCategory,
} = require("../controllers/categoryController"); // import controller categoriesController

// FindAll Data ya
router.get("/", getAllCategories);

// Detail Data
router.get("/:id", detailCategory);

// Create Data
router.post("/", storeCategory);

// Update Data
router.put("/:id", updateCategory);

// Delete Data
router.delete("/:id", destroyCategory);

router.get("/filterData", (req, res) => {
  res.send("Respon dari endpoint filterData"); // kirimkan response "Hello World!" ke client
});

router.get("/:nama", (req, res) => {
  res.send(`Ini endpoint dari route params ${req.params.nama}`); // kirimkan response "Hello World!" ke client
});

module.exports = router; // export router untuk digunakan di file lain
