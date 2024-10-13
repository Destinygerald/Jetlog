import './App.css'
import './App.mobile.css'
import { BsX } from 'react-icons/bs'
import { SidebarContextFunction } from './context/SidebarContext.tsx'
import React, { useRef, useEffect } from 'react'

export function Sidebar() {

	const ref = useRef<HTMLDivElement>(null)
	const { open, closeSidebar } = SidebarContextFunction()


	useEffect(() => {
		
		function handleClick (e: React.PointerEvent<HTMLDivElement>) {
			const sidebar = document.querySelector('.sidebar')

			if (!sidebar) return;

			if (!ref?.current?.contains(e?.target as HTMLDivElement)) {
				closeSidebar()
			}
		}

		const app = document.querySelector('.app')

		// @ts-ignore
		app?.addEventListener('pointerdown', (e) => handleClick(e))

		// @ts-ignore
		return () => app?.removeEventListener('pointerdown', (e) => handleClick(e))

	}, [])

	return (
		<div className={open ? 'sidebar' : 'sidebar-hide'} ref={ref}>
			<span className='exit' onClick={closeSidebar}> <BsX /> </span>

			<div className='sidebar-cnt'>
				<div className='active'>Home</div>
				<div>Services</div>
				<div>About</div>
				<div>Contact us</div>
			</div>
		</div>
	)
}