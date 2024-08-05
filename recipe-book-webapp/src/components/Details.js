import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} style={{ width: '300px', height: '200px' }} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Preparation Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <Link to="/"><button>Back to Recipes List</button></Link>
      <div>
        {previousRecipe && <Link to={`/recipe/${previousRecipe.id}`}><button>Previous</button></Link>}
        {nextRecipe && <Link to={`/recipe/${nextRecipe.id}`}><button>Next</button></Link>}
      </div>
    </div>
  );
};

export default Details;
