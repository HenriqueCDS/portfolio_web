import { ArrowCircleDown, GithubLogo, Link} from "phosphor-react";


export function ProjetosCard(prop:any) {
    return (

        <div className='card'>
          <img className="image" src={prop.img} alt="article" />
          <p> {prop.lang}</p>
          <h3>{prop.titulo}</h3>
          

          
          <a href={prop.link} target="_blank"><span><GithubLogo size={32} /></span></a>
          <a href={prop.linkProjeto} target="_blank"><span> <Link size={32} /></span></a>
         
        </div>
    )
    
}