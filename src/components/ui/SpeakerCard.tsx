interface SpeakerCardProps {
  imageUrl: string;
  name: string;
  role: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ imageUrl, name, role }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mb-4" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default SpeakerCard;