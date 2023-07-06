export default function Experience() {
    return (
        <div className="flex flex-col items-center m-4">
            <div className="rounded-lg shadow-lg shadow-purple-800 text-white mb-12 w-4/5">
                <h1 className="main-content--h1 text-purple"><span className='main-title'>Work</span></h1>
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

            <div className='main-content w-4/5'>
                <h1 className="main-content--h1"><span className='main-title'>Projects</span></h1>
                <a target="_blank" href="https://github.com/mwhiatt/manage-help" className="company">ManageHelp</a>
                <h4 className="job-title">Maintaining Developer</h4>
                <p className="job-description">
                    ManageHelp is a web application that companies can use to build schedules and manage personell. It is built with ReactJS frontend
                    and a backend that uses NodeJS and ExpressJS. The backend uses mongsoose schemas to store data in the Mongo database. The application
                    has secure authentificationa and email compatibility. I am currently continuing to devlelop the project on my own but it was originally
                    built on a scrum team with 3 other Purdue students for a software engineering class in the Spring of 2023.
                </p>

                <a target="_blank" href="https://github.com/mwhiatt/http-server" className="company">HTTP Server</a>
                <h4 className="job-title">Developer</h4>
                <p className="job-description">
                    Developed a HTTP server in C++ that can handle GET requests. The server can be ran in multithreaded, multiprocess, and standard configurations
                    and has basic HTTP authentification implemented. The server can also handle requests for static files and serves 200, 401, and 404 responses with
                    more robust support coming in the future. 
                </p>

                <a target="_blank" href="https://github.com/mwhiatt/CS180Project5" className="company">Quiz Tool - Fall 2021</a>
                <h4 className="job-title">Developer</h4>
                <p className="job-description">
                    This project was built for my Introduction to OOP class at Purdue. It is a Java application that allows users to create quizzes and take quizzes.
                    The application stores user data with file I/O locally. It features a graphical user interface built with swing. The application provides support
                    for teachers to create quizzes from scratch, upload quiz files, and edit existing quizzes. It also allows students to take quizzes and view their
                    scores once grades have been entered by their instructor.
                </p>
            </div>
        </div>
        
    )
}