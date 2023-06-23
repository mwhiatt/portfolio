export default function EduHeader({degree, date}) {
  return (
    <header>
      <h1 className="main-content--h1">
          <span className='main-title'>{degree}</span>
          <span className='title-date'>({date})</span>
      </h1>
    </header>
  )
}