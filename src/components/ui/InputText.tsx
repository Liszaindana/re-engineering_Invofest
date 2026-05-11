interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  tipe: string;
  name: string;
  error?: any;
}


const InputText: React.FC<InputTextProps> = ({ tipe, name, error, ...props }) => {
  const className = `border p-3 rounded-lg outline-none transition-all ${
    error
      ? "bg-red-50 border-red-500 text-red-900 placeholder:text-red-300 focus:ring-1 focus:ring-red-500 focus:border-red-500"
      : "bg-white border-gray-200 focus:border-[#8B1E3F] focus:ring-1 focus:ring-[#8B1E3F]"
  }`;

  if (tipe === "textarea") {
    return (
      <textarea
        name={name}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        className={className}
        rows={4}
      />
    );
  }

  return (
    <input
      type={tipe}
      name={name}
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      className={className}
    />
  );
};

export default InputText;

