import { useState, useContext, createContext, ReactNode } from 'react'

type ContextType = {
	open: boolean;
	closeSidebar: () => void;
	openSidebar: () => void;
}

type Providertype = {
	children: ReactNode
}

const SidebarContext = createContext({} as ContextType)

export function SidebarContextFunction () {
	return (
		useContext(SidebarContext)
	)
}


export function SidebarContextProvider ({ children }: Providertype) {
	const [ open, setOpen ] = useState<boolean>(false)

	function closeSidebar () {
		setOpen(false)
	}

	function openSidebar () {
		setOpen(true)
	}

	return (
		<SidebarContext.Provider value={{ open, closeSidebar, openSidebar }}>
			{children}
		</SidebarContext.Provider>
	)
}