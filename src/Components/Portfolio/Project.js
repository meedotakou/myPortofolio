import React from 'react'
import './Project.css'

export const Project = ({project}) => {
  const technology = [
    'Responsive ',
    'Typescript',
    'Next Js',
    'Tailwind ',
    'Prisma',
    'Clerk',
    'Angular',
    'BootStrap',
    'Spring Boot',
    'MongoDB',
    'MySQL'
  ]

  const {UrlCode,UrlView,ImageUrl,TechnologyUser}=project;
  return (
    <div className='Project'>
        <div className='ImageLinkInfo'>
            <img src={ImageUrl} alt="Project" />
            <ul>
                <li><a href={UrlView} target='_blank'  rel="noreferrer">Experience it live </a></li>
                <li><a href={UrlCode} target='_blank'  rel="noreferrer">Check out the code</a></li>
            </ul>
            <div className='TechnologyUsed'>
              {TechnologyUser.map((item,index)=>{

                return <span>{technology[index]}</span>
              })}
            </div>
        </div>
    </div>
  )
}
