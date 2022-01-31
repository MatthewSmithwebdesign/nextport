import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { BsFileEarmarkArrowDownFill }from 'react-icons/bs'
import { FaRegNewspaper } from 'react-icons/fa'

import {useTheme} from 'next-themes'

import Image from 'next/image'
import FileViewer from "react-file-viewer/src/components";

import pdf from "/public/Resume Matthew Smith.pdf"
import dynamic from 'next/dynamic';



const Sidebar = () => {

    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark": "light");
    };
    
    const FileViewer = dynamic(() => import('react-file-viewer'), {
        ssr: false
    });
    return (
        <>
        <Image 
            src="/images/mwswdblue.png" 
            alt="avatar"
            className="mx-auto border rounded-full "
            height="128px"
            width="128px"
            layout="intrinsic"
            quality="100"
      />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-name'> 
            <span className='text-blue-500'>Matthew </span>
            Smith
            </h3>
            <p className='px-2 py-1 my-3 rounded-full bg-grey-200 dark:bg-black-500'>
                Web Developer
            </p>
            <a
             href="/public/Resume Matthew Smith.pdf"
            className='flex items-center justify-center px-2 py-1 my-3 rounded-full bg-grey-200 dark:bg-dark-200' 
            download="Resume Mattthew Smith.pdf">
                
                <BsFileEarmarkArrowDownFill  className='w-6 h-6 text-blue-500' />Download Resume

            </a>
            
            {/* //social icon */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-blue-500 md:w-full dark:from-blue-600 dark:to-blue-800'>
                <a href="https://www.linkedin.com/in/matthewsmithwebdesign/">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="https://github.com/MatthewSmithwebdesign/">
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="https://medium.com/@matthewsmithwebdesign">
                    <FaRegNewspaper className='w-8 h-8 cursor-pointer' />
                </a>
            </div>
            {/* address */}
            <div className='py-4 my-5 bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-400 dark:from-blue-600 dark:to-blue-800 dark:text-white' 
            style={{ marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>San Diego, Ca</span>
                </div>
                <p className='my-2 text-xs'>matthew@matthewsmithwebdesign.com</p>
                <p className='my-2'>(619)402-3888</p>
                
            </div>
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-400 focus:outline-none dark:from-blue-600 dark:to-blue-800 dark:text-white'
            onClick={ () => window.open('mailto:matthew@matthewsmithwebdesign.com')}>
                Email Me
            </button>
            <button 
            onClick={changeTheme}
            className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-400 dark:from-blue-600 dark:to-blue-800 dark:text-white'>
                Switch Theme
            </button>
        </>
    )
}

export default Sidebar
