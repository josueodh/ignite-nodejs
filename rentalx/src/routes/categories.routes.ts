import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category already exists!" });
  }
  const category = categoriesRepository.create({
    name,
    description,
  });

  return response.status(201).json(category);
});

categoriesRouter.get("/", (request, response) => {
  const categories = categoriesRepository.findAll();

  return response.status(201).json(categories);
});

export { categoriesRouter };
