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
            {/* Is it neccessary to add headings to these */}
            <p>{recipe.prepTime}</p>
            <p>{recipe.serves}</p>
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
