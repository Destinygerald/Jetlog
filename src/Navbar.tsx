import './App.css'
import './App.mobile.css'
import { CiMenuBurger } from 'react-icons/ci'
import { SidebarContextFunction } from './context/SidebarContext.tsx'

export function Navbar () {

	const { openSidebar } = SidebarContextFunction()

	return (
		<div className='navbar'>
			<div className='nav-logo'>JetLog</div>

			<div className='nav-items'>
				<span>Home</span>
				<span>Services</span>
				<span>Route</span>
				<span>About</span>
				<span>Contact Us</span>
			</div>

			<button> Reach Out to Us </button>

			<div className='nav-menu' onClick={openSidebar}>
				<CiMenuBurger />
			</div>
		</div>
	)
}
