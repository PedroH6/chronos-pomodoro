import "./global.css"
import "./theme.css"

import { TimerIcon } from "lucide-react"
import { Header } from "./components/Header"

function App() {
  return (
    <>
      <Header>
        <h1>ola mundo</h1>
        <button>
          <TimerIcon/>
        </button>
      </Header>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex asperiores labore numquam repellat tempore dolorem, unde veritatis eum, iste, deleniti libero impedit. Est aperiam repellendus soluta aut voluptas sit nesciunt?
      </p>
    </>
  )
}

export default App
