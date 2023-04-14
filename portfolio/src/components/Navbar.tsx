
import './Navbar.css';
import './Conteudo';

export function Navbar() {
    return(
        <header>
        <div className='navbar'>
        <ul>
            <li><a href="#home"><span>Home</span></a></li>
            <li><a href="#skills"><span>Skills</span></a></li>
            <li><a href="#project "><span>About</span></a></li>
            <li><a href="#rodape"><span>Contact</span></a></li>
        </ul>

      </div>
      
      </header>

    )

}