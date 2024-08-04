// src/pages/Category.js
import React from 'react';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import { recipes } from '../allrecipes';
=======
import { recipes } from './Recipes';
>>>>>>> 292ac98533e04adc8e88cea7de0726c98659adeb
import './Category.css'; // Import custom CSS for styling

const Category = () => {
  const { categoryName } = useParams();
  const categoryRecipes = recipes[categoryName] || [];

  return (
    <div>
      <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Recipes</h1>
      <div className="recipes-container">
        {categoryRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <p>{recipe.description}</p>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

