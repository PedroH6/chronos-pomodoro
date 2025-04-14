import { createContext } from "react";
import { TaskStateModel } from "../../models/taskStateModel";
import { initialTaskState } from "./initialTaskState";
import { TaskActionModel } from "./taskAction"

  type TaskContextProps = {
    state: TaskStateModel;
    dispatch: React.Dispatch<TaskActionModel>;
  };
  
  const initialContextValue = {
    state: initialTaskState,
    dispatch: () => {},
  };
  
  export const TaskContext = createContext<TaskContextProps>(initialContextValue);
  