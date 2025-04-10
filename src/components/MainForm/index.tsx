import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";

export function MainForm() {
    return (
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
         <Cycles />
        </div>

        <div className="fromRow">
         <Button icon={<PlayCircleIcon/>} color="green"/>
        </div>
       </form>
    )
}