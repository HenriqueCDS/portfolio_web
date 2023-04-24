import { ArchiveBox, ArrowCircleDown, ChatCircleText, GithubLogo, LinkedinLogo, } from 'phosphor-react';
import './Conteudo.css';
import './ConteudoAssets/Apresetacao.css';
import './ConteudoAssets/skills.css';
import { SkillCard } from './ConteudoAssets/SkillCard';

export function Conteudo() {
    return(

      
      <div className= 'conteudo'>

        <div className = 'apresentacao' id='home'>
          <div className='textoApresent'>
          <h1>Henrique Dev<span id='smile'>ツ</span></h1>
          <p>Ei sou desenvolvedor Fullstack, Bem vindo ao meu portifolio!! </p>
          <ul>
            <li><a href="https://github.com/HenriqueCDS"><span><GithubLogo size={32} /></span></a></li>
            <li><a href="https://www.linkedin.com/in/henrique-cordeiro-940709201/"><span><LinkedinLogo size={32} /></span></a></li>
            <li><a href="./src/assets/files/Cv_Henrique.Cordeiro.pdf" download={'CV.Henrique_cordeiro.pdf'}><ArchiveBox size={32} /></a></li>
      
          </ul>
          
          
          </div>

          <div className='image'>
          <img src='https://i.pinimg.com/564x/5f/c1/0a/5fc10ad366102d07050de94e46322864.jpg' />
          </div>
        </div>

        <div className='template-skills' id='skills'>
          
        <h1>#SKills --------------   <ArrowCircleDown size={40} /></h1>
          <div className='skils'>
            <SkillCard key='Props' titulo ='LINGUAGENS' texto = {['PHP','Python','Javascript','C e C++']} icon = {[<ArrowCircleDown />,<ArrowCircleDown />,<ArrowCircleDown />]} />
            <SkillCard key='Props' titulo ='DATABASES' texto = {['Mysql','MongoDB']} />
            <SkillCard key='Props' titulo ='Metodologias ágeis' texto = {['SCRUM ','Kanban']} />
            <SkillCard key='Props' titulo ='Outros' texto = {['HTML','CSS','Node js','Rest api']} />
            <SkillCard key='Props' titulo ='Framework' texto = {['React ']} />
            
          
          </div>
        </div>
        
      



        <div className='projetos' id='project'>
          <h1>#Projetos  --------------   <ArrowCircleDown size={40} /></h1>

          <div className='card_grid'>
          
            <div className='card'>
              <img id='twitter'className="image" src="./src/assets/twitter.png" alt="article" />
              <p>HTML, CSS, Javascript, React</p>
              <h3>Twitter</h3>
              <p>Crie e edite artigos</p>
              <a href="https://github.com/HenriqueCDS"><span><GithubLogo size={32} /></span></a>
               
            
              
            </div>
          
            <div className='card'>
              <img className="image" src="./src/assets/api-pokemon.png" alt="article" />
              <p>HTML, CSS, Javascript, API</p>
              <h3>Api Pokemon</h3>
              
              <p>Crie e edite artigos</p>
              <a href="https://github.com/HenriqueCDS"><span><GithubLogo size={32} /></span></a>
              
            </div>
          
            <div className='card'>
              <img className="image" src="./src/assets/organo-img1.png" alt="article" />
              <p> Javascript, SQL, NODE JS</p>
              <h3>Rest Api</h3>
              <p>Crie e edite artigos</p>
              <a href="https://github.com/HenriqueCDS"><span><GithubLogo size={32} /></span></a>
             
            </div>
            
            <div className='card'>
              <img className="image" src="https://i.pinimg.com/564x/2e/1f/fd/2e1ffdb926f30497aa5dc9bfb60a266f.jpg" alt="article" />
              <p> Javascript, SQL, NODE JS</p>
              <h3>Rest Api</h3>
              <p>Crie e edite artigos</p>
              <a href="https://github.com/HenriqueCDS"><span><GithubLogo size={32} /></span></a>
             
            </div>
            
            
           
          </div>

        </div>

        </div>

   
     

    )
    
}