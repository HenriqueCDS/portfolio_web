import { FilePdf , ArrowCircleDown,  CodesandboxLogo,  GithubLogo, LinkedinLogo, } from 'phosphor-react';
import './Conteudo.css';
import './ConteudoAssets/Apresetacao.css';

import './ConteudoAssets/skills.css';
import { SkillCard } from './ConteudoAssets/SkillCard';
import { ProjetosCard } from './ConteudoAssets/ProjetosCard';
import { CardCarousel } from './ConteudoAssets/ProjetoCardCarrousel';

//images do skill
import  twitterImage from '../../src/assets/twitter.png';
import  PokemonImage from '../../src/assets/api-pokemon.png'; 
import  organoImage1 from '../../src/assets/organo-img1.png'; 
import  organoImage2 from '../../src/assets/organo-img2.png'; 
import  organoImage3 from '../../src/assets/organo-img3.png'; 
import  organoImage4 from '../../src/assets/organo-img4.png'; 
import  RestApi from '../../src/assets/rest_api.jpeg'; 
import  cinetag from '../../src/assets/cinetag.png'; 

//cv
import cv from '../../src/assets/files/Cv_Henrique.Cordeiro.pdf';
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
            <li><a href={cv} download={'CV.Henrique_cordeiro.pdf'}><FilePdf  size={32} /></a></li>
      
          </ul>
          
          


          </div>

          <div className='image'>
          <img src='https://github.com/HenriqueCDS.png' />
          </div>
        </div>

        <div className='template-skills' id='skills'>
          
        <h1>#Habilidades --------------   <ArrowCircleDown size={40} /></h1>
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
          
            
            <ProjetosCard img= {cinetag}  titulo='Cinetag' lang = 'HTML, CSS, Javascript, NODE JS, React' linkProjeto = 'https://cinetag-henrique.vercel.app/' link = 'https://github.com/HenriqueCDS/cinetag'/>
            <ProjetosCard img= {twitterImage}  titulo='Twitter' lang = 'HTML, CSS ,Javascript,React, NODE JS' linkProjeto = 'https://masterclass-react-jet.vercel.app/' link = 'https://github.com/HenriqueCDS'/>
            <ProjetosCard img= {PokemonImage} titulo='Api Pokemon' lang = 'HTML, CSS, Javascript, API' linkProjeto = 'https://pokemon-pokedex-api-dev.netlify.app/' link = 'https://github.com/HenriqueCDS/Pokedex-Test-Api'/>
            <CardCarousel img= {[organoImage1,organoImage2,organoImage3,organoImage4]} titulo='Organo'linkProjeto = 'https://organo-react-coral.vercel.app/' lang = 'HTML, CSS, Javascript, NODE JS, React' link = 'https://github.com/HenriqueCDS/Pokedex-Test-Api' />
            <ProjetosCard img= {RestApi}  titulo='Rest Api Edukas' lang = ' Javascript, SQL, NODE JS' linkProjeto = ''link = 'https://github.com/HenriqueCDS/Rest_Api_Questoes.git'/>
            <ProjetosCard img= {RestApi} titulo='Rest Api Mongo' lang = 'Javascript, Mongo, NODE JS' linkProjeto = '' link = 'https://github.com/HenriqueCDS/Mongo-Api'/>
       
          </div>

        </div>

        </div>

   
     

    )
    
}