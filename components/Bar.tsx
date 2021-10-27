import { FunctionComponent } from "react"
import { Skill } from "../type"

 const Bar:FunctionComponent<{
    data:Skill
}> = ({data: {Icon, level, name } }) => {
    return (
        <div className='my-2 rounded-full dark:bg-dark-300 dark:bg-black-500'>
          <div className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-600'
          style={{ width: level }}>
           <Icon className='mr-3' />
             { name } 
           </div>
        </div>
    )
}

export default Bar
