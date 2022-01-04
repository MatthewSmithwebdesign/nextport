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
        <p className='font-semibold'> Self-Taught </p>
        <p className='my-3'>FullStack Web Development 
        I studied modern development practices in technologies including (Html 5, Css3, JavaScript, PHP, Python, SQL). 
        Other courses included freelancing and project management. 
        Learned the entire process from taking requirements on a page to making fully functional Web Apps. </p>
    </div>
</div>



   <div>
    <h5 className='my-3 text-2xl font-bold'>Experiance</h5>
    <div>
        <h5 className='my-2 text-xl font-bold'> Software Engineer</h5>
        <p className='font-semibold'> Matthew Smith Web Design (2017 - Current)</p>
        <p className='my-3'>Freelance Software Engineering creating solutions for 
                        <ol>
                            <li>Nonprofits</li>
                            <li>Small and medium-sized businesses</li>
                            <li>Developed custom solutions to solve problems and increase revenue</li>
                            <li>Email campaigns to promote sales and events</li>
                            <li>Solved Seo and online visibility issues for clients to increase their online presence and ranking in search algorithms and increase sales and users </li>
                            
                            </ol></p>
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
                <Bar value={Language} key={Language.name} />
                
                ))}
        </div>
    </div>

<div>
        <h5 className='my-3 text-2xl font-bold'>Tools</h5>
        <div className='my-2'>
            {
                tools.map(tool => (
                <Bar value={tool} key={tool.name} />
                
                ))}
        </div>
    </div>

</div>
</div>

    );
};



export default Resume
