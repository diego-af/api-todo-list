import  { Router, Request, Response } from "express";
import { CreatePostController } from "../controllers/CreatePostController";
import { GetAllPostController } from "../controllers/GetAllPostController";
import { GetPostsByIdController } from "../controllers/GetPostsByIdController";
import { UpdatePostController } from "../controllers/UpdatePostController";
import { FilterByWordController } from "../controllers/FilterByWordController";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { GetAllCategoriesController } from "../controllers/GetAllCategoriesController";
import { FilterPostByCategoryController } from "../controllers/FilterPostByCategoryController";

const router = Router();

router.post("/post", CreatePostController);
router.get("/post",GetAllPostController)
router.get("/post/:id", GetPostsByIdController)
router.patch("/post/:word", FilterByWordController)
router.put("/post/:id", UpdatePostController)
router.get("/post/category/:categoryId", FilterPostByCategoryController)


router.post("/categories", CreateCategoryController);
router.get("/categories", GetAllCategoriesController)

export { router };
