interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  tipe: string;
  name: string;
  eror?: string;
}

const InputText: React.FC<InputTextProps> = ({ tipe, name, eror, ...props }) => {
    return (
        <input 
        type={tipe}
        name={name}
        {...props}
        className={`border p-2 rounded-md focus:border-amber-900 outline-none bg-zinc-300 ${eror ? "bg-red-500 border-red-500" : "border-gray-300"}`}
        />
    );  
};

export default InputText;