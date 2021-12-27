import { useEffect, useState, FunctionComponent } from "react"

import Link from 'next/link'
import { useRouter } from "next/dist/client/router"


const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({activeItem, name, route, setActiveItem}) => {
return activeItem !== name ? (
        <Link href={route}>
    <a>
        <span onClick={()=>setActiveItem(name)} className='hover:text-blue-800'> {name}</span>
    </a>
</Link>
) : null

    }
    






const Navbar = () => {

const [activeItem, setActiveItem] = useState<string>('')  

const { pathname } = useRouter()

useEffect(() => {
    if (pathname === '/') setActiveItem('About')
    if (pathname === 'resume') setActiveItem('Resume')
    if (pathname === 'projects') setActiveItem('Projects')
}, [])


    return (
    <div className='flex justify-between px-5 py-3 my-3'>
        
<span className='text-xl font-bold text-blue-400 border-b-4 border-blue-400 md:text-2xl dark:text-blue-500'>{activeItem}
</span>
<div className='flex space-x-5 text-lg text-purple-500 dark:text-blue-600'> 
<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume' />



</div>

        </div>
    
    )}

export default Navbar