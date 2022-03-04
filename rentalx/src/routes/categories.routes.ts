import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = categoriesRepository.create({
    name,
    description,
  });

  return response.status(201).json(category);
});

export { categoriesRouter };
