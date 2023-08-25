
import {motion, useScroll} from 'framer-motion'
import {useRef} from 'react'

interface IconCircleProps {
    reference : any;
}

const IconCircle: React.FC<IconCircleProps> = (reference) => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <>
        <figure className="absolute -left-[55px] stroke-dark-400">
            <svg width={"75"} height={"75"} viewBox="0 0 100 100">
                <circle cx={"75"} cy={"75"} r={"20"} className="stroke-primary stroke-1 fill-none"/>
                <motion.circle cx={"75"} cy={"75"} r={"20"} className="stroke-2 fill-dark-950"/>
                <circle cx={"75"} cy={"75"} r={"10"} className="stroke-1 fill-primary"/>
            </svg>
        </figure>
        </>
    )
}

export default IconCircle