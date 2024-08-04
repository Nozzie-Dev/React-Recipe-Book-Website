import React from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../allrecipes';

export default function Header({children,title,styleClass}) {
    
    return(
        <header>
            <div className="container-fluid">
                <div className={'row align-items-center'}>
                    <div className='col text-center'>
                        <h1 className='text-light text-uppercase display-3 letter-spacing text-slanted'>{title}</h1>
                        <div className='container'>
        <div className='searchBar'>
          <input type='text' placeholder='Recipe'/>
          <Link to={`./recipes.js/${recipes.id}`}>
            <button>search</button>
          </Link>
          
        </div>
        <div>
          
        </div>
      </div>
                    </div>
                </div>
            </div>

        </header>
    );
}


 

 