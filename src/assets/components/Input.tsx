import ICustomInputProps from "../Interfaces/props/ICustomInputProps";


function Input(props: ICustomInputProps) {
    return (
        <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounder-md" {...props} />
    )
}

export default Input;