import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import React, { useRef } from "react";
import { TaskModel } from "../../models/taskModel";
import { useTaskContext } from "../../contexts/TaskContext/userTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  const {state, setState} = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

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
      duration: state.config[nextCycleType],
      type: nextCycleType,
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle, // Conferir
        secondsRemaining, // Conferir
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), // Conferir
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleInterruptTask(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()

    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(tasks => {
          if( prevState.activeTask && prevState.activeTask.id === tasks.id) {
            return {...tasks, interrupDate: Date.now()}
          }
          return tasks
        })
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
            disabled={!!state.activeTask}
            />
        </div>

        <div className="fromRow">
          <p>Próximo intervalo é de 25min</p>
        </div>

        {state.currentCycle > 0 && (
          <div className="fromRow">
          <Cycles />
         </div>
        )}
        

        <div className="fromRow">
          {!state.activeTask ? (
            <Button
              aria-label="Iniciar nova Tarefa"
              title="Iniciar nova Tarefa" 
              type="submit" 
              icon={<PlayCircleIcon/>} 
              color="green"
              key='botao_submit'
            />
          ): (
            <Button
              aria-label="Interromper tarefa atual"
              title="Interromper tarefa atual" 
              type="button" 
              color="red"
              icon={<StopCircleIcon/>} 
              onClick={handleInterruptTask}
              key='botao_button'
            />
          )}
        </div>
       </form>
    )
}