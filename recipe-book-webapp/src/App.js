import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recipes from './components/Recipes';
import Details from './components/Details';

function App() {
  const [recipes] = useState([
    {
      id: 1,
      title: "Mango Ice-Cream",
      shortDescription: "",
      ingredients: ["3 mangoes, peeled and pureed", "1 teaspoon (5ml) mango essence", "1 tin condensed milk", "1.5 cups (375 ml) fresh cream, chilled"],
      steps: ["Combine the mango puree, mango essence and condenced milk.","In a seperate bowl, whip the cream till soft peaks form, about 3 minutes.","Fold the condensed-milk mixture into the whipped cream.","Pour into freezer-safe dish and cover tightly with cling wrap. Freeze for at least 5 hours or overnight."],
      prepTime: "15 minutes plus 5 hours or overnight in freezer.",
      serves: "4 cups (1l)",
      image: ""
    },
    {
      id: 2,
      title: "Motepa Breakfast Porridge",
      shortDescription: "",
      ingredients: ["1 cup (250ml) maize meal","4 cups (1l) water","0.5 teaspoon (2.5ml) salt","1 tablespoon (15ml) butter","Milk & sugar/ honey to serve"],
      steps: [ "Mix the maize meal with 1 cup (250ml) cold water to make a smooth paste. Leave to ferment in a warm place for 1 day","The next day, bring 3 cups (750ml) water to boil in a large pot, and add the salt.","Whisk the fermented maize meal into the boiling water, working quickly to break up any lumps. Simmer, covered, until thick and smooth, about 20 minutes.","Stir in butter","Serve with milk and sugar or honey."],
      prepTime: "5 minutes plus 1 day for fermenting",
      cookTime: "20 minutes",
      serves: "6",
      image: ""
    }
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Recipes recipes={recipes} />} />
        <Route path="/recipe/:id" element={<Details recipes={recipes} />} />
      </Routes>
    </Router>
  );
};

export default App;
