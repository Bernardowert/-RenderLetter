
import { useState } from 'react';
import './App.css'
import logo from './assets/logo.png'

function App() {
  const[textoFrase, setTextoFrase] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  const allFrases = [
    {
         id:1,
         nome: "Motivação",
         frases: [
            "A vida trará coisas boas se tiver paciência.",
            "Demore mais, mas tenha paciência.",
         ]
    },
    {
         id:2,
         nome: "Bom dia",
         frases: [
            "Bom dia A vida trará coisas boas se tiver paciência.",
            "Bom dia Demore mais, mas tenha paciência.",
         ]
    },
    {
       id:3,
       nome: "boa noite",
       frases:[
          "Boa noite A vida trará coisas boas se tiver paciência.",
          "Boa noite Demore mais, mas tenha paciência.",
       ]
    }
  ]
  
  function handleSwitchCategory(index:number) {
     setCategoriaSelecionada(index);
  }

  function gerarFrases(){
     const numeroAleotorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);
     setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleotorio]}"`);

     console.log(textoFrase);
  }

  return (
      <div className='container'>
         <img src={logo} alt="logo frases" className='logo' title='Logo frases' />
         <h2 className='title'>Categorias</h2>
         <section className='category-area'>
           {
             allFrases.map( (item,index) => (
               <button key={item.id} className='category-button' onClick={() => handleSwitchCategory(index)} style={{borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0, borderColor:"#1fa4db" }}>{item.nome}</button>
             ))
           }
          
         </section>

         <button className='button-frase' onClick={gerarFrases}>Gerar frase</button>
          
         {
            textoFrase !== '' && <p className='frase'>{textoFrase}</p>
         }

      </div>
  )
}

export default App
