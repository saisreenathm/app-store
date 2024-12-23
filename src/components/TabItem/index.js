import './index.css'

const TabItem = props => {
  const {item, onClickCategory, category} = props

  const {displayText, tabId} = item
  console.log(category + '  ' + tabId)
  const onClickButton = () => {
    onClickCategory(tabId)
  }
  return (
    <li className="list-item">
      <button
        className={category === tabId ? 'selected-button' : 'button'}
        type="button"
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
