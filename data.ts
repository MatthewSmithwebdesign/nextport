
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs"
import { BsWordpress } from "react-icons/bs"
import { AiFillMail } from "react-icons/ai"
import { GiMagnifyingGlass } from "react-icons/gi"
import { IProject, Service, Skill } from "./type";

import { DiDjango } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { SiWagtail } from "react-icons/si";
import { DiWordpress } from "react-icons/di";
import { SiShopify } from "react-icons/si";
import { SiWoocommerce } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";


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
    Icon:DiPython,
    name:'Python',
    skill:'40%',
    
  },

  {
    Icon:DiJavascript,
    name:'JavaScript',
    skill:'40%',
    
  },
  {
    Icon:DiDjango,
    name:'Django',
    skill:'40%',
    
  },
  {
    Icon:DiPhp,
    name:'PhP',
    skill:'40%',
    
  },
  {
    Icon:DiHtml5,
    name:'Html 5',
    skill:'40%',
    
  },
  {
    Icon:DiCss3,
    name:'CSS 3',
    skill:'40%',
    
  },
  {
    Icon:DiMysql,
    name:'SQL',
    skill:'40%',
    
  },
  {
    Icon:DiReact,
    name:'React',
    skill:'40%',
    
  },
];

export const tools:Skill[]= [
    {
      Icon:SiWagtail,
      name:'Wagtail',
      skill:'40%',
      
    },
    {
      Icon:DiWordpress,
      name:'WordPress',
      skill:'40%',
      
    },
    {
      Icon:SiShopify,
      name:'Shopify',
      skill:'40%',
      
    },
    {
      Icon:SiWoocommerce,
      name:'Woo Commerce',
      skill:'40%',
      
    },
    {
      Icon:DiPhotoshop,
      name:'Photoshop',
      skill:'40%',
      
    },
  
];

export const projects:IProject[] = [
  {
    name:"Pong",
    description:"Classic arcade game remade",
    image_path:"/images/pong2.jpg",
    deployed_url:"https://matthewsmithwebdesign.github.io/pong/",
    github_url:"https://github.com/MatthewSmithwebdesign/pong",
    category:["games", "javascript"],
    key_techs:["JavaScript, Html, Css"],

  },


];