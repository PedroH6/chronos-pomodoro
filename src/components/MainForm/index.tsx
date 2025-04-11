import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import React, { useState } from "react";

export function MainForm() {
  const [taskName, setTaskName] = useState('')


  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log('deu certo')
  }

    return (
        <form onSubmit={handleCreateNewTask} action="" className="form">
        <div className="fromRow">
          <Input 
            id="meuInput" 
            type="text" 
            placeholder="digite algo"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
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