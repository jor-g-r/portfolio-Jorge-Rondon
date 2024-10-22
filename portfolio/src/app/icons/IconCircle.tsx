import { motion, useScroll } from "framer-motion";

interface IconCircleProps {
  reference: any;
}

const IconCircle: React.FC<IconCircleProps> = ({ reference }) => {
  return (
    <figure className="absolute -left-[55px] stroke-dark-400 ">
      <svg
        className="-rotate-[93deg]"
        width={"75"}
        height={"125"}
        viewBox="0 0 100 100"
      >
        <circle
          cx={"75"}
          cy={"75"}
          r={"25"}
          pathLength="1"
          className="stroke-dark-400 stroke-1 fill-none"
        />
        <motion.circle
          cx={"75"}
          cy={"75"}
          r={"25"}
          className="stroke-[2px] stroke-primary-700 fill-dark-900 "
          initial={{ pathLength: 1 }}
        />
        <circle
          cx={"75"}
          cy={"75"}
          r={"19"}
          pathLength="1"
          className="animate-pulse stroke-1 fill-white-200"
        />
      </svg>
    </figure>
  );
};

export default IconCircle;
