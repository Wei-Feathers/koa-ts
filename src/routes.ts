import Router from "koa-router";

import { listProducts } from "./useCases/listProducts";
import { listProductById } from "./useCases/listProductById";
import { createProduct } from "./useCases/createProduct";
import { updateProduct } from "./useCases/updateProduct";
import { deleteProduct } from "./useCases/deleteProduct";

export const router = new Router();

router.get("/product", listProducts);
router.get("/product/:id", listProductById);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
