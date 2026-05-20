interface LabelInputProps {
  text: string;
  title: string;
}

const LabelInput: React.FC<LabelInputProps> = ({ text, title }) => {
  return (
    <label
      htmlFor={text}
      className="text-sm font-semibold text-gray-600 mb-1 block"
    >
      {title}
    </label>
  );
};

export default LabelInput;