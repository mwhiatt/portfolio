export default function Experience() {
    return (
        <div>
            <div className='main-content'>
                <h1 className="main-content--h1"><span className='main-title'>Work</span></h1>
                <h3 className="company">John Deere - Summer 2023</h3>
                <h4 className="job-title">Software Engineer Intern</h4>
                <p className="job-description">
                    Worked on John Deere's Dealership Sales Center web application. The service handled the sale of John Deere
                    equipment to all of John Deere's affiliate dealerships across the world. Worked on frontend development with
                    React using Typescript and Javascript. Also worked on backend development with Java and Spring Boot. Refactored
                    legacy code, wrote new features, fixed bugs, and wrote tests with JUnit, Jest, and React Testing Library. Practiced
                    Agile development with daily standups, sprint planning, and sprint retrospectives.
                </p>

                <h3 className="company">IL School District 102 - Summer 2021/2022</h3>
                <h4 className="job-title">Computer Science Instructor</h4>
                <p className="job-description">
                    Developed distinct curriculums for students from grades K-8 to teach them the basics of programming. Taught in classrooms
                    of 20-30 students. Used Scratch, Code.org, and KhanAcademy to teach fundamentals, as well as programming basics in development
                    environments with languages like Python and Javascript.
                </p>
            </div>
            <br />
            <div className='main-content'>
                <h1 className="main-content--h1"><span className='main-title'>Projects</span></h1>
                <a target="_blank" href="https://github.com/mwhiatt/manage-help" className="company">ManageHelp</a>
                <h4 className="job-title">Maintaining Developer</h4>
                <p className="job-description">
                    ManageHelp is a web application that companies can use to build schedules and manage personell. It is built with ReactJS frontend
                    and a backend that uses NodeJS and ExpressJS. The backend uses mongsoose schemas to store data in the Mongo database. The application
                    has secure authentificationa and email compatibility. I am currently continuing to devlelop the project on my own but it was originally
                    built on a scrum team with 3 other Purdue students for a software engineering class in the Spring of 2023.
                </p>
            </div>
        </div>
        
    )
}