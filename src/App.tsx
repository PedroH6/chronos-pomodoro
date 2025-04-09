import { Container } from "./components/Container"
import { CountDown } from "./components/CountDown"
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
    </>
  )
}

export default App
