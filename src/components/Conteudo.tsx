import { ArchiveBox, ArrowCircleDown,  CodesandboxLogo,  GithubLogo, LinkedinLogo, } from 'phosphor-react';
import './Conteudo.css';
import './ConteudoAssets/Apresetacao.css';

import './ConteudoAssets/skills.css';
import { SkillCard } from './ConteudoAssets/SkillCard';
import { ProjetosCard } from './ConteudoAssets/ProjetosCard';
import { CardCarousel } from './ConteudoAssets/ProjetoCardCarrousel';

//images do skill
import  twitterImage from '../../src/assets/twitter.png';

export function Conteudo() {
    return(

      
      <div className= 'conteudo'>

        <div className = 'apresentacao' id='home'>
          <div className='textoApresent'>
          <h1>Henrique Dev<span id='smile'>ツ</span></h1>
          <p>Ei sou desenvolvedor Fullstack, Bem vindo ao meu portifolio!! </p>
          <ul>
            <li><a href="https://github.com/HenriqueCDS" target="_blank"><span><GithubLogo size={32} /></span></a></li>
            <li><a href="https://www.linkedin.com/in/henrique-cordeiro-940709201/" target="_blank"><span><LinkedinLogo size={32} /></span></a></li>
            <li><a href="./src/assets/files/Cv_Henrique.Cordeiro.pdf" download={'CV.Henrique_cordeiro.pdf'}><ArchiveBox size={32} /></a></li>
      
          </ul>
          
          


          </div>

          <div className='image'>
          <img src='https://github.com/HenriqueCDS.png' />
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
          
            
            
            <ProjetosCard img= {twitterImage}  titulo='Twitter' lang = 'HTML, CSS ,Javascript,React, NODE JS' link = 'https://github.com/HenriqueCDS'/>
            <ProjetosCard img= './src/assets/api-pokemon.png' titulo='Api Pokemon' lang = 'HTML, CSS, Javascript, API' link = 'https://github.com/HenriqueCDS/Pokedex-Test-Api'/>
           
            <CardCarousel img= {['./src/assets/organo-img1.png','./src/assets/organo-img2.png','./src/assets/organo-img3.png','./src/assets/organo-img4.png']} titulo='Organo' lang = 'HTML, CSS, Javascript, NODE JS, React' link = 'https://github.com/HenriqueCDS/Pokedex-Test-Api' />
            <ProjetosCard img= '../../src/assets/rest_api.jpeg' titulo='Rest Api Edukas' lang = ' Javascript, SQL, NODE JS' link = 'https://github.com/HenriqueCDS/Rest_Api_Questoes.git'/>
            <ProjetosCard img= '../../src/rest_api.jpeg' titulo='Rest Api Mongo' lang = 'Javascript, Mongo, NODE JS' link = 'https://github.com/HenriqueCDS/Mongo-Api'/>
       
          </div>

        </div>

        </div>

   
     

    )
    
}