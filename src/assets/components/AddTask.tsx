import { PropsWithChildren, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import IAddTaskProps from "../Interfaces/props/IAddTaskProps";

function AddTask({ addTask } : PropsWithChildren<IAddTaskProps>) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(true);

  const submitTask = () => {
    if(!title.trim() || !description.trim()){
        setValidated(false);
        return;
    }

    setValidated(true);

    addTask(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="space-y-4 p-6 mb-2 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        value={title}
        placeholder="Digite o título da tarefa"
        onChange={(event: React.ChangeEvent<HTMLInputElement >) => setTitle(event.target.value)}
        type="text"
      />

      <Input
        value={description}
        placeholder="Digite a descrição da tarefa"
        onChange={(event: React.ChangeEvent<HTMLInputElement >) => setDescription(event.target.value)}
        type="text"
      />

      <Button
        onClick={submitTask}
      >
        Adicionar
      </Button>
      

      <p className="text-red-500">
        {!validated && 'Preencha os campos corretamente'}
      </p>
    </div>
  );
}

export default AddTask;
