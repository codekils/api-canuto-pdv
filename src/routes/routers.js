const { Router } = require("express");
const router = Router();
const loginhandler = require("../controllers/loginHandler");
const {
  createProductHanddler,
  getProductByIdHandler,
  getProductByNameHanddler,
  getAllProductsHanddler,
  deleteProductHanddler,
  updateProductHanddler,
} = require("../controllers/productHandler");

router.post("/login", loginhandler);
router.post("/produto", createProductHanddler);
router.get("/produto/busca", getProductByNameHanddler);
router.get("/produto/:id", getProductByIdHandler);
router.get("/produto", getAllProductsHanddler);
router.delete("/produto/:id", deleteProductHanddler);
router.patch("/produto/:id", updateProductHanddler);

module.exports = router;
