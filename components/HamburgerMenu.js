'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false)
	const [submenuOpen, setSubmenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}


	return (
		<>
			<div
				className={`hamburger-menu ${isOpen ? 'active' : ''}`}
				onClick={toggleMenu}
			>
				<span className="hamburger-line"></span>
				<span className="hamburger-line"></span>
				<span className="hamburger-line"></span>
			</div>

			<div
				className={`fixed top-0 left-0 w-full h-full bg-[rgba(225,225,225,0.3)] backdrop-blur-[50px] z-1000 flex items-center justify-center transition-all duration-400 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
				onClick={(e) => {
					if (e.target === e.currentTarget) closeMenu()
				}}
			>
				<div className="menu-label">nav menu</div>
				<button className="menu-close" onClick={closeMenu}>×</button>
				<div className="menu-content">
					<Link href="/" className="menu-item" onClick={closeMenu}>Home</Link>
					<div
						className="menu-item-wrapper"
						onMouseEnter={() => setSubmenuOpen(true)}
						onMouseLeave={() => setSubmenuOpen(false)}
					>
						<Link
							href="/Inhoudsopgave"
							className="menu-item has-submenu"
							onClick={() => {
								setSubmenuOpen(false)
								closeMenu()
							}}
						>
							Inhoud
						</Link>
						<div className={`submenu ${submenuOpen ? 'active' : ''}`}>
							<Link href="/0-meting" className="submenu-item" onClick={closeMenu}>0- Meting</Link>
							<Link href="/ontwikkelplan" className="submenu-item" onClick={closeMenu}>Ontwikkelplan</Link>
							<Link href="/carddeck" className="submenu-item" onClick={closeMenu}>Carddeck</Link>
							<Link href="/bootcamp" className="submenu-item" onClick={closeMenu}>Bootcamp</Link>
							<Link href="/gewoonte" className="submenu-item" onClick={closeMenu}>Gewoonte</Link>
							<Link href="/workshop" className="submenu-item" onClick={closeMenu}>Workshop</Link>
							<Link href="/omnient" className="submenu-item" onClick={closeMenu}>Omnient</Link>
						</div>
					</div>
					<Link href="/over-mij" className="menu-item" onClick={closeMenu}>Over Mij</Link>
				</div>
			</div>
		</>
	)
}
