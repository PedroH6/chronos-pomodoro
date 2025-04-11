import { createContext } from "react";
import { TaskStateModel } from "../../models/taskStateModel";
import { initialTaskState } from "./initialTaskState";

  type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
  };
  
  const initialContextValue = {
    state: initialTaskState,
    setState: () => {},
  };
  
  export const TaskContext = createContext<TaskContextProps>(initialContextValue);
  