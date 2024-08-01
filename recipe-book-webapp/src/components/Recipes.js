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
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
