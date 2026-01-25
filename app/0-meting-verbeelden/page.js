'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import PageHeading from '@/components/ui/PageHeading'

export default function ZeroMetingVerbeeldenPage() {
	const [activeSection, setActiveSection] = useState('waar-ik-nu-sta')
	const [percentage, setPercentage] = useState(0)
	const targetPercentage = 65

	useEffect(() => {
		if (activeSection === 'waar-ik-nu-sta') {
			setPercentage(0)

			const easeOut = (t) => {
				return 1 - Math.pow(1 - t, 3)
			}

			const duration = 2000
			const startTime = Date.now()

			const animate = () => {
				const elapsed = Date.now() - startTime
				const progress = Math.min(elapsed / duration, 1)
				const easedProgress = easeOut(progress)
				const currentPercentage = Math.floor(easedProgress * targetPercentage)

				setPercentage(currentPercentage)

				if (progress < 1) {
					requestAnimationFrame(animate)
				} else {
					setPercentage(targetPercentage)
				}
			}

			const animationFrame = requestAnimationFrame(animate)
			return () => cancelAnimationFrame(animationFrame)
		}
	}, [activeSection])

	return (
		<div className="page active over-mij-page" style={{ display: 'block' }}>
			<div className="over-mij-content">
				<div className="over-mij-text">
					<PageHeading title="0- Meting" />
					<div className="text-content" style={{ marginTop: '30px' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
							<Link href="/0-meting" className="back-arrow">←</Link>
							<h2 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '28px', color: 'var(--orange)', margin: 0 }}>2. Verbeelden en conceptualiseren</h2>
						</div>
					</div>
					<nav className="competentie-nav">
						<a
							href="#waar-ik-nu-sta"
							className={`competentie-nav-link ${activeSection === 'waar-ik-nu-sta' ? 'active' : ''}`}
							onClick={(e) => {
								e.preventDefault()
								setActiveSection('waar-ik-nu-sta')
							}}
						>
							Waar ik nu sta
						</a>
						<a
							href="#ontwikkeling"
							className={`competentie-nav-link ${activeSection === 'ontwikkeling' ? 'active' : ''}`}
							onClick={(e) => {
								e.preventDefault()
								setActiveSection('ontwikkeling')
							}}
						>
							Ontwikkeling tot nu toe
						</a>
						<a
							href="#goed-minder-goed"
							className={`competentie-nav-link ${activeSection === 'goed-minder-goed' ? 'active' : ''}`}
							onClick={(e) => {
								e.preventDefault()
								setActiveSection('goed-minder-goed')
							}}
						>
							Wat goed/minder goed gaat
						</a>
						<a
							href="#voorbeelden"
							className={`competentie-nav-link ${activeSection === 'voorbeelden' ? 'active' : ''}`}
							onClick={(e) => {
								e.preventDefault()
								setActiveSection('voorbeelden')
							}}
						>
							Voorbeelden
						</a>
					</nav>
					<div className="competentie-content-wrapper">
						<div className={`competentie-content ${activeSection === 'waar-ik-nu-sta' ? 'active' : ''}`} id="waar-ik-nu-sta">
							<div className="waar-ik-nu-sta-wrapper">
								<p>Ik kan ideeën bedenken, maar vaak blijf ik hangen bij een paar concepten in plaats van een breed scala aan opties te verkennen. Ik gebruik schetsen en moodboards om mijn ideeën zichtbaar te maken, bijvoorbeeld tijdens groepsprojecten, maar ik ben nog niet sterk in het vertellen van een verhaal bij mijn concepten, waardoor anderen niet altijd begrijpen waarom mijn idee goed is.</p>
								<div className="progress-bar-container">
									<div className="progress-bar">
										<div
											className="progress-bar-fill"
											style={{ width: `${percentage}%` }}
										></div>
										<span className="progress-bar-text">{percentage}%</span>
									</div>
								</div>
							</div>
						</div>
						<div className={`competentie-content ${activeSection === 'ontwikkeling' ? 'active' : ''}`} id="ontwikkeling">
							<p>Tijdens groepsbrainstorms bedenk ik gemakkelijk verschillende ideeën en oplossingen. Tools zoals Figma helpen me om deze concepten visueel uit te werken, maar ik merk dat ik ze vaak meteen in hi-fi uitwerk. Het is echter handiger om eerst met lo-fi schetsen te beginnen, omdat het sneller laat zien waar een idee om draait en ik eerst verschillende opties kan uitproberen voordat ik aan de details werk.</p>
						</div>
						<div className={`competentie-content ${activeSection === 'goed-minder-goed' ? 'active' : ''}`} id="goed-minder-goed">
							<h3 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '22px', color: 'var(--orange)', marginTop: '20px', marginBottom: '15px' }}>Wat goed gaat</h3>
							<ul style={{ marginBottom: '25px', paddingLeft: '20px' }}>
								<li>Gebruik maken van moodboards voor sfeerimpressies</li>
								<li>Veel ideeën in korte tijd bedenken</li>
							</ul>
							<h3 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '22px', color: 'var(--orange)', marginTop: '20px', marginBottom: '15px' }}>Wat minder goed gaat</h3>
							<ul style={{ paddingLeft: '20px' }}>
								<li>Out-of-the-box denken als er weinig tijd is</li>
								<li>Ideeën overtuigend presenteren en toelichten</li>
							</ul>
						</div>
						<div className={`competentie-content ${activeSection === 'voorbeelden' ? 'active' : ''}`} id="voorbeelden">
							<Swiper
								effect="coverflow"
								grabCursor={true}
								centeredSlides={true}
								slidesPerView="auto"
								loop={false}
								coverflowEffect={{
									rotate: 50,
									stretch: 0,
									depth: 100,
									modifier: 1,
									slideShadows: false,
								}}
								navigation={true}
								pagination={{
									clickable: true,
								}}
								modules={[EffectCoverflow, Navigation, Pagination]}
								className="example-swiper"
							>
								<SwiperSlide className="w-[900px]!">
									<div className="w-full h-[600px] flex items-center justify-center">
										<Image
											src="/images/0-meting/verbeelden-en-conceptualiseren/frankwatching-notebook-cover.png"
											alt="Frankwatching Notebook Cover"
											width={900}
											height={600}
											className="w-full h-full object-contain rounded-lg shadow-lg"
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide className="w-[900px]!">
									<div className="w-full h-[600px] flex items-center justify-center">
										<Image
											src="/images/0-meting/verbeelden-en-conceptualiseren/fw-adword-banner.png"
											alt="FW Adword Banner"
											width={900}
											height={600}
											className="w-full h-full object-contain rounded-lg shadow-lg"
										/>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
