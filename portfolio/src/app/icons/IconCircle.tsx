import { motion, useScroll } from 'framer-motion';

interface IconCircleProps {
  reference: any;
}

const IconCircle: React.FC<IconCircleProps> = ({ reference }) => {

  const {scrollYProgress} = useScroll(
        {
            target : reference,
            offset: ["end end", "start center"]
        }
    )


    return (
      <figure className="absolute -left-[55px] stroke-dark-400 ">
        <svg className='-rotate-[93deg]' width={'75'} height={'75'} viewBox="0 0 100 100">
          <circle cx={'75'} cy={'75'} r={'21'} pathLength="1" className="stroke-dark-400 stroke-1 fill-none" />
          <motion.circle cx={'75'} cy={'75'} r={'21'} className="stroke-[2px] stroke-primary-700 fill-dark-950 " 
                         style={{pathLength: scrollYProgress}}
          />
          <circle cx={'75'} cy={'75'} r={'13'} pathLength="1" className="animate-pulse stroke-1 fill-white-200" />
        </svg>
      </figure>
    );
  }


export default IconCircle;
