import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
//declara a variavel vId e inicializa como uma string vazia
let vId = "";

// Componente RecipeInfo
const RecipeInfo = () => {
    // Utiliza o useState para criar um estado chamado "item" e uma função "setItem" para atualizar esse estado.
    const [item, setItem] = useState();
    // Utiliza o useParams para obter o valor do parâmetro de rota chamado "MealId" e atribui a uma constante de mesmo nome.
    const { MealId } = useParams();
    /* Verifica se o valor do parâmetro "MealId" não é uma string vazia.
     Se for verdade, faz uma requisição fetch para a API passando o ID da refeição como parâmetro.
     Em seguida converte a resposta em formato JSON e, utilizando a função "setItem", atualiza o estado "item" 
     com os dados da refeição obtidos da resposta.*/
    if (MealId != "") {
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
            .then(res => res.json())
            .then(data => {
                setItem(data.meals[0]);
            })
    }

    // Verifica se o estado "item" é undefined   
    if (item) {
        // Se for verdadeiro, extrai o ID do vídeo do YouTube da URL contida em "item.strYoutube".
        const url = item.strYoutube;
        // Divide a URL pelo caractere "=" e armazena os elementos em um array chamado "str".
        const str = url.split("=");
        // Atribui o último elemento do array "str" à variável vId. 
        vId = str[str.length - 1];
    }


    /* A função contém a renderização condicional dos elementos da página
    Se o estado "item" for null ou undefined, retorna uma string vazia. Caso contrário renderiza os elementos da página
     
    -Um elemento <div> com a classe "content", contendo uma imagem (<img>) com a URL da imagem da refeição (item.strMealThumb) e 
        um elemento <div> com a classe "inner-content", contendo os detalhes da refeição: um elemento <h1> 
        com o nome da refeição (item.strMeal), um elemento <h2> com a área da comida (item.strArea + " Food") 
        e um elemento <h3> com a categoria da comida ("Category " + item.strCategory).
        
    -Um elemento <div> com a classe "recipe-details", contendo dois elementos <div>: um com a classe "ingredients"
     e outro com a classe "instructions".
        -O primeiro elemento <div> contém um elemento <h2> com o texto "Ingredients" seguido por elementos <h4> 
        que exibem os ingredientes (item.strIngredientX) e as medidas (item.strMeasureX) correspondentes. 
        São exibidos até 8 ingredientes.
        -O segundo elemento <div> contém um elemento <h2> com o texto "Instructions" seguido por um elemento <h4> 
        que exibe as instruções da receita (item.strInstructions).

    -Um elemento <div> com a classe "video", contendo um elemento <iframe> que exibe um vídeo do YouTube. 
    A URL do vídeo é construída utilizando o ID extraído anteriormente (vId).*/
    return (
        <>
            {
                (!item) ? "" : (<>
                    <div className="content">
                        <img src={item.strMealThumb} alt="" />
                        <div className="inner-content">
                            <h1>{item.strMeal}</h1>
                            <h2>{item.strArea} Food</h2>
                            <h3>Category {item.strCategory}</h3>
                        </div>
                    </div>
                    <div className="recipe-details">
                        <div className="ingredients">
                            <h2>Ingredients</h2><br />
                            <h4>{item.strIngredient1} :{item.strMeasure1}</h4>
                            <h4>{item.strIngredient2} :{item.strMeasure2}</h4>
                            <h4>{item.strIngredient3} :{item.strMeasure3}</h4>
                            <h4>{item.strIngredient4} :{item.strMeasure4}</h4>
                            <h4>{item.strIngredient5} :{item.strMeasure5}</h4>
                            <h4>{item.strIngredient6} :{item.strMeasure6}</h4>
                            <h4>{item.strIngredient7} :{item.strMeasure7}</h4>
                            <h4>{item.strIngredient8} :{item.strMeasure8}</h4>
                        </div>
                        <div className="instructions">
                            <h2>Instructions</h2><br />
                            <h4>{item.strInstructions}</h4>
                        </div>

                    </div>
                    <div className="video">
                        <iframe src={`https://www.youtube.com/embed/${vId}`}>
                        </iframe>
                    </div>
                </>)


            }
        </>

    )
}
export default RecipeInfo;