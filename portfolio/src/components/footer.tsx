import { DiscordLogo, EnvelopeSimple, FinnTheHuman, PhoneCall, SmileyWink } from 'phosphor-react';
import './footer.css';


export function Footer() {
    return (
        
    <footer>
     
        <div  className='rodape' id='rodape'>
        <hr></hr>
            

           
            
            <div className='rodape-flex'> 
                

                    <div className='rodape-links'>
                        <FinnTheHuman size={32} />
                        <h2>Contato:</h2>
                        
                        <a><DiscordLogo size={32} /></a>  
                        <p>Hevn#0252</p>
                        <a href="mailto:henriquecordeiro054@gmail.com"><EnvelopeSimple size={32} /></a>
                        <p>henriquecordeiro054@gmail.com</p>
                        <PhoneCall size={32} /><p>19 995454391</p>
                    </div> 
            
            </div>
            
            
         <h1>© Copyright 2022. Made by Henrique</h1>
        
        </div>
    </footer>
  )
}