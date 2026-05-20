import type { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import InputText from './ui/InputText.tsx';
import LabelInput from "./ui/LableInput";

interface FormInputProps<T extends FieldValues> {
    label: string;
    type: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: any; // Changed to any to accept FieldError or string
    placeholder?: string;
    rows?: number;
    options?: { value: string | number; label: string }[];
}

const FormInput = <T extends FieldValues>({ 
    label, 
    type, 
    name, 
    register, 
    error, 
    placeholder, 
    rows,
    options
}: FormInputProps<T>) => {
    // Extract message if error is an object
    const errorMessage = error?.message || (typeof error === 'string' ? error : undefined);

    return (
        <div className="flex flex-col gap-1 w-full">
            <LabelInput text={name} title={label} />
            <InputText 
                type={type} 
                {...register(name)} 
                placeholder={placeholder} 
                error={errorMessage} 
                rows={rows}
                options={options}
            />
            {errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
        </div>
    );
};

export default FormInput;