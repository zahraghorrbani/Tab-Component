import { useState } from 'react';
import './App.css'

const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="tab">
      <div className="tab__header">
        {
          tabData.map((item) => {
            return (
              <button onClick={() => setActiveTab(item.id)} key={item.id} className={activeTab === item.id ? "active" : ""}>
                <span>{item.title}</span>
                <span className="tab-indicator"></span>
              </button>
            )
          })
        }
      </div>
      <div className="tab__content">{tabData[activeTab - 1].content}</div>
    </div>
  )
}

export default App
