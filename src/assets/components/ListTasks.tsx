import { PropsWithChildren } from "react";
import IListTasks from "../Interfaces/props/IListTasks";
import Button from "./Button";
import { CheckIcon, ChevronRight, Trash } from "lucide-react";
import { useNavigate } from "react-router";
import ITask from "../Interfaces/tasks/ITask";

function ListTasks({ tasks, toggleTask, deleteTask }: PropsWithChildren<IListTasks>) {
  const navigate = useNavigate();

  const seeDetails = (task: ITask) => {
    const searchParams = new URLSearchParams();
    searchParams.set("title", task.title);
    searchParams.set("description", task.description);
    navigate(`/task?${searchParams.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => {
        return (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => toggleTask(task.id)}
              className={`bg-slate-400 text-white text-left p-2 rounded-md w-full flex items-center gap-2 cursor-pointer ${
                task.completed && "line-through"
              }`}
            >
              {task.completed && <CheckIcon />}
              {task.title}
            </button>

            <Button onClick={() => seeDetails(task)}>
              <ChevronRight />
            </Button>

            <Button onClick={() => deleteTask(task.id)}>
              <Trash />
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default ListTasks;
