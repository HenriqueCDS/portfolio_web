import { GithubLogo,Link } from "phosphor-react";
import './ProjetoCardCarrousel.css';
export function CardCarousel(prop:any) {
    return (
        
        <div className='card'>
              <div className='carousel'>
                    {
                    prop.img.map( (image:any) =>{
                    return  <img id='twitter'className="image" src={image} alt="article" /> 
                    }) 
                }    
              </div>

             
            <p> {prop.lang}</p>
            <h3>{prop.titulo}</h3>
            
            <a href={prop.link} target="_blank"><span><GithubLogo size={32} /></span></a>
            <a href={prop.linkProjeto} target="_blank"><span> <Link size={32} /></span></a>
        </div>

    )
}