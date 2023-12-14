/*Importa o React, o componente "Meal" do arquivo "./Components/Meal", o arquivo de estilo "./Components/style.css", 
  as rotas e a rota do pacote "react-router-dom" e o componente "RecipeInfo" do arquivo "./Components/RecipeInfo".*/
import React from "react";
import Meal from "./Components/Meal";
import "./Components/style.css";
import { Routes, Route } from "react-router-dom"; //navegação na aplicação
import RecipeInfo from "./Components/RecipeInfo";

/*Aplicação principal que contém as rotas  
 A primeira rota é definida com o caminho "/" e renderiza o componente "Meal" quando esse caminho é acessado.
 A segunda rota "/:MealId" renderiza o componente "RecipeInfo", passando o parâmetro "MealId" como prop.*/
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path ="/:MealId" element={<RecipeInfo/>}/>
      </Routes>

    </>
  );
}

export default App;
