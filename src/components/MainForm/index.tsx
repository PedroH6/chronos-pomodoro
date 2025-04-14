import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import React, { useRef } from "react";
import { TaskModel } from "../../models/taskModel";
import { useTaskContext } from "../../contexts/TaskContext/userTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";

export function MainForm() {
  const {state, setState} = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle)

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (taskNameInput.current === null) return

    const taskName = taskNameInput.current.value.trim()

    if(!taskName){
      alert('Digite o nome da tarefa')
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interrupDate: null,
      duration: 1,
      type: 'workTime'
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle, // Conferir
        secondsRemaining, // Conferir
        formattedSecondsRemaining: '00:00', // Conferir
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

    return (
        <form onSubmit={handleCreateNewTask} action="" className="form">
        <div className="fromRow">
          <Input 
            id="meuInput" 
            type="text" 
            placeholder="digite algo"
            ref={taskNameInput}
            />
        </div>

        <div className="fromRow">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="fromRow">
         <Cycles />
        </div>

        <div className="fromRow">
         <Button icon={<PlayCircleIcon/>} color="green"/>
        </div>
       </form>
    )
}