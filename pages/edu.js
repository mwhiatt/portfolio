import EduHeader from "../components/EduHeader"

export default function Edu() {
    return (
        <div className='main-content'>
            <EduHeader degree='M.S. Computer Science' date='Fall 2023 - Spring 2025' />
            <p>Purdue University - West Lafayette, IN</p>
            <EduHeader degree='B.S. Computer Science' date='Fall 2021 - Spring 2024' />
            <p>Purdue University - West Lafayete, IN</p>
            <EduHeader degree='B.S. Mathematics' date='Fall 2021 - Spring 2024' />
            <p>Purdue University - West Lafayette, IN</p>
            <EduHeader degree='High School Diploma' date='Fall 2017 - Spring 2021' />
            <p>Lyons Township High School - LaGrange, IL</p>
        </div>
    )
}