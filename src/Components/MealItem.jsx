/*Importa o React e o hook useNavigate do pacote 'react-router-dom'.*/
import React from 'react';
import { useNavigate } from 'react-router-dom';//gerenciar a navegação entre diferentes páginas ou rotas

//Define a componente "MealItem" que recebe uma prop chamada "data", que é um array que contem os dados das refeições.
const MealItem = ({ data }) => {
    console.log(data) //Imprime os dados recebidos na prop "data".
    // Utiliza o hook useNavigate para obter a função de navegação utilizada para redirecionar o utilizador para uma rota específica.
    let navigate = useNavigate();
    
    // A função retorna um fragmento vazio <> que contém um mapeamento do array "data".
    return (
        <>
            {   
                /* Se "data" for falso mostra o texto "Not Found", 
                   senao para cada item no array "data", é renderizado um elemento <div> com a classe "card".*/
                (!data) ? "Not Found" : data.map(item => {
                    return (
                        /*Quando o utilizador clica num elemento <div>, a funcao navigate é chamada para redirecionar o utilizador
                          para a rota correspondente ao ID da refeicao (/${item.idMeal})
                        Dentro de cada elemento <div>, é renderizado um elemento <img> que mostra a imagem da refeicao
                          e um elemento <h3> que mostra o nome da refeicao*/
                        <div className="card" key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
                            <img src={item.strMealThumb} alt="" /> 
                            <h3>{item.strMeal}</h3>
                        </div>
                    )
                })
            }


        </>
    )

}
export default MealItem;