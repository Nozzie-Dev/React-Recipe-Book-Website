import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaArrowCircleLeft } from 'react-icons/fa';

const Details = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  const currentIndex = recipes.findIndex(r => r.id === parseInt(id));
  const previousRecipe = recipes[currentIndex - 1];
  const nextRecipe = recipes[currentIndex + 1];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="img-fluid rounded" />
          <div className="mt-3">
            {previousRecipe && (
              <Link to={`/recipe/${previousRecipe.id}`} className="btn btn-outline-secondary mr-2">
                <FaArrowLeft /> Previous
              </Link>
            )}
            {nextRecipe && (
              <Link to={`/recipe/${nextRecipe.id}`} className="btn btn-outline-secondary">
                Next <FaArrowRight />
              </Link>
            )}
          </div>
        </div>
        <div className="col-md-8">
          <h3>Ingredients</h3>
          <ul className="list-group mb-3">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">
                {ingredient}
              </li>
            ))}
          </ul>
          <h3>Preparation Steps</h3>
          <ol className="list-group list-group-numbered">
            {recipe.steps.map((step, index) => (
              <li key={index} className="list-group-item">
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-3">
            <Link to="/" className="btn btn-outline-primary">
              <FaArrowCircleLeft /> Back to Recipes List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
