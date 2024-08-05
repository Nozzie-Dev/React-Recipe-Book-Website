import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Category = ({ recipes }) => {
  const { categoryName } = useParams();
  const filteredRecipes = recipes.filter(recipe => recipe.category === categoryName);

  return (
    <div>
      <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Recipes</h1>
      <ul>
        {filteredRecipes.map(recipe => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.shortDescription}</p>
            <Link to={`/recipe/${recipe.id}`}>
              <button>View Recipe</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
