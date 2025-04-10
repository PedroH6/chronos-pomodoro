import { TaskModel } from "./taskModel"

export type TaskStateModel = {
    tasks: TaskModel[],
    secondsRemaining: number,
    formattadSecondsRemaining: string,
    activeTask: TaskModel | null,
    currentCycle: number,
    config: {
        workTime: number,
        shortBreakTime: number,
        longBreakTime: number,
    }
}