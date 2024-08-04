import React from 'react';

export default function Header({children,title,styleClass}) {
    const Header = async () =>{
        const get = await fetch('allrecipes');
        const jsonData = await get.json()

        console.log(jsonData.allrecipes);
    }
    return(
        <header>
            <div className="container-fluid">
                <div className={'row align-items-center'}>
                    <div className='col text-center'>
                        <h1 className='text-light text-uppercase display-3 letter-spacing text-slanted'>{title}</h1>
                        <div className='container'>
        <div className='searchBar'>
          <input type='text' placeholder='Recipe'/>
          <button onClick={Header}>search</button>
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


 

 