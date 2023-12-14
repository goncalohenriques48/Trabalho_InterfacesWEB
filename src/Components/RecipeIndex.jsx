/*Importa o React para a criação de componentes */
import React from "react";

/* Componente "RecipeIndex" que recebe uma prop chamada "alphaIndex", 
* que é uma função responsável por lidar com a seleção de uma letra do índice alfabético. */
const RecipeIndex=({alphaIndex})=>{
    //Constante "alpha" que é um array que contem todas as letras do alfabeto.
    const alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    //Variável usada como um identificador único para cada elemento renderizado no mapeamento do array "alpha".
    var num=0;

    {/*Para cada item no array, é renderizado um elemento <div> com a classe "numbox". 
    Cada elemento <div> tem uma chave única definida pelo valor da variável "num". A variável "num" é incrementada a cada iteração.
    Quando o usuário clica em um elemento <div>, a função "alphaIndex" é chamada, passando o item (letra) correspondente como argumento.  
    Dentro de cada elemento <div>, é renderizado um elemento <h3> que exibe a letra correspondente.*/}
    return(
        <>
            {
                alpha.map(item=>{
                    return(
                        <div className="numbox" key={num++} onClick={()=>alphaIndex(item)}>
                            <h3>{item}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}
export default RecipeIndex;