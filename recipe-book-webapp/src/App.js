import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recipes from './components/Recipes';
import Details from './components/Details';
import Home from './components/Home';
import Category from './components/Category';
import MyNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [recipes] = useState([
    {
      id: 1,
      title: "Mango Ice-Cream",
      shortDescription: "Mango ice cream is creamy and sweet combined with the great texture of mangoes. Made from sweet mango pulp",
      ingredients: ["3 mangoes, peeled and pureed", "1 teaspoon (5ml) mango essence", "1 tin condensed milk", "1.5 cups (375 ml) fresh cream, chilled"],
      steps: ["Combine the mango puree, mango essence and condensed milk.","In a separate bowl, whip the cream till soft peaks form, about 3 minutes.","Fold the condensed-milk mixture into the whipped cream.","Pour into freezer-safe dish and cover tightly with cling wrap. Freeze for at least 5 hours or overnight."],
      prepTime: "15 minutes plus 5 hours or overnight in freezer.",
      serves: "4 cups (1l)",
      image: ""
    },
    {
      id: 2,
      title: "Motepa Breakfast Porridge",
      shortDescription: "Traditional brown sour porridge (ting) is inspired by the Batswana people",
      ingredients: ["1 cup (250ml) maize meal","4 cups (1l) water","0.5 teaspoon (2.5ml) salt","1 tablespoon (15ml) butter","Milk & sugar/ honey to serve"],
      steps: [ "Mix the maize meal with 1 cup (250ml) cold water to make a smooth paste. Leave to ferment in a warm place for 1 day","The next day, bring 3 cups (750ml) water to boil in a large pot, and add the salt.","Whisk the fermented maize meal into the boiling water, working quickly to break up any lumps. Simmer, covered, until thick and smooth, about 20 minutes.","Stir in butter","Serve with milk and sugar or honey."],
      prepTime: "5 minutes plus 1 day for fermenting",
      cookTime: "20 minutes",
      serves: "6",
      image: ""  ,
    
    },
    {
      id: 3,
      title: "Classic Beef Burger",
      shortDescription: "A juicy and flavorful beef burger.",
      ingredients: ["500g ground beef", "1 teaspoon salt", "1/2 teaspoon black pepper", "4 burger buns", "4 slices of cheddar cheese", "Lettuce, tomato, onion, and pickles for toppings", "Ketchup and mustard"],
      steps: ["Preheat the grill to medium-high heat.", "In a bowl, mix the ground beef with salt and pepper.", "Form the mixture into 4 patties.", "Grill the patties for 4-5 minutes per side, or until cooked to your liking.", "Place a slice of cheddar cheese on each patty during the last minute of cooking.", "Toast the burger buns on the grill for about 1 minute.", "Assemble the burgers with lettuce, tomato, onion, pickles, ketchup, and mustard."],
      prepTime: "10 minutes",
      cookTime: "10 minutes",
      serves: "4",
      image: ""
    },
    {
      id: 4,
      title: "Chicken Burger",
      shortDescription: "A delicious chicken burger with a crispy coating.",
      ingredients: ["500g ground chicken", "1 egg", "1/2 cup breadcrumbs", "1 teaspoon garlic powder", "1/2 teaspoon paprika", "Salt and pepper to taste", "4 burger buns", "4 slices of mozzarella cheese", "Lettuce, tomato, and mayonnaise for toppings"],
      steps: ["In a bowl, combine the ground chicken, egg, breadcrumbs, garlic powder, paprika, salt, and pepper.", "Form the mixture into 4 patties.", "Heat some oil in a pan over medium heat.", "Cook the patties for 5-6 minutes per side, or until golden and cooked through.", "Place a slice of mozzarella cheese on each patty during the last minute of cooking.", "Toast the burger buns in the pan for about 1 minute.", "Assemble the burgers with lettuce, tomato, and mayonnaise."],
      prepTime: "15 minutes",
      cookTime: "12 minutes",
      serves: "4",
    },
  {
      id: 5,
      title: "Veggie Burger",
      shortDescription: "A healthy and tasty veggie burger.",
      ingredients: ["1 can (400g) black beans, drained and rinsed", "1/2 cup breadcrumbs", "1/2 cup grated carrot", "1/4 cup chopped onion", "1 teaspoon cumin", "1/2 teaspoon garlic powder", "Salt and pepper to taste", "4 burger buns", "4 slices of Swiss cheese", "Lettuce, tomato, avocado, and spicy mayo for toppings"],
      steps: ["In a bowl, mash the black beans with a fork.", "Add the breadcrumbs, grated carrot, chopped onion, cumin, garlic powder, salt, and pepper. Mix well.", "Form the mixture into 4 patties.", "Heat some oil in a pan over medium heat.", "Cook the patties for 4-5 minutes per side, or until golden and crispy.", "Place a slice of Swiss cheese on each patty during the last minute of cooking.", "Toast the burger buns in the pan for about 1 minute.", "Assemble the burgers with lettuce, tomato, avocado, and spicy mayo."],
      prepTime: "15 minutes",
      cookTime: "10 minutes",
      serves: "4",
      image: "logo192.png"
    }
  ]);

  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes recipes={recipes} />} />
        <Route path="/recipe/:id" element={<Details recipes={recipes} />} />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </Router>
  );
};

export default App;

