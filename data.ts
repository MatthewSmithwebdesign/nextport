
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs"
import { BsWordpress } from "react-icons/bs"
import { AiFillMail } from "react-icons/ai"
import { GiMagnifyingGlass } from "react-icons/gi"
import { IProject, Service, Skill } from "./type";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Django </b> & other popular frameworks",
  },
  {
    Icon: BsCurrencyDollar,
    title: "Ecommerce Development",
    about:
      "I can develop robust Ecommerce sites with <b>Shopify</b>  & <b>Woo Commerce</b> ",
  },
  {
    Icon: BsWordpress,
    title: "Content Mangement Expert",
    about: "Solutions for small and medium sized business using  <b>WordPress</b>  and <b>Wagtail</b> ",
  },
  {
    Icon: AiFillMail ,
    title: "E-mail Developer",
    about:
      "stunning html e-mail developer proven to increse <b>Click rate</b>  and  <b> Click though</b> ",
  },
  {
    Icon: GiMagnifyingGlass ,
    title: "Finding Solutions",
    about:
      "Problem solving and using code to implement the solutions",
  },
];

export const languages:Skill[]= [
  {
    Icon:BsCircleFill,
    name:'Python',
    level:'40%',
    
  },

  {
    Icon:BsCircleFill,
    name:'JavaScript',
    level:'40%',
    
  },
  {
    Icon:BsCircleFill,
    name:'Django',
    level:'40%',
    
  },
  {
    Icon:BsCircleFill,
    name:'PhP',
    level:'40%',
    
  },
  {
    Icon:BsCircleFill,
    name:'Html 5',
    level:'40%',
    
  },
  {
    Icon:BsCircleFill,
    name:'CSS 3',
    level:'40%',
    
  },
  {
    Icon:BsCircleFill,
    name:'SQL',
    level:'40%',
    
  },
  {
    Icon:BsCircleFill,
    name:'React',
    level:'40%',
    
  },
];

export const tools:Skill[]= [
    {
      Icon:BsCircleFill,
      name:'Wagtail',
      level:'40%',
      
    },
    {
      Icon:BsCircleFill,
      name:'WordPress',
      level:'40%',
      
    },
    {
      Icon:BsCircleFill,
      name:'Shopify',
      level:'40%',
      
    },
    {
      Icon:BsCircleFill,
      name:'Woo Commerce',
      level:'40%',
      
    },
    {
      Icon:BsCircleFill,
      name:'Photoshop',
      level:'40%',
      
    },
  
];

export const projects:IProject[] = [
  {
    name:"Pong",
    description:"Classic arcade game remade",
    image_path:"/images/pong1.png",
    deployed_url:"https://matthewsmithwebdesign.github.io/pong/",
    github_url:"https://github.com/MatthewSmithwebdesign/pong",
    category:["games", "javascript"],
    key_techs:["JavaScript, Html, Css"],

  },


];