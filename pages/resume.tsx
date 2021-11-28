import  Bar  from "../components/Bar";
import { languages, tools  } from "../data"


export const Resume = () => {
    return (
<div className='px-6 py-2'>
           {/* education and experiance*/}
   <div className='grid gap-6 md:grid-cols-2'>
     <div>
    <h5 className='my-3 text-2xl font-bold'>Education</h5>
      <div>
        <h5 className='my-2 text-xl font-bold'> Web Development</h5>
        <p className='font-semibold'> Studio Web (2020)</p>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, architecto magni. Minus, ipsam. 
            Quos quia ipsa eveniet rem, amet esse quibusdam reiciendis aperiam alias quas iste quidem beatae, modi facere.</p>
    </div>
</div>



   <div>
    <h5 className='my-3 text-2xl font-bold'>Experiance</h5>
    <div>
        <h5 className='my-2 text-xl font-bold'> Software Engineer</h5>
        <p className='font-semibold'> Matthew Smith Web Design (2017 - Current)</p>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, architecto magni. Minus, ipsam. 
            Quos quia ipsa eveniet rem, amet esse quibusdam reiciendis aperiam alias quas iste quidem beatae, modi facere.</p>
    </div>
</div>
</div>
{/* lang and tools */}
<div className='grid gap-6 md:grid-cols-2'>

    <div>
        <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
        <div className='my-2'>
            {
                languages.map(Language => (
                <Bar data={Language} key={Language.name} />
                
                ))}
        </div>
    </div>

<div>
        <h5 className='my-3 text-2xl font-bold'>Tools</h5>
        <div className='my-2'>
            {
                tools.map(tool => (
                <Bar data={tool} key={tool.name} />
                
                ))}
        </div>
    </div>

</div>
</div>

    );
};



export default Resume
