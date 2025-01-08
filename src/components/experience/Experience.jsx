import React from "react";

const Resume = () => {
  return (
    <div id="experience" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Experience
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <div className=" relative">
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full Stack Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  RL Carriers, Wilmington, OH
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  August 2023 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                 ●	Enhanced team productivity by actively participating in daily stand-ups, sprint planning, story grooming, and retrospectives within an agile environment, focusing on software architecture principles.<br/>
                 ●	Improved user experience by designing and modifying responsive UIs using JSP, JavaScript, HTML5, Angular 10, jQuery, and React JS, resulting in intuitive and efficient interfaces for cloud computing applications.<br/>
                 ●	Ensured 100% reliability of user interfaces by spearheading the development and optimization of React JS components and modules, enhancing distributed system performance.<br/>
                 ●	Structured and coded scripts to create tables, indexes, views, sequences, synonyms, and triggers, which streamlined database operations and data retrieval processes, supporting networking tasks.<br/>
                 ●	Established automated CI/CD pipelines integrated with GitHub, facilitating seamless commits to deployment across all environments via Jenkins, and ensuring strict authorization protocols for Amazon Web Services (AWS) environments.<br/>
                 ●	Incorporated REST APIs for POST and GET actions, optimizing payload to meet API request requirements and enhancing overall system performance, relevant to network engineering.<br/>
                 ●	Synchronized and optimized code by conducting review sessions, securing applications from issues and bugs through comprehensive team collaboration, contributing to robust distributed systems.<br/>
                 ●	Mastered GIT commands (PULL, FETCH, commit, rollback, checkout, clone, merge, delete commits) to manage version control, ensuring efficient development and issue resolution in cloud computing projects.<br/>
                 ●	Led production support once per PI, resolving issues by collaborating with consumers and business management to maintain operational continuity, leveraging network engineer expertise.<br/>
                </p>
              </div>
            </div><br/>
            <div className=" relative">
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  NTT Data, Hyderabad India
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  December 2020 - December 2021
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                 ●	Engaged in agile methodologies by fostering cross-team collaboration and participating in release management and validation processes, utilizing OpenShift, resulting in a 25% increase in project success rates. <br/>
                 ●	Contributed to the design, development, testing, and integration of the application, leveraging ReactJS to achieve a 20% improvement in development efficiency. <br/>
                 ●	Collaborated with the team to develop the front end and performed releases for every sprint, enhancing user experience and increasing sprint delivery efficiency by 15%. <br/>
                 ●	Designed and implemented complex relational database structures using SQL, MySQL, PostgreSQL, and MongoDB, which improved data storage and retrieval efficiency by 30%. Utilized SQL Developer and other tools to create and execute queries, stored procedures, and triggers. <br/>
                 ●	Created application properties in APPExpress and integrated them with the API, enabling environment switching with a single flag change, which streamlined deployment processes by 20%. <br/>
                 ●	Implemented various APIs for requests, bearer tokens, and authorization tokens, fulfilling business requirements and improving API performance by 25% <br/>
                 ●	Collaborated with business teams and product owners to gather requirements for new features and implemented them, resulting in a 30% increase in feature adoption and user satisfaction. <br/>
                 ●	Performed unit testing, smoke testing, and wrote test cases for unit testing. Additionally, developed new features, wrote unit tests for each module, and conducted automation and regression testing, reducing bugs by 40%. <br/>
                </p>
              </div>
            </div><br/>
            <div className=" relative">
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Jr. Software Engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Electronic Corporation of India Limited, India
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2017 - June 2018
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  ●	Developed a web application for Maharashtra Sales Tax Department, organizing and digitally displaying 10,000+ documents into a structured database. <br/>
                  ●	User-friendly UI enables direct invoice access and download, leveraging PHP and Bootstrap, reducing processing time by 50%. <br/>
                  ●	Implemented validation and testing procedures, cutting API failures by 40% and boosting data integrity by 25%. <br/>
                  ●	Spearheaded integration efforts for the HWB Project, collaborating with senior developers to automate tasks and craft authentication and retrieval APIs. <br/>
                  ●	Mentored interns through pair programming sessions to enhance understanding of HWB ECIL codebase. <br/>
                  ●	Streamlined operations by automating MSTD data checks through custom keyword scripting. <br/>
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
