
   
import { FunctionComponent } from "react";

import { Skill } from "../type";
import {motion} from 'framer-motion';

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, skill, name },
}) => {
  const bar_width = `${skill}%`;

  const variants = {
    initial:{
      width: 0,
    },
    animate:{
      width: bar_width,
      transition:{
        duration: 0.4,
        type:"spring",
        damping: 10,
        striffness:100,
      },
    },
  };
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-400"
        style={{
          width: bar_width,
        }}
        //variants ={variants}
        //initial="initial"
        //animate="animate"
      >
        <Icon className="mr-3" /> {name}
      </div>
    </div>
  );
};
export default Bar;
