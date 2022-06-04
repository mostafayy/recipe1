import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import{Splide,SplideSlide}from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import {Link} from 'react-router-dom'
function Popular() {
  const [cuisine,setCuisine]=useState([]);
  const [Popular,setPopular]=useState([])
  const [searchedRecipes,setSearchedRecipes]=useState()
  useEffect(() => {
    getPopular()
    
  }, []);


const getPopular=async()=>{

const check=localStorage.getItem('Popular')

if(check){
  setPopular(JSON.parse(check ))
}else{
  
  const api = await fetch(
    'https://api.spoonacular.com/recipes/random?apiKey=51d0e725a5f9407891c4892e29d1c70a&includeNutrition=true&number=9'
    )
    const data=await api.json()
    localStorage.setItem('Popular',JSON.stringify(data.recipes));
    setPopular(data.recipes)
    // console.log(data)
  }
}

 return(<div>
 
   
     <Wrapper>
     <h3>Popular picks</h3>
     <Splide options={{
       arrows:false,
       pagination:false,
       perPage:4,
       drag:'free',
       gap:'8rem',
     }}>

     {Popular.map((recipe)=>{
       return(
         <SplideSlide key={recipe.id}>

         <Card>
           <Link to={"/recipe/" + recipe.id}></Link>
<p>{recipe.title}</p>
<img src={recipe.image} alt={recipe.title}/>
          <Gradient/>
         </Card>
         </SplideSlide>
       )
      })}
      </Splide>


   </Wrapper>
 
 
 
 
 </div>
 );
}
const Wrapper=styled.div`
margin:4rem 0rem;
`
const Card=styled.div`
min-height:22rem;

// width: 100%;
 min-width: 16rem;
border-radius:2rem;
overflow:hidden;
position:relative;

img{
  border-radius:2rem;
  position:absolute;
  left:0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0;
  transform: translate(-50%,0%);
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const Gradient=styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
  
`



export default Popular
// import React from 'react'
// import axios from 'axios'
// function popular() {
//   // const fetch = require('node-fetch');

// const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?limitLicense=false&offset=0&number=10&minIron=0&minCalcium=0&maxVitaminB2=1000&maxMagnesium=1000&minPotassium=0&maxVitaminB6=1000&intolerances=peanut%2C%20shellfish&maxVitaminB5=1000&minFolicAcid=0&minVitaminA=0&maxSodium=1000&maxSugar=1000&maxVitaminA=5000&maxFluoride=1000&minFluoride=0&minVitaminB1=0&minCholine=0&ranking=2&minFat=5&maxVitaminB1=1000&minVitaminB12=0&maxSelenium=1000&minZinc=0&minFolate=0&maxManganese=1000&maxVitaminB12=1000&maxPotassium=1000&maxIron=1000&minSelenium=0&minVitaminK=0&maxFiber=1000&minSodium=0&maxCopper=1000&minCalories=150&maxCholine=1000&minCholesterol=0&maxVitaminE=1000&minProtein=5&minVitaminB3=0&minVitaminB6=0&maxIodine=1000&excludeIngredients=coconut%2C%20mango&maxProtein=100&minMagnesium=0&minCarbs=5&cuisine=american&maxCaffeine=1000&maxSaturatedFat=50&maxVitaminK=1000&minAlcohol=0&minIodine=0&query=burger&minSaturatedFat=0&includeIngredients=onions%2C%20lettuce%2C%20tomato&minVitaminE=0&maxCalcium=1000&minFiber=0&minVitaminC=0&maxZinc=1000&maxCalories=1500&maxAlcohol=1000&minPhosphorus=0&minVitaminD=0&minVitaminB2=0&minSugar=0&maxFolate=1000&type=main%20course&maxCholesterol=1000&maxVitaminB3=1000&minCaffeine=0&minVitaminB5=0&maxFolicAcid=1000&maxCarbs=100&maxVitaminD=1000&equipment=pan&maxFat=100&minCopper=0&maxVitaminC=1000&maxPhosphorus=1000&minManganese=0';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//     'X-RapidAPI-Key': 'aed110523b0d43bb86aeb5a86078a268'
//   }
// };

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));
  
//   return (
//     <div>


//     </div>
//   )
// }

// export default popular















