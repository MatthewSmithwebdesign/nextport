//import { GetServerSideProps, GetStaticPropsContext } from "next"
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

export const index = () => {
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
     <h5 className='my-3 font-medium'>
        Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in 
        American crime. Do you believe that shit? It actually says that in the little 
        book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. 
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

/* export const getServerSideProps = async (context:GetServerSideProps)=>{

const res = await fetch('localhost:3000/resume/api/services')
const data = await res.json()

return{

  props:{
    services: data.services,
  },
}

}


export const getStaticProps = async (context:GetStaticPropsContext)=>{

  const res = await fetch('localhost:3000/resume/api/services')
  const data = await res.json()
  
  return{
  
    props:{
      services: data.services,
    },
  }
  
  }
 */