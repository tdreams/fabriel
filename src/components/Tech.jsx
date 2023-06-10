import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-28">
      {technologies.map((technology) => (
        <div className="w-12 h-12 lg:w-24 lg:h-24" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
