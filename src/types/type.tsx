export default interface Recipe {
  id: number;
  name: string;
  slug: string;
  url_video: string;
  url_file: string;
  author: Author;
  category: Category;
  thumbnail: string;
  recipe_ingredients: RecipeIngredient[];
  tutorials: Tutorial[];
  about: string;
}

interface Ingredient {
  id: number;
  name: string;
  photo: string;
}

interface RecipeIngredient {
  id: number;
  ingredients: Ingredient;
}

interface Author {
  id: number;
  name: string;
  photo: string;
}

interface Tutorial {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  recipes_count: number;
  recipes: Recipe[];
}
