import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider"
import { MessageContainer } from "./components/MessageContainer"
import { MainRouter } from "./routes"

import "./global.css"
import "./theme.css"


function App() {
  return (
    <>
    <TaskContextProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </TaskContextProvider>
    </>
  )
}

export default App

