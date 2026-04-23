interface CourseProps {
  title: string;
  sks: number;
  isOptional?: boolean;
}

const CourseCard = ({ title, sks, isOptional = false }: CourseProps) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>SKS: {sks}</p>
      {isOptional && <span className="optional">Optional</span>}
    </div>
  );
};

export default CourseCard;
