import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { BsFileEarmarkArrowDownFill }from 'react-icons/bs'
import { FaRegNewspaper } from 'react-icons/fa'


const Sidebar = () => {
    return (
        <div>
            <img src="/me.jpeg" 
            alt="User Avatar"
            className= 'w-32 h-32 mx-auto rounded-full'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-name'> 
            <span className='text-blue-500'>Matthew </span>
            Smith
            </h3>
            <p className='px-2 py-1 my-3 rounded-full bg-grey-200'>
                Web Developer
            </p>
            <a
            className='flex items-center justify-center px-2 py-1 my-3 rounded-full bg-grey-200' href=''
            downLoad='name'>
                
                <BsFileEarmarkArrowDownFill  className='w-6 h-6 text-blue-500' />Download Resume

            </a>
            
            {/* //social icon */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-blue-500 md:w-full'>
                <a href="https://www.linkedin.com/in/matthewsmithwebdesign/">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="https://github.com/MatthewSmithwebdesign/">
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="https://dev.to/matthew_smith_web_design">
                    <FaRegNewspaper className='w-8 h-8 cursor-pointer' />
                </a>
            </div>
            {/* address */}
            <div className='py-4 my-5 bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-600' 
            style={{ marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>San Diego, Ca</span>
                </div>
                <p className='my-2 text-xs'>matthew@matthewsmithwebdesign.com</p>
                <p classNmae='my-2'>(619)402-3888</p>
                
            </div>
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-600'>
                Email Me
            </button>
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-600'>
                Toggle Theme
            </button>
        </div>
    )
}

export default Sidebar
