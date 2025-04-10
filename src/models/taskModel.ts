import { TaskStateModel } from "./taskStateModel"

export type TaskModel = {
    id: string,
    name: string,
    duration: number,
    startDate: number,
    completeDate: number | null, // Quando o timer chega ao final
    interrupDate: number | null, // quando a task for interrompida
    type: keyof TaskStateModel['config']

}