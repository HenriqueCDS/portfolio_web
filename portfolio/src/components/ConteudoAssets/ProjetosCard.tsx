import { ArrowCircleDown, GithubLogo } from "phosphor-react";


export function ProjetosCard(prop:any) {
    return (
   
        <div className='card'>
          <img className="image" src={prop.img} alt="article" />
          <p> {prop.lang}</p>
          <h3>{prop.titulo}</h3>
          <p>Crie e edidfsfte artigos</p>
          <a href={prop.link}><span><GithubLogo size={32} /></span></a>
        </div>
    )
    
}