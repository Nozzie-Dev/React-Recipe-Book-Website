import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 

const Recipes = ({ recipes }) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Recipe List</h1>
      <div className="row">
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="recipe-card">
                <img src={recipe.image} alt={recipe.title} className="recipe-bgImage" />
                <div className="recipe-text-overlay">
                  <h2 className="card-title">{recipe.title}</h2>
                  <p className="card-text">{recipe.shortDescription}</p>
                  <h4>Prep Time</h4>
                  <p>{recipe.prepTime}</p>
                  <h4>Serves</h4>
                  <p>{recipe.serves}</p>
                  <h4>Cook Time</h4>
                  <p>{recipe.cookTime}</p>
                  <Link to={`/recipe/${recipe.id}`}>
                    <Button variant="primary">View Recipe</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
