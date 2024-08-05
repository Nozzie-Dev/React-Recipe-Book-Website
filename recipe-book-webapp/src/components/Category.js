import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import './Category.css'; 

const Category = ({ recipes }) => {
  const { categoryName } = useParams();
  const filteredRecipes = recipes.filter(recipe => recipe.category === categoryName);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Recipes
      </h1>
      <div className="recipes-container">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-card-content">
              <img src={recipe.image} className="recipe-image" alt={recipe.title} />
              <div className="recipe-text-overlay">
                <h2 className="card-title">{recipe.title}</h2>
                <p className="card-text">{recipe.shortDescription}</p>
                <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">
                  <FaEye className="mr-2" /> View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
