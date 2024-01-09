import React from 'react'
import { Project } from './Project'
import './Myproject.css'
export const MyProject = () => {

    const ProjectList =[
      {id:1,UrlCode:'https://github.com/meedotakou/trello-app',UrlView:'https://trello-app-beige.vercel.app/',ImageUrl:'./assestsO/trello.jpg',TechnologyUser:[0,1,2,3,4,5,6]},
      {id:1,UrlCode:'https://github.com/meedotakou/genius-app',UrlView:'https://genius-app-theta.vercel.app/',ImageUrl:'./assestsO/genius.jpg',TechnologyUser:[0,1,2,3,4,5,6]},
    ]
  return (
    <div className='ProjectList'>
    {ProjectList.map((item,index)=>{
      return <Project project={ProjectList[index]} key={index}  /> 
    })}

    </div>
  )
}
