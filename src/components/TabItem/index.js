import './index.css'

const TabItem = props => {
  const {item, onClickCategory} = props

  const {displayText, tabId} = item
  console.log(item)
  const onClickButton = () => {
    onClickCategory(tabId)
  }
  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onClickButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
