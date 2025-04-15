import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import React, { useRef } from "react";
import { TaskModel } from "../../models/taskModel";
import { useTaskContext } from "../../contexts/TaskContext/userTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskAction";
import { Tips } from "../Tips";
import { showMessage } from "../adapters/showMessage";


export function MainForm() {
  const {state, dispatch} = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || ''

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    showMessage.dismiss()

    if (taskNameInput.current === null) return

    const taskName = taskNameInput.current.value.trim()

    if(!taskName){
      showMessage.warning('Digite o nome da tarefa')
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

    dispatch({type: TaskActionTypes.START_TASK, payload: newTask})

    showMessage.success('Tarefa iniciado')
  }

  function handleInterruptTask(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
     event.preventDefault()
    showMessage.dismiss()
    showMessage.info('Tarefa interrompida')
    
    dispatch({type: TaskActionTypes.INTERRUPT_TASK })
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
            defaultValue={lastTaskName}
            />
        </div>

        <div className="fromRow">
          <Tips />
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