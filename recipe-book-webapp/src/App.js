import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recipes from './components/Recipes';
import Details from './components/Details';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import Category from './components/Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import mangoIceCream from '../src/images/Mango-Ice-Cream.jpg';
import porridge from '../src/images/mabele.jpg';
import applePie from '../src/images/pexels-apple-pie.jpg';
import chocCake from '../src/images/pexels-chocolate-cake.jpg';
import cheeseCake from '../src/images/pexels-cheescake.jpg';
import beef from '../src/images/pexels-beef.jpg';
import bBurger from '../src/images/pexels-beef-burger.jpg';
import cBurger from '../src/images/pexels-chicken-burger.jpg';
import vBurger from '../src/images/pexels-veggie-burger.jpg';
import brownies from '../src/images/pexels-brownies.jpg';
import deviledEggs from '../src/images/pexels-deivled-eggs.jpg';
import garlic from '../src/images/pexels-garlic-knots.jpg';
import iceCream from '../src/images/pexels-ice-cream.jpg';
import chicken from '../src/images/pexels-grilled-chicken.jpg';
import tacos from '../src/images/pexels-tacos.jpg';
import skewer from '../src/images/pexels-skewers.jpg';
import veggies from '../src/images/pexels-stir-fry.jpg';
import mushrooms from '../src/images/pexels-stuffed-mushrooms.jpg';
import spaghetti from '../src/images/pexels-spaghetti.jpg';
import bruschetta from '../src/images/pexels-bruschetta.jpg';



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
      category: "desserts",
      image: mangoIceCream
    },
    {
      id: 2,
      title: "Motepa Breakfast Porridge",
      shortDescription: "Traditional brown sour porridge (ting) is inspired by the Batswana people",
      ingredients: ["1 cup (250ml) maize meal", "4 cups (1l) water", "0.5 teaspoon (2.5ml) salt", "1 tablespoon (15ml) butter", "Milk & sugar/honey to serve"],
      steps: ["Mix the maize meal with 1 cup (250ml) cold water to make a smooth paste. Leave to ferment in a warm place for 1 day", "The next day, bring 3 cups (750ml) water to boil in a large pot, and add the salt.", "Whisk the fermented maize meal into the boiling water, working quickly to break up any lumps. Simmer, covered, until thick and smooth, about 20 minutes.", "Stir in butter", "Serve with milk and sugar or honey."],
      prepTime: "5 minutes plus 1 day for fermenting",
      cookTime: "20 minutes",
      serves: "6",
      category: "appetizers",
      image: porridge
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
      category: "main-course",
<<<<<<< HEAD
      image: "beef-burger.jpg"
=======
      image: bBurger
>>>>>>> 5398e4e01515192607d60e1b7d819bd596428cd9
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
      category: "main-course",
<<<<<<< HEAD
      image: "chicken-burger.jpg"
=======
      image: cBurger
>>>>>>> 5398e4e01515192607d60e1b7d819bd596428cd9
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
      category: "main-course",
<<<<<<< HEAD
      image: "VeggieBurger.jpg"
=======
      image: vBurger
>>>>>>> 5398e4e01515192607d60e1b7d819bd596428cd9
    }, 
    { id: 6,
    title: "Bruschetta", 
    shortDescription: "Grilled bread with tomatoes and basil.", 
    ingredients: [
      "1 baguette",
      "4 tomatoes",
      "1 bunch fresh basil",
      "2 cloves garlic",
      "1/4 cup olive oil",
      "Salt and pepper to taste"
      
    ],
  
    steps: [
      "Toast the bread.",
      "Top with diced tomatoes and chopped basil.",
      "Drizzle with olive oil.",
      "Season with salt and pepper."
    ],
    prepTime: "10 minutes",
    cookTime: "10 minutes",
    serves: "4",
    category: "appetizers",
<<<<<<< HEAD
    image: "download.jpg"
=======
    image: bruschetta
>>>>>>> 5398e4e01515192607d60e1b7d819bd596428cd9
  },
  { 
    id: 7,
    title: "Stuffed Mushrooms", 
    shortDescription: "Mushrooms stuffed with cheese and herbs.", 
    ingredients: [
      "20 button mushrooms",
      "1/2 cup cream cheese",
      "1/4 cup grated Parmesan cheese",
      "2 tablespoons chopped parsley",
      "2 cloves garlic, minced",
      "Salt and pepper to taste"
    ],
    steps: [
      "Preheat oven to 190°C.",
      "Remove stems from mushrooms and finely chop.",
      "Mix chopped stems with cream cheese, Parmesan, parsley, and garlic.",
      "Stuff mushroom caps with the mixture.",
      "Bake for 20 minutes."
    ],
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    serves: "4",
    category: "appetizers",
    image: mushrooms
  },
  { 
    id: 8,
    title: "Deviled Eggs", 
    shortDescription: "Hard-boiled eggs with a creamy filling.", 
    ingredients: [
      "6 large eggs",
      "1/4 cup mayonnaise",
      "1 teaspoon yellow mustard",
      "1 teaspoon white vinegar",
      "Salt and pepper to taste",
      "Paprika for garnish"
    ],
    steps: [
      "Boil the eggs and let them cool.",
      "Cut eggs in half and remove yolks.",
      "Mix yolks with mayonnaise, mustard, and vinegar.",
      "Fill egg whites with the mixture.",
      "Garnish with paprika."
    ],
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    serves: "6",
    category: "appetizers",
<<<<<<< HEAD
    image: "Eggs.jpg"
=======
    image: deviledEggs
>>>>>>> 5398e4e01515192607d60e1b7d819bd596428cd9
  },
  { 
    id: 9,
    title: "Garlic Knots", 
    shortDescription: "Knotted breadsticks with garlic and herbs.", 
    ingredients: [
      "1 package pizza dough",
      "1/4 cup butter, melted",
      "3 cloves garlic, minced",
      "2 tablespoons chopped parsley",
      "Salt to taste"
    ],
    steps: [
      "Preheat oven to 200°C.",
      "Divide dough into 12 pieces and tie into knots.",
      "Place knots on a baking sheet and bake until golden brown.",
      "Mix melted butter with garlic and parsley.",
      "Brush knots with garlic butter and season with salt."
    ],
    prepTime: "15 minutes",
    cookTime: "15 minutes",
    serves: "12",
    category: "appetizers",
<<<<<<< HEAD
    image: "Garlic-Knots.jpg"
=======
    image: garlic
>>>>>>> 5398e4e01515192607d60e1b7d819bd596428cd9
  },
  { 
    id: 10,
    title: "Caprese Skewers", 
    shortDescription: "Tomato, mozzarella, and basil skewers.", 
    ingredients: [
      "1 pint cherry tomatoes",
      "20 small mozzarella balls",
      "20 fresh basil leaves",
      "Balsamic glaze for drizzling"
    ],
    steps: [
      "Skewer tomatoes, mozzarella, and basil.",
      "Drizzle with balsamic glaze."
    ],
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    serves: "20",
    category: "appetizers",
<<<<<<< HEAD
    image: "CapreseSkewers.jpg"
=======
    image: skewer
>>>>>>> 5398e4e01515192607d60e1b7d819bd596428cd9
  },
  { 
    id: 11,
    title: "Spaghetti Carbonara", 
    shortDescription: "Pasta with eggs, cheese, pancetta, and pepper.", 
    ingredients: [
      "400g spaghetti",
      "200g pancetta",
      "2 large eggs",
      "100g Parmesan cheese, grated",
      "2 cloves garlic, minced",
      "Black pepper to taste"
    ],
    steps: [
      "Cook pasta according to package instructions.",
      "Fry pancetta until crispy, then add garlic.",
      "Beat eggs and mix with grated Parmesan.",
      "Combine hot pasta with pancetta and egg mixture.",
      "Season with black pepper."
    ],
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    serves: "4",
    category: "mainCourse",
<<<<<<< HEAD
    image: "spaghetti.jpg"
=======
    image: spaghetti
>>>>>>> 5398e4e01515192607d60e1b7d819bd596428cd9
  },
  { 
    id: 12,
    title: "Grilled Chicken", 
    shortDescription: "Chicken breast grilled with herbs and spices.", 
    ingredients: [
      "4 chicken breasts",
      "2 tablespoons olive oil",
      "1 tablespoon lemon juice",
      "1 teaspoon dried oregano",
      "Salt and pepper to taste"
    ],
    steps: [
      "Marinate chicken with olive oil, lemon juice, oregano, salt, and pepper.",
      "Preheat grill to medium-high heat.",
      "Grill chicken for 6-8 minutes per side or until cooked through."
    ],
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    serves: "4",
    category: "mainCourse",
    image: chicken
  },
  { 
    id: 13,
    title: "Beef Stroganoff", 
    shortDescription: "Beef in a creamy mushroom sauce.", 
    ingredients: [
      "500g beef sirloin, sliced",
      "200g mushrooms, sliced",
      "1 onion, chopped",
      "1 cup sour cream",
      "1/2 cup beef broth",
      "2 tablespoons flour",
      "2 tablespoons butter",
      "Salt and pepper to taste"
    ],
    steps: [
      "Brown beef in butter, then remove from pan.",
      "Cook onions and mushrooms until soft.",
      "Stir in flour and cook for 1 minute.",
      "Add beef broth and bring to a simmer.",
      "Return beef to pan and stir in sour cream.",
      "Season with salt and pepper."
    ],
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    serves: "4",
    category: "mainCourse",
    image: beef
  },
  { 
    id: 14,
    title: "Vegetable Stir-Fry", 
    shortDescription: "Mixed vegetables stir-fried with soy sauce.", 
    ingredients: [
      "1 red bell pepper, sliced",
      "1 yellow bell pepper, sliced",
      "1 broccoli head, cut into florets",
      "2 carrots, julienned",
      "1 onion, sliced",
      "2 cloves garlic, minced",
      "3 tablespoons soy sauce",
      "1 tablespoon olive oil",
      "Salt and pepper to taste"
    ],
    steps: [
      "Heat oil in a wok over high heat.",
      "Add vegetables and stir-fry until tender.",
      "Add garlic and soy sauce and cook for 2 more minutes.",
      "Season with salt and pepper."
    ],
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    serves: "4",
    category: "mainCourse",
    image: veggies
  },
  { 
    id: 15,
    title: "Tacos", 
    shortDescription: "Ground beef tacos with lettuce, cheese, and salsa.", 
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 taco shells",
      "1 cup shredded lettuce",
      "1 cup shredded cheese",
      "1 cup salsa"
    ],
    steps: [
      "Cook ground beef with taco seasoning according to package instructions.",
      "Assemble tacos with ground beef, lettuce, cheese, and salsa.",
      "Serve immediately."
    ],
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    serves: "4",
    category: "mainCourse",
    image: tacos
  },
  { 
    id: 16,
    title: "Chocolate Cake", 
    shortDescription: "Rich chocolate cake with frosting.", 
    ingredients: [
      "1 and 3/4 cups flour",
      "1 and 1/2 cups sugar",
      "3/4 cup cocoa powder",
      "1 and 1/2 teaspoons baking powder",
      "1 and 1/2 teaspoons baking soda",
      "1 teaspoon salt",
      "2 large eggs",
      "1 cup milk",
      "1/2 cup vegetable oil",
      "2 teaspoons vanilla extract",
      "1 cup boiling water"
    ],
    steps: [
      "Preheat oven to 175°C.",
      "Mix dry ingredients together in a bowl.",
      "Add eggs, milk, oil, and vanilla; beat for 2 minutes.",
      "Stir in boiling water (batter will be thin).",
      "Pour into pans and bake for 30-35 minutes.",
      "Cool and frost as desired."
    ],
    prepTime: "20 minutes",
    cookTime: "35 minutes",
    serves: "8",
    category: "desserts",
    image: chocCake
  },
  { 
    id: 17,
    title: "Apple Pie", 
    shortDescription: "Classic apple pie with a flaky crust.", 
    ingredients: [
      "1 double crust pie dough",
      "6 cups thinly sliced apples",
      "3/4 cup sugar",
      "2 tablespoons flour",
      "1 teaspoon ground cinnamon",
      "1/4 teaspoon ground nutmeg",
      "1 tablespoon lemon juice"
    ],
    steps: [
      "Preheat oven to 190°C.",
      "Mix apples with sugar, flour, cinnamon, nutmeg, and lemon juice.",
      "Place apple mixture into pie crust.",
      "Cover with top crust and seal edges.",
      "Cut slits in top crust and bake for 50 minutes."
    ],
    prepTime: "30 minutes",
    cookTime: "50 minutes",
    serves: "8",
    category: "desserts",
    image: applePie
  },
  { 
    id: 18,
    title: "Cheesecake", 
    shortDescription: "Creamy cheesecake with a graham cracker crust.", 
    ingredients: [
      "2 cups graham cracker crumbs",
      "1/2 cup melted butter",
      "900g cream cheese, softened",
      "1 cup sugar",
      "1 teaspoon vanilla extract",
      "4 large eggs"
    ],
    steps: [
      "Preheat oven to 165°C.",
      "Mix graham cracker crumbs with melted butter and press into a springform pan.",
      "Beat cream cheese, sugar, and vanilla until smooth.",
      "Add eggs one at a time, beating after each addition.",
      "Pour over crust and bake for 55-60 minutes.",
      "Cool and refrigerate before serving."
    ],
    prepTime: "20 minutes",
    cookTime: "60 minutes",
    serves: "8",
    category: "desserts",
    image: cheeseCake
  },
  { 
    id: 19,
    title: "Brownies", 
    shortDescription: "Fudgy chocolate brownies.", 
    ingredients: [
      "1/2 cup butter",
      "1 cup sugar",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "1/3 cup cocoa powder",
      "1/2 cup flour",
      "1/4 teaspoon salt",
      "1/4 teaspoon baking powder"
    ],
    steps: [
      "Preheat oven to 175°C.",
      "Melt butter and mix with sugar, eggs, and vanilla.",
      "Stir in cocoa powder, flour, salt, and baking powder.",
      "Pour into a greased baking pan and bake for 20-25 minutes.",
      "Cool before cutting into squares."
    ],
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    serves: "16",
    category: "desserts",
    image: brownies
  },
  { 
    id: 20,
    title: "Ice Cream", 
    shortDescription: "Homemade vanilla ice cream.", 
    ingredients: [
      "2 cups heavy cream",
      "1 cup whole milk",
      "3/4 cup sugar",
      "1 tablespoon vanilla extract"
    ],
    steps: [
      "Mix cream, milk, sugar, and vanilla in a bowl.",
      "Pour mixture into an ice cream maker and churn according to manufacturer's instructions.",
      "Freeze until firm before serving."
    ],
    prepTime: "10 minutes",
    cookTime: "0 minutes (plus churning and freezing time)",
    serves: "4",
    category: "desserts",
    image: iceCream
  }
    
  ]);

  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/recipes" element={<Recipes recipes={recipes} />} />
        <Route path="/recipe/:id" element={<Details recipes={recipes} />} />
        <Route path="/category/:categoryName" element={<Category recipes={recipes} />} />
      </Routes>
    </Router>
  );
}

export default App;
