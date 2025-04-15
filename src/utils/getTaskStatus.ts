import { TaskModel } from "../models/taskModel";

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
    if(task.completeDate) return 'completa'
    if(task.interrupDate) return 'Interrompida'
    if(task.id === activeTask?.id) return 'Em Progresso'
    return 'Abandonada'
}