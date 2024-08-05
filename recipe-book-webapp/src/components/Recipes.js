import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = ({ recipes }) => {
  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.shortDescription}</p>
            <h4>Prep Time</h4>
            <p>{recipe.prepTime}</p>
            <h4>Serves</h4>
            <p>{recipe.serves}</p>
            <h4>Cook Time</h4>
            <p>{recipe.cookTime}</p>
            <Link to={`/recipe/${recipe.id}`}>
              <button>View Recipe</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
