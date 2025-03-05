import ITask from "../tasks/ITask";

interface IListTasks {
    tasks: ITask[],
    toggleTask: (taskId: string) => void,
    deleteTask: (taskId: string) => void
}

export default IListTasks;