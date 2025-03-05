import ICustomButtonProps from "../Interfaces/props/ICustomButtonProps";

function Button(props : ICustomButtonProps) {
    return (
        <button {...props} className="bg-slate-400 text-white p-2 rounded-md cursor-pointer">
            { props.children }
        </button>
    );
}

export default Button;