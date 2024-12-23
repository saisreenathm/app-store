import './index.css'

const AppItem = props => {
  const {item} = props
  const {appName, imageUrl} = item
  return (
    <div className="app-item">
      <img className="app-logo" alt="app logo" src={imageUrl} />
      <h1 className="app-heading">{appName}</h1>
    </div>
  )
}

export default AppItem
// appId
// appName
// :
// "Messenger"
// category
// :
// "SOCIAL"
// imageUrl
