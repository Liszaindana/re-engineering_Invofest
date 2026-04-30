import InputText from "./ui/InputText";
import LabelInput from "./ui/LableInput";

interface FormInputProps {
  text: string;
  tipe: string;
  name: string;
  register: any;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({ text, tipe, name, register, error }) => {
    return (
        <div className="flex flex-col gap-2">
            <LabelInput text={text} title={text} />
            <InputText tipe={tipe} name={name} {...register(text)} />
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );

};

export default FormInput;