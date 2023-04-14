import { ArrowCircleDown, ChatCircleText, GithubLogo, LinkedinLogo, } from 'phosphor-react';
import './Conteudo.css';
import './ConteudoAssets/Apresetacao.css';
import './ConteudoAssets/skills.css';
import { SkillCard } from './ConteudoAssets/SkillCard';

export function Conteudo() {
    return(

      
      <div className= 'conteudo'>

        <div className = 'apresentacao' id='home'>
          <div className='textoApresent'>
          <h1>Henrique Devツ</h1>
          <p>Ei sou desenvolvedor Fullstack, Bem vindo ao meu portifolio!! </p>
          <ul>
            <li><a href="https://github.com/HenriqueCDS"><span><GithubLogo size={32} /></span></a></li>
            <li><a href="https://www.linkedin.com/in/henrique-cordeiro-940709201/"><span><LinkedinLogo size={32} /></span></a></li>
          </ul>
          
          
          </div>

          <div className='image'>
          <img src='https://i.pinimg.com/564x/5f/c1/0a/5fc10ad366102d07050de94e46322864.jpg' />
          </div>
        </div>

        <div className='template-skills' id='skills'>
          
        <h1>#SKills --------------   <ArrowCircleDown size={40} /></h1>
          <div className='skils'>
            <SkillCard key='Props' titulo ='LINGUAGENS' texto = {['PHP','Python','Javascript','C e C++']} />
            <SkillCard key='Props' titulo ='DATABASES' texto = {['Mysql','MongoDB']} />
            <SkillCard key='Props' titulo ='Metodologias ágeis' texto = {['SCRUM ','Kanban']} />
            <SkillCard key='Props' titulo ='Outros' texto = {['HTML','CSS','Node js','Rest api']} />
            <SkillCard key='Props' titulo ='Framework' texto = {['React ']} />
          
          </div>
        </div>
        
      



        <div className='projetos' id='project'>
          <h1>#Project --------------   <ArrowCircleDown size={40} /></h1>

          <div className='card_grid'>
          
            <div className='card'>
              <img className="image" src="article.png" alt="article" />
              <h3>Artigos</h3>
              <p>Crie e edite artigos</p>
              
            </div>
          
            <div className='card'>42</div>
            <div className='card'>1</div>
            
           
          </div>

        </div>

        </div>

   
     

    )
    
}