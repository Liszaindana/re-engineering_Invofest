import InputText from './ui/InputText.tsx';
import LabelInput from "./ui/LableInput";

interface FormInputProps {
    label: string;
    tipe: string;
    name: string;
    register: any;
    error?: any;
    placeholder?: string;
    rows?: number;
}

const FormInput: React.FC<FormInputProps> = ({ label, tipe, name, register, error, placeholder, rows }) => {
    return (
        <div className="flex flex-col gap-1">
            <LabelInput text={name} title={label} />
            <InputText 
                tipe={tipe} 
                name={name} 
                {...register(name)} 
                placeholder={placeholder} 
                error={error} 
                rows={rows}
            />
            {error && <p className="text-red-500 text-xs mt-1">{typeof error === 'string' ? error : error.message}</p>}
        </div>
    );
};


export default FormInput;