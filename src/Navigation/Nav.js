import { FiHeart } from "react-icons/fi"
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai"

import "./Nav.css"

function Navigation({handleInputChange, query}) {
  return <nav>
    <div className="nav-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="search-input"
        placeholder="Enter your search shoes"
      />
    </div>

    <div className="profile-container">
      <a href="#">
        <FiHeart className="nav-icons" />
      </a>
      <a href="#">
        <AiOutlineShoppingCart className="nav-icons" />
      </a>
      <a href="#">
        <AiOutlineUserAdd className="nav-icons" />
      </a>

    </div>
  </nav>
}

export default Navigation