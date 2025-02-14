
import './App.css'

import BookCard from './components/BookCard'
import capa_livro from './assets/cavernas_aco.jpg'



function App() {
 

  return (
    <>
      <div>
        <h1>PW3 - WEBAPP - LIVRARIA</h1>
        <BookCard 
        titulo='O iluminado'
        autor='Stephen King'
        imagem= {capa_livro}/>

        {/* <BookCard 
        titulo='1984'
        autor='George Orwell'
        imagem= 'uma imagem vai aparecer aqui'/>

        <BookCard 
        titulo='Os Miseráveis'
        autor='Victor Hugo'
        imagem= 'uma imagem vai aparecer aqui'/>

        <BookCard 
        titulo='A revolução dos bichos'
        autor='George Orwell'
        imagem= 'uma imagem vai aparecer aqui'/>
        
        */}

      </div>
    </>
  )
}

export default App
