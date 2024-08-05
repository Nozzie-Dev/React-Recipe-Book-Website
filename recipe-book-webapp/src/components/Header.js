import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

export default function Header({ children, title, styleClass, recipes }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header>
      <div className="container-fluid">
        <div className={'row align-items-center'}>
          <div className='col text-center'>
            <h1 className='text-light text-uppercase display-3 letter-spacing text-slanted'>{title}</h1>
            <div className='container'>
              <div className='searchBar'>
                <input
                  type='text'
                  placeholder='Search Recipe'
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <div>
                <ul className='no-bullet'>
                  {filteredRecipes.map(recipe => (
                    <li key={recipe.id} className='recipe-item'>
                      {recipe.image && (
                        <img src={recipe.image} alt={recipe.title} className='recipe-image' />
                      )}
                      <Link to={`/recipe/${recipe.id}`} className='recipe-link'>
                        <button className='recipe-button'>{recipe.title}</button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
