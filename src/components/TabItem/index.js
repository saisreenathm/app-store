import './index.css'

const TabItem = props => {
  const {item, onClickCategory, currentCategory} = props

  const {displayText, tabId} = item
  console.log(`${currentCategory} ${tabId}`)
  const onClickButton = () => {
    console.log('Hi in Tab Component')
    onClickCategory(tabId)
  }
  const className = `button${currentCategory === tabId ? '-selected' : ''}`

  return (
    <li className="list-item">
      <button className={className} type="button" onClick={onClickButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
