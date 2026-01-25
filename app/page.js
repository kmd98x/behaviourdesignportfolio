'use client'

import { useState, useRef } from 'react'
import ScrollingFooter from '@/components/ScrollingFooter'
import Image from 'next/image'

export default function Home() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const [isHovering, setIsHovering] = useState(false)
	const h1Ref = useRef(null)

	const handleMouseMove = (e) => {
		if (h1Ref.current) {
			const rect = h1Ref.current.getBoundingClientRect()
			setMousePosition({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top
			})
		}
	}

	const handleMouseEnter = () => {
		setIsHovering(true)
	}

	const handleMouseLeave = () => {
		setIsHovering(false)
	}

	return (
		<>
			<section id="home" className="page active">
				<div className="home-content">
					<div className="home-logo-wrapper" id="logoWrapper" style={{ position: 'relative' }}>
						<h1 
							ref={h1Ref}
							className='flex flex-col items-center justify-center scale-125 relative cursor-pointer'
							style={{ isolation: 'isolate' }}
							onMouseMove={handleMouseMove}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<span className='font-montez text-7xl text-orange -mb-6! relative z-10'>Martina</span>
							<div className="relative" style={{ mixBlendMode: 'screen' }}>
								<span className="uppercase font-inter font-black text-7xl text-body-alt relative z-10 block">
									Doekharan
								</span>
								{isHovering && (
									<span
										className="absolute pointer-events-none rounded-full blur-3xl transition-opacity"
										style={{
											left: `${mousePosition.x}px`,
											top: `${mousePosition.y}px`,
											transform: 'translate(-50%, -50%)',
											width: '120px',
											height: '120px',
											backgroundColor: '#FD5E01',
											opacity: 1,
											zIndex: 1
										}}
									/>
								)}
							</div>
						</h1>
					</div>
					<div className="home-bottom-photo">
						<Image
							src="/images/kmd.png"
							alt="KMD"
							className="kmd-photo-home"
							width={400}
							height={400}
							priority
						/>
					</div>
				</div>
			</section>

			<ScrollingFooter />
		</>
	)
}
