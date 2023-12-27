import React from 'react'
import { Project } from './Project'
import './Myproject.css'
export const MyProject = () => {

    const ProjectList =[
    {id:1,UrlCode:'https://github.com/meedotakou/trello-app',UrlView:'https://trello-app-beige.vercel.app/',ImageUrl:'./assestsO/trello.jpg',TechnologyUser:[1,2,3,4,5,6,10]},
    /* {id:2,UrlCode:'https://github.com/barinale/openData',UrlView:'https://barinale.github.io/openData/',ImageUrl:'./assestsO/OpenDAta.png',TechnologyUser:[1,2,3,4]},
    {id:3,UrlCode:'https://github.com/barinale/2cSolution',UrlView:'https://barinale.github.io/2cSolution/',ImageUrl:'./assestsO/Solution.png',TechnologyUser:[1,2,3,4]},
    {id:4,UrlCode:'https://github.com/barinale/ecomercewebsite',UrlView:'https://barinale.github.io/ecomercewebsite/',ImageUrl:'./assestsO/ecomrc.png',TechnologyUser:[1,2,3,4]},
    {id:5,UrlCode:'https://github.com/barinale/busnis',UrlView:'https://barinale.github.io/busnis/',ImageUrl:'./assestsO/busnin.png',TechnologyUser:[1,2,3]},
    {id:6,UrlCode:'https://github.com/barinale/earwear',UrlView:'https://barinale.github.io/earwear/',ImageUrl:'./assestsO/EarKit.png',TechnologyUser:[1,2,3,4]},
    {id:7,UrlCode:'https://github.com/barinale/mouta',UrlView:'https://barinale.github.io/mouta/',ImageUrl:'./assestsO/ProductMouta.png',TechnologyUser:[1,2,3]} */
]
  return (
    <div className='ProjectList'>
    {ProjectList.map((item,index)=>{
      return <Project project={ProjectList[index]} key={index}  /> 
    })}

    </div>
  )
}
