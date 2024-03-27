import { useInView } from "react-intersection-observer"
import { cn } from "../lib/utils"

interface ITriggerView{
    children:React.ReactNode
    className?:string
    triggerOnce?:boolean
    side:"right" | "left" | "up"
}

const animate = {
    right:"animate-faderight",
    left:"animate-fadeleft",
    up:"animate-fadeup"
}
export default function TriggerView({children,className,triggerOnce=true,side}:ITriggerView) {
    const {ref,inView,entry} = useInView({threshold:0.25
        ,triggerOnce})
    return (
    <div className={cn(`opacity-0  ${(entry && inView)?`opacity-100 ${animate[side]}`:""}`,className)} ref={ref}>
        {children}
    </div>
  )
}
