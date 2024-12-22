import './index.css'

const TabItem = props => {
  const {item} = props

  const {displayText} = item

  const onClickButton = () => {
    console.log(displayText)
  }

  console.log(item)
  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onClickButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
