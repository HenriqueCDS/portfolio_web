
import './Navbar.css';
import './Conteudo';

export function Navbar() {
    return(
        <header>
        <div className='navbar'>
        <ul>
            <li><a href="#home"><span>Home</span></a></li>
            <li><a href="#skills"><span>Habilidades</span></a></li>
            <li><a href="#project "><span>Projetos</span></a></li>
            <li><a href="#rodape"><span>Contato</span></a></li>
        </ul>

      </div>
      
      </header>

    )

}