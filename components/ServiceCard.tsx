import { FunctionComponent } from "react"
import {Service} from "../type"

const ServiceCard:FunctionComponent<{service: Service}> = ({
    service:{ Icon, about, title
    }}) => {

const createmarkup =()=>{
    return{
        __html:about
    }
}


    return (
        <div className='flex items-center p-2 space-x-4'>
             <Icon className='w-12 h-12 text-yellow-400' />
           <div>
               <h4 className='font-bold dark:text-blue-500'>{title}</h4>
               <p dangerouslySetInnerHTML={createmarkup()} />
               </div> 
        </div>
    )
}

export default ServiceCard
