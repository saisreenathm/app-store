import './index.css'

const AppItem = props => {
  const {item} = props
  const {appName, imageUrl} = item
  return (
    <li className="app-item">
      <img className="app-logo" alt={appName} src={imageUrl} />
      <h1 className="app-heading">{appName}</h1>
    </li>
  )
}

export default AppItem
