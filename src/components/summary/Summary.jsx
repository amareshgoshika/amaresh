import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Summary = () => {
  return (
    <div id="summary" className="container m-auto mt-16">
      {/* heading */}
      <div 
      // data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Proffessional Summary
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[76%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[100%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[100%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-2/2 gap-3 flex items-end justify-end  flex-col sm:w-4/4">
            <div 
            data-aos="zoom-in"
            >
              <h3 className="text-xl sm:text-lg">
                  <li>Experience in Software Development, developing web/desktop-based applications, android application development and UI technologies and good understanding on complete Software Development Life Cycle (SDLC). Skilled experience in Java, JS, Angular, React with proven expertise in technical developments. Skilled experience in python with proven expertise in using advanced tools and technical developments (libraries used: Panda’s data frame, matplotlib, NumPy, MySQL DB for database connectivity).</li>
                  <br/><li>Good knowledge on CRUD operations on API to perform POST, GET, DELETE, UPDATE actions. Worked closely with development team. Including project manager in code bugs, development, testing and deployment to QA and Production. Worked closely with deployment team in performing DR exercise every year. Experience in deployment using Jenkins CI/CD pipelines, file zilla deployments in google domains. Experienced in operating flags in local and remote through the APPExpress and retrieving, modifying, inserting new flags into APPExpress.</li>
                  <br/><li>Performed detailed analysis on user logs through Splunk logs, retrieved logs using different filter based on the user requirement. Expertise in Git operations using various git software’s like Git Desktop, Tortoise Git, Git Bash and GitHub. Operations performed in git like: Pull, Push, Fetch, Checkout, Delete branch, Revert, Delete recent commit, Merging, Creating, delete and modifying branches. Worked on Postman on POST, GET methods using the routes and curls. Developed several websites using PHP, Bootstrap, JavaScript and used RestAPI and PayPal mailing services to send Text messages and emails to the users.</li>

              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
