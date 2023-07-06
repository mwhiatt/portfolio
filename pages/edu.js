import EduHeader from "../components/EduHeader"
import EduBody from "../components/EduBody";
import Collapsible from 'react-collapsible';
import mscourses from "../data/mscourses";
import bscourses from "../data/bscourses";
import mathcourses from "../data/mathcourses";

export default function Edu() {
    return (
        <div className='main-content w-4/5 m-auto'>
            <Collapsible className="degree" trigger={[<EduHeader degree='M.S. Computer Science' date='Fall 2023 - Spring 2025' />, ""]}>
                <EduBody uni="Purdue University - West Lafayette, IN" courses={mscourses.courses}/>
            </Collapsible>
            <Collapsible className="degree" trigger={[<EduHeader degree='B.S. Computer Science' date='Fall 2021 - Spring 2024' />, ""]}>
                <EduBody uni="Purdue University - West Lafayette, IN" courses={bscourses.courses}/>
            </Collapsible>
            <Collapsible className="degree" trigger={[<EduHeader degree='B.S. Mathematics' date='Fall 2021 - Spring 2024' />, ""]}>
                <EduBody uni="Purdue University - West Lafayette, IN" courses={mathcourses.courses}/>
            </Collapsible>
            <Collapsible className="degree" trigger={[<EduHeader degree='High School Diploma' date='Fall 2017 - Spring 2021' />, ""]}>
                <h5 className="degree-uni">Lyons Township High School - LaGrange, IL</h5>
            </Collapsible>
        </div>
    )
}