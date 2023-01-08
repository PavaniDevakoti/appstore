// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickingTab = () => {
    updateTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-name' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-name ${activeTabClassName}`}
        onClick={onClickingTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
