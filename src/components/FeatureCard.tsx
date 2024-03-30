import Image from "next/image";
interface FeatureCardProps{
    icon: string,
    altText: string,
    description: string
};
const FeatureCard:React.FC<FeatureCardProps> = ({icon,altText,description}) => {
  return (
    <div className=" m-5 hover:scale-110 transition duration-1000">
      <div className="relative cursor-pointer">
        <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg blur opacity-100"></div>
        <div className="w-[370px] h-[150px] relative px-2 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start">
          <div className="w-full flex flex-row items-center justify-evenly">
            <Image
              src={icon}
              width={60}
              height={60}
              alt={altText}
            />
            <p className="text-gray-700 w-1/2 text-xl font-semibold">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
