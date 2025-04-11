import { Home } from "./pages/Home"
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider"

import "./global.css"
import "./theme.css"



function App() {
  return (
    <>
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
    </>
  )
}

export default App
