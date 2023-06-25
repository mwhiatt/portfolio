export default function Course({number, name, description, link, term}) {
    return (
        <div className="course">
          <a target="_blank" className="course-title" href={link}>{number} {name}</a>
          <p className="course-description">{description}</p>
          <p className="course-description">Taken: {term}</p>
        </div>
    )
}