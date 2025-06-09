
import './App.css'
import logo from './assets/logo.png'

function App() {
  
  return (
      <div className='container'>
         <img src={logo} alt="logo frases" className='logo' title='Logo frases' />
         <h2 className='title'>Categorias</h2>
         <section className='category-area'>
           <button className='category-button'>Motivação</button>
           <button className='category-button'>Bem estar</button>
         </section>

         <button className='button-frase'>Gerar frase</button>
          
         <p className='TextoFrase'>Alguma frase vai vir aqui</p>

      </div>
  )
}

export default App
