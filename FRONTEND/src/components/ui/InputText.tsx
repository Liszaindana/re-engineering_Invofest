import React from 'react';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type: string;
  error?: string;
  rows?: number;
  options?: { value: string | number; label: string }[];
}

const InputText: React.FC<InputTextProps> = ({ type, error, ...props }) => {
  const className = `border p-3 rounded-lg outline-none transition-all ${
    error
      ? "bg-red-50 border-red-500 text-red-900 placeholder:text-red-300 focus:ring-1 focus:ring-red-500 focus:border-red-500"
      : "bg-white border-gray-200 focus:border-[#8B1E3F] focus:ring-1 focus:ring-[#8B1E3F]"
  }`;

  if (type === "textarea") {
    return (
      <textarea
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        className={className}
        rows={props.rows || 4}
      />
    );
  }

  if (type === "select") {
    return (
      <select
        {...(props as unknown as React.SelectHTMLAttributes<HTMLSelectElement>)}
        className={className}
      >
        <option value="" disabled hidden>
          {props.placeholder || "Pilih opsi"}
        </option>
        {props.options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type={type}
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      className={className}
    />
  );
};

export default InputText;
