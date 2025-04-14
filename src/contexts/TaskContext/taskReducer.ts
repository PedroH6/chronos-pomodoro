import { TaskStateModel } from "../../models/taskStateModel";
import { TaskActionModel, TaskActionTypes } from "./taskAction";

export function taskReducer(
    state: TaskStateModel,
    action: TaskActionModel,
  ): TaskStateModel {
    switch (action.type) {
      case TaskActionTypes.START_TASK: {
        return state;
      }
      case TaskActionTypes.INTERRUPT_TASK: {
        return state;
      }
      case TaskActionTypes.RESET_STATE: {
        return state;
      }
    }
  
    // Sempre deve retornar o estado
    return state;
  }