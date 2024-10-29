import React, { useState, useEffect } from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPython,
  SiC,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiSwift,
  SiVisualstudio,
  SiJquery,
  SiXcode,
  SiAzurepipelines,
  SiFirebase,
  SiGoogledomains,
  SiSplunk,
  SiJira,
  SiIntellijidea,
  SiFilezilla,
  SiApache,
  SiApachetomcat,
  SiAndroidstudio,
  SiMysql,
  SiFastapi,
  SiPostman,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { TbApi } from "react-icons/tb";
import { GiTortoise } from "react-icons/gi";
import { SiNextdotjs } from "react-icons/si";
import { FaReact,
  FaJava,
  FaNodeJs,
  FaAngular,
  FaBootstrap,
  FaGithub,
  FaAws,
  FaJenkins,
  } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {

  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col w-full sm:w-1/2 exsm:w-1/2">
          <div className="left flex-1 w-full sm:w-1/2 exsm:w-1/2">
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<SiC />} name={"C"} value={95} />
                <ProgressBar logo={<IoLogoHtml5 />} name={"C++"} value={95} />
                <ProgressBar logo={<SiPython />} name={"Python"} value={95} />
                <ProgressBar logo={<FaJava />} name={"Java"} value={95} />
                <ProgressBar logo={<SiJavascript />} name={"JavaScript"} value={95} />
                <ProgressBar logo={<SiHtml5 />} name={"HTML"} value={80} />
                <ProgressBar logo={<SiCss3 />} name={"CSS"} value={80} />
                <ProgressBar logo={<FaReact />} name={"React JS"} value={80} />
                <ProgressBar logo={<FaNodeJs />} name={"Node JS"} value={80} />
                <ProgressBar logo={<FaAngular />} name={"Angular"} value={80} />
                <ProgressBar logo={<SiPhp />} name={"PHP"} value={95} />
                <ProgressBar logo={<SiSwift />} name={"Swift"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"JSP"} value={88} />
              </div>
            </div>
          </div>
          <div className="left flex-1 w-full sm:w-1/2 exsm:w-1/2">
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<FaBootstrap />} name={"Bootstrap"} value={95} />
                <ProgressBar logo={<FaGithub />} name={"GitHub"} value={88} />
                <ProgressBar logo={<FaGithub />} name={"Bash"} value={80} />
                <ProgressBar logo={<GiTortoise />} name={"Tortoise Git"} value={80} />
                <ProgressBar logo={<SiVisualstudio />} name={"Visual Studio"} value={80} />
                <ProgressBar logo={<SiJquery />} name={"JQuery"} value={88} />
                <ProgressBar logo={<SiXcode />} name={"Xcode"} value={80} />
                <ProgressBar logo={<SiAzurepipelines />} name={"Agile Workflow"} value={80} />
                <ProgressBar logo={<SiAzurepipelines />} name={"CI/CD Pipelines"} value={80} />
                <ProgressBar logo={<FaAws />} name={"AWS"} value={80} />
                <ProgressBar logo={<SiFirebase />} name={"Firebase"} value={80} />
                <ProgressBar logo={<SiGoogledomains />} name={"Google Domains"} value={80} />
                <ProgressBar logo={<FaJenkins />} name={"Jenkins"} value={80} />
              </div>
            </div>
          </div>
          <div className="left flex-1 w-full">
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<SiSplunk />} name={"Splunk"} value={95} />
                <ProgressBar logo={<SiJira />} name={"Jira"} value={88} />
                <ProgressBar logo={<SiIntellijidea />} name={"IntelliJ"} value={80} />
                <ProgressBar logo={<SiFilezilla />} name={"FileZilla"} value={80} />
                <ProgressBar logo={<SiApache />} name={"Apache"} value={80} />
                <ProgressBar logo={<SiApachetomcat />} name={"Tomcat"} value={80} />
                <ProgressBar logo={<SiAndroidstudio />} name={"Android Studio"} value={80} />
                <ProgressBar logo={<SiMysql />} name={"MySQL"} value={80} />
                <ProgressBar logo={<SiMysql />} name={"Table Plus"} value={80} />
                <ProgressBar logo={<TbApi />} name={"Rest API"} value={80} />
                <ProgressBar logo={<SiFastapi />} name={"Fast API"} value={80} />
                <ProgressBar logo={<SiPostman />} name={"Postman"} value={80} />
                <ProgressBar logo={<FaReact />} name={"Ad hoc Testing"} value={80} />
              </div>
            </div>
          </div>

          {/* right box */}
{/*           <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full"> */}
{/*             <div className="first2 flex flex-col gap-10"> */}
{/*               <SkillBox */}
{/*                 logo={<IoLogoNodejs />} */}
{/*                 black={"white"} */}
{/*                 white={"black"} */}
{/*                 skill={"Node Js"} */}
{/*               /> */}
{/*               <SkillBox */}
{/*                 logo={<SiMongodb />} */}
{/*                 black={"white"} */}
{/*                 white={"black"} */}
{/*                 skill={"MongoDB"} */}
{/*               /> */}
{/*             </div> */}
{/*             <div className="last2 flex flex-col gap-10"> */}
{/*               <SkillBox */}
{/*                 logo={<SiExpress />} */}
{/*                 black={"black"} */}
{/*                 white={"white"} */}
{/*                 skill={"Express Js"} */}
{/*               /> */}
{/*               <SkillBox */}
{/*                 className="" */}
{/*                 logo={ */}
{/*                   <GrCode/> */}
{/*                 } */}
{/*                 black={"black"} */}
{/*                 white={"white"} */}
{/*                 skill={"C++"} */}
{/*               /> */}
{/*                <SkillBox */}
{/*                 className="" */}
{/*                 logo={ */}
{/*                   <SiNextdotjs className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" /> */}
{/*                 } */}
{/*                 black={"black"} */}
{/*                 white={"white"} */}
{/*                 skill={"Next Js"} */}
{/*               /> */}
{/*             </div> */}
{/*           </div> */}
        </div>

        {/* icons */}
{/*          <div */}
{/*           data-aos="fade-up" */}
{/*           data-aos-duration="1200" */}
{/*           className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5" */}
{/*         > */}
{/*           <img */}
{/*             className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" */}
{/*             src="https://img.icons8.com/ios-filled/50/null/c-plus-plus-logo.png" */}
{/*           /> */}

{/*           <img */}
{/*             className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" */}
{/*             src="https://img.icons8.com/color/48/null/python--v1.png" */}
{/*           /> */}
{/*           <img */}
{/*             className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" */}
{/*             src="https://img.icons8.com/ios/50/null/react-native--v1.png" */}
{/*           /> */}

{/*           <img */}
{/*             className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" */}
{/*             src="https://img.icons8.com/color/48/null/sass.png" */}
{/*             /> */}
{/*           <img */}
{/*             className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" */}
{/*             src="https://img.icons8.com/ios-filled/50/null/git.png" */}
{/*             /> */}
{/*             <img */}
{/*               className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" */}
{/*               src="https://img.icons8.com/windows/50/null/sass--v1.png" */}
{/*             /> */}
{/*           <img */}
{/*             className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" */}
{/*             src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png" */}
{/*           /> */}
{/*           <img */}
{/*             className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" */}
{/*             src="https://img.icons8.com/ios-filled/50/null/python.png" */}
{/*           /> */}
{/*           <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/javascript--v1.png"/> */}
{/*           <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/nodejs.png"/> */}
{/*           <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"/> */}
{/*         </div> */}
      </div>
    </div>
  );
};

export default Skills;
