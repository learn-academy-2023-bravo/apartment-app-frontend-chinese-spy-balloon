import Navigation from "./Navigation"
import "../App.css"

const Header = ({ current_user }) => {
  return (
    <header>
      <Navigation current_user={current_user} />
    </header>
  )
}

export default Header
