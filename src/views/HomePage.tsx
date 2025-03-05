import { useEffect, useState } from "react";
import Title from "../assets/components/Title";
import AddTask from "../assets/components/AddTask";
import { v4 } from "uuid";
import ITask from "../assets/Interfaces/tasks/ITask";
import ListTasks from "../assets/components/ListTasks";

function HomePage() {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const storageTasks = localStorage.getItem("tasks");
    return storageTasks ? (JSON.parse(storageTasks)) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, description: string) => {
    const newTask: ITask = {
      id: v4(),
      title,
      description,
      completed: false,
    };

    const newTasks = tasks.concat([newTask]);

    setTasks(newTasks);
  };

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map((task) => {
      if(task.id === taskId){
        task.completed = !task.completed;
      }

      return task;
    }));
  }

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de tarefas</Title>
        <AddTask addTask={addTask} />
        <ListTasks 
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default HomePage;
