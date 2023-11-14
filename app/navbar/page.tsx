import ActionButton from "./action-button"
import Logo from "./logo"
import NavigationBar from "./navigation-bar"


const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-6 border-b'>
        <Logo/>
        <NavigationBar/>
        <ActionButton/>
    </div>
  )
}

export default Navbar
