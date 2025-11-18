// il fatto di aver aggiunto bootstrap come DIPENDENZA del progetto
// non significa che sia stato AUTOMATICAMENTE inserito tra i fogli di stile
// della pagina!
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// questa riga fa in modo che il foglio css di bootstrap venga aggiunto a App
// e di conseguenza a tutti i componenti React

// un COMPONENTE REACT può anche essere semplicemente una FUNZIONE
// che RITORNA del J S X
// JSX è una sintassi molto simile ad HTML con qualche differenza sintattica:
// - class -> className
// - for -> htmlFor
// - onclick -> onClick
// JSX permette una facile interpolazione di variabili tramite {  }

function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <div className="col col-12 col-md-8 col-lg-4">
            <img src="https://placebear.com/300/300" className="w-100" />
            <h1 className="text-center">CIAONE</h1>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default App
