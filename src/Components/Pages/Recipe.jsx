import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {useParams} from'react-router-dom'
function Recipe() {

let {name}=useParams()
const [details,setDetails]=useState({})
const [activetab,setActivetab]=useState("instructions")

const fetchDetails=async()=>{
    const data=await fetch(
        `https://api.spoonacular.com/recipes/${name}/information?apiKey=51d0e725a5f9407891c4892e29d1c70a`)
    const detailData=await data.json()
    setDetails(detailData)
console.log(detailData)
}

useEffect(()=>{
fetchDetails(name)
},[name])


  return (
    <DetailWrapper>
<div>
<h2>{details.title}</h2>
    <img src={details.image}alt=""/>
</div>
<Info>
    <Button
     className={activetab === "instructions" ?  "active" : "bon"} onClick={()=> setActivetab("instructions")}>Instructions</Button>
   
 <Button className={activetab === "ingredients" ? "active" : ""} onClick={()=> setActivetab("ingredients")}>Ingredients</Button>
{activetab=== "instructions" &&(
    
    <div>
    <h3 dangerouslySetInnerHTML={{__html: details.summary}}>
    </h3>
    <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
    
</div>
    )}
    {activetab=== "ingredients" &&(

        <ul>
    {details.extendedIngredients.map((Ingredient)=>(
        <li key={Ingredient.id}>{Ingredient.original}</li>
        ))}
</ul>
        )};
</Info>

    </DetailWrapper>
  )
}

const  DetailWrapper=styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;
.active{
     background: linear-gradient(35deg,#494949,#313131);
color:white;
}
h2{
    margin-bottom: 2rem;
}
li{
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
}

`
const  Button=styled.button`
padding: 1rem 2rem;
display: inline-block;
cursor: pointer;
color: #313131;
background: white;
border: 2px solid black;
font-weight: 600px;
bon{
 margin-right: 10px;
    
}
`
const  Info=styled.div`
margin-left: 10rem;

`
export default Recipe