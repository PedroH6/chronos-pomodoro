import { useEffect, useReducer, useRef} from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/timerWorkerManager";
import { TaskActionTypes } from "./taskAction";
import { loadBeep } from "../../utils/loadBeep";
import { TaskStateModel } from "../../models/taskStateModel";

type TaskContextProviderProps = {
    children: React.ReactNode;
  };
    
    export function TaskContextProvider({ children }: TaskContextProviderProps) {
      const [state, dispatch] = useReducer(taskReducer,initialTaskState, () => {
        const stotageState = localStorage.getItem('state')

        if(stotageState === null) return initialTaskState

        const parsedStorageState = JSON.parse(stotageState) as TaskStateModel

        return {
          ...parsedStorageState,
          activeTask: null,
          secondsRemaining: 0,
          formattedSecondsRemaining: '00:00',
        }
      })
      const playBeepRef = useRef<ReturnType<typeof loadBeep>>(null)

      const worker = TimerWorkerManager.getInstance()

      worker.onmessage(e => {
        const countDownSeconds = e.data;
        console.log(countDownSeconds);

        
 
        if (countDownSeconds <= 0) {
          if(playBeepRef.current){
            playBeepRef.current()
            playBeepRef.current = null
          }

        dispatch({
          type: TaskActionTypes.COMPLETE_TASK,
        })

        worker.terminate();

        } else {
          dispatch({
            type: TaskActionTypes.COUNT_DOWN, 
            payload: {secondsRemaining: countDownSeconds}
          });
        }
      });

      useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))


        if (!state.activeTask) {
          console.log('Worker terminado por falta de activeTask');
          worker.terminate();
        }

        document.title = `${state.formattedSecondsRemaining} - Chronos pomodoro`
    
        worker.postMessage(state);
      }, [worker, state])

      useEffect(() => {
        if(state.activeTask && playBeepRef.current === null) {
          playBeepRef.current = loadBeep()
        } else {
          playBeepRef.current = null
        }
      }, [state.activeTask])

      return (
        <TaskContext.Provider value={{ state, dispatch }}>
          {children}
        </TaskContext.Provider>
      );
    }