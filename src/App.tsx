import { Container } from "./components/Container"
import { CountDown } from "./components/CountDown"
import { Input } from "./components/Input"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"


import "./global.css"
import "./theme.css"


function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown/>
      </Container>

      <Container>
       <form action="" className="form">
        <div className="fromRow">
          <Input 
            id="meuInput" 
            type="text" 
            placeholder="digite algo"
            defaultValue="valor prenchido"
            />
        </div>

        <div className="fromRow">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="fromRow">
          <p>Ciclos</p>
          <p>0 0 0 0 0 0  </p>
        </div>

        <div className="fromRow">
          <button>Enviar</button>
        </div>
       </form>
      </Container>
    </>
  )
}

export default App
