
import './App.css'
import { Conteudo } from './components/Conteudo'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="App">
      
     
      <Navbar />

     
      <Conteudo />
      <footer><div  className='rodape' id='rodape'>
        <h1>rodape</h1>
    
      </div>
      </footer>

    </div>
      
    
  )
}

export default App
