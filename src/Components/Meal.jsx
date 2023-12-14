/*Importa o React e os hooks useEffect e useState
*Importa as componentes "MealItem" e "RecipeIndex" de arquivos separados */
import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

/*Define a componente Meal e define quatro estados utilizando o useState */
const Meal = ()=>{
    //Armazena a URL da API que será chamada para buscar as refeições
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    //Armazena os dados das refeições retornadas pela API
    const [item,setItem]=useState();
    //Controla se as refeições devem ser exibidas ou não
    const [show,setShow]=useState(false);
    //Armazena o valor escrito pelo utilizador na caixa de pesquisa
    const [search,setSearch]=useState("");

    /* useEffect é utilizado para fazer uma chamada à API do TheMealDB assim que a URL é atualizada. 
    * A função fetch é utilizada para fazer a chamada à API com base na URL armazenada no estado url.
    * Quando a resposta da API é recebida, os dados das refeições são armazenados no estado item e o estado show é definido como true.
    * O segundo argumento do useEffect é um array que contém a dependência url que 
    * garante que a chamada à API seja feita novamente somente quando a URL é atualizada.*/
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setItem(data.meals);
            setShow(true);
        })
    },[url])

    /* Função "setIndex" que recebe uma letra do índice alfabético como argumento.
    *  A função atualiza a URL com base na letra selecionada */
    const setIndex=(alpha)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    /* Função "searchRecipe" que recebe um evento como argumento e verifica se a tecla pressionada foi Enter 
    *  e, se sim, atualiza a URL com base no valor digitado pelo utilizador na caixa de pesquisa. */
    const searchRecipe=(evt)=>{
        if(evt.key=="Enter"){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }

    /* O JSX inclui:
        -Cabeçalho com um título e um subtítulo.
        -Caixa de pesquisa que permite ao utilizador pesquisar por receitas.
        -Uma lista de refeições (utilizando a componente "MealItem") ou a mensagem "Not Found" se nenhuma refeição for encontrada.
        -Um índice alfabético (utilizando a componente "RecipeIndex") para permitir que o usuário filtre as receitas por letra.*/
    return(
        <div className="main">
            <div className="heading">
                <h1>Pesquise a sua refeição</h1>
                <h4>Tem muito por onde escolher!</h4>
            </div>

            {/*A caixa de pesquisa utiliza o estado search para armazenar o valor digitado pelo utilizador e chama a função 
            searchRecipe quando o usuário pressiona Enter.*/}
            <div className="searchbox">
                <input type="search" className="search-bar" onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe} />
            </div>
            
            {/*A lista de refeições utiliza o estado show para determinar se deve ser exibida ou não. 
            Se show for verdadeiro, a lista é exibida com base nos dados armazenados no estado item. */}
            <div className="container">
                {
                    show ? <MealItem data={item}/>:"Not Found"
                }
            </div>

            {/*O índice alfabético utiliza a função setIndex para atualizar a URL com base na letra selecionada pelo utilizador.*/}
            <div className="indexContainer">
                <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
        </div>
    )
} 
export default Meal;