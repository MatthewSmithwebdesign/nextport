//import { GetServerSideProps, GetStaticPropsContext } from "next"
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

export const index = () => {
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
     <h5 className='my-3 font-medium'>
     Hello, Welcome to my small part of the web. My name is Matthew. I am a Freelance Web Developer based in San Diego, California.
      I specialize in creating unique applications for small to medium businesses, 
      utilizing a wide range of technologies. 
      </h5>
      <div className='flex-grow p-4 mt-5 bg-blue-400 dark:bg-dark-100'
       style={{ marginLeft:'-1.5rem', marginRight:'-1.5rem' }}>
        <h6 className='my-3 text-xl font-bold tracking-wide text-yellow-400 dark:text-blue-500 '>
          What I Offer
        </h6>
        <div className='grid gap-6 lg:grid-cols-2'>
          {services.map(services => (
            <div className="col-span-1 bg-blue-200 rounded-lg dark:bg-dark-200 lg:">
            <ServiceCard service={services} />
            </div>
          ))}
        </div>
      </div>
  
    </div>
  )
}

export default index