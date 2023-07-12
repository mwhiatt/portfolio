import Course from "./Course"

export default function EduBody({uni, courses}) {
  return (
    <div>
      <h5 className="degree-uni">{uni}</h5>
      <h5 className="degree-coursework--h5">Relevant Coursework</h5>
      {courses ?
      courses.map(course =>( 
        <Course number={course.number} name={course.name} description={course.description} link={course.link} term={course.term} key={course.number}/>
        )) : (<p>None</p>)}
    </div>
  )
}