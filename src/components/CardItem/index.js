import './index.css'

const CardItem = props => {
  const {className, title, description, imgUrl} = props
  return (
    <li className={`card ${className}`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-paragraph">{description}</p>
      <img className="card-img" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
