interface LabelInputProps {
  text: string;
  title: string;
}

const LabelInput: React.FC<LabelInputProps> = ({ text, title }) => {
    return <label htmlFor={text} style={{ fontSize: "14px", fontWeight: 600, color: "#4B5563", marginBottom: "4px" }}>{title}</label>;
};

export default LabelInput;