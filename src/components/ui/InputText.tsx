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
        className={`border p-3 rounded-lg focus:border-[#8B1E3F] focus:ring-1 focus:ring-[#8B1E3F] outline-none bg-white transition-all ${eror ? "bg-red-50 border-red-500" : "border-gray-200"}`}
        />
    );  
};

export default InputText;