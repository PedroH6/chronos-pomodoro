import { Home } from "./pages/Home"
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider"

import "./global.css"
import "./theme.css"
import { MessageContainer } from "./components/MessageContainer"




function App() {
  return (
    <>
    <TaskContextProvider>
      <MessageContainer>
        <Home />
      </MessageContainer>
    </TaskContextProvider>
    </>
  )
}

export default App

