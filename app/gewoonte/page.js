'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pause from '@/components/ui/Pause'
import Play from '@/components/ui/Play'
import PageHeading from '@/components/ui/PageHeading'

export default function Gewoonte() {
	const [activeSection, setActiveSection] = useState('orienteren')
	const videoRef = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const prototypenVideoRef = useRef(null)
	const [isPrototypenPlaying, setIsPrototypenPlaying] = useState(false)

	// Refs for orienteren items
	const orienterenItem1Ref = useRef(null)
	const orienterenItem2Ref = useRef(null)
	const orienterenItem3Ref = useRef(null)
	const orienterenItem4Ref = useRef(null)

	// Refs for verbeelden arrow items
	const verbeeldenArrow1Ref = useRef(null)
	const verbeeldenArrow2Ref = useRef(null)

	const handleVideoToggle = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause()
			} else {
				videoRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	const handlePrototypenVideoToggle = () => {
		if (prototypenVideoRef.current) {
			if (isPrototypenPlaying) {
				prototypenVideoRef.current.pause()
			} else {
				prototypenVideoRef.current.play()
			}
			setIsPrototypenPlaying(!isPrototypenPlaying)
		}
	}

	// IntersectionObserver for orienteren items
	useEffect(() => {
		if (activeSection !== 'orienteren') {
			// Reset animations when switching away from orienteren
			const orienterenItems = [
				orienterenItem1Ref.current,
				orienterenItem2Ref.current,
				orienterenItem3Ref.current,
				orienterenItem4Ref.current,
			].filter(Boolean)

			orienterenItems.forEach((item) => {
				if (item) {
					const arrowWrapper = item.querySelector('.orienteren-arrow-wrapper')
					const paragraph = item.querySelector('p')
					if (arrowWrapper) arrowWrapper.classList.remove('in-view')
					if (paragraph) paragraph.classList.remove('in-view')
				}
			})
			return
		}

		const orienterenItems = [
			orienterenItem1Ref.current,
			orienterenItem2Ref.current,
			orienterenItem3Ref.current,
			orienterenItem4Ref.current,
		].filter(Boolean)

		if (orienterenItems.length === 0) return

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const item = entry.target
						const arrowWrapper = item.querySelector('.orienteren-arrow-wrapper')
						const paragraph = item.querySelector('p')

						// Add delay for staggered animation
						const index = orienterenItems.indexOf(item)
						const delay = index * 100 // 100ms delay between each item

						setTimeout(() => {
							// Animate arrow and text together
							if (arrowWrapper) {
								arrowWrapper.classList.add('in-view')
							}
							if (paragraph) {
								paragraph.classList.add('in-view')
							}

							// Unobserve after animation to prevent re-triggering
							observer.unobserve(item)
						}, delay)
					}
				})
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px',
			}
		)

		orienterenItems.forEach((item) => {
			observer.observe(item)
		})

		return () => {
			orienterenItems.forEach((item) => {
				observer.unobserve(item)
			})
		}
	}, [activeSection])

	// IntersectionObserver for verbeelden arrow items
	useEffect(() => {
		if (activeSection !== 'verbeelden') {
			// Reset animations when switching away from verbeelden
			const verbeeldenItems = [
				verbeeldenArrow1Ref.current,
				verbeeldenArrow2Ref.current,
			].filter(Boolean)

			verbeeldenItems.forEach((item) => {
				if (item) item.classList.remove('in-view')
			})
			return
		}

		const verbeeldenItems = [
			verbeeldenArrow1Ref.current,
			verbeeldenArrow2Ref.current,
		].filter(Boolean)

		if (verbeeldenItems.length === 0) return

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const item = entry.target

						// Add delay for staggered animation
						const index = verbeeldenItems.indexOf(item)
						const delay = index * 100 // 100ms delay between each item

						setTimeout(() => {
							item.classList.add('in-view')

							// Unobserve after animation to prevent re-triggering
							observer.unobserve(item)
						}, delay)
					}
				})
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px',
			}
		)

		verbeeldenItems.forEach((item) => {
			observer.observe(item)
		})

		return () => {
			verbeeldenItems.forEach((item) => {
				observer.unobserve(item)
			})
		}
	}, [activeSection])

	// Autoplay video when verbeelden section is active
	useEffect(() => {
		if (activeSection === 'verbeelden' && videoRef.current) {
			videoRef.current.play().catch((error) => {
				// Autoplay might be blocked by browser, ignore error
				console.log('Autoplay prevented:', error)
			})
		} else if (activeSection !== 'verbeelden' && videoRef.current) {
			videoRef.current.pause()
		}
	}, [activeSection])

	// Autoplay video when prototypen section is active
	useEffect(() => {
		if (activeSection === 'prototypen' && prototypenVideoRef.current) {
			prototypenVideoRef.current.play().catch((error) => {
				// Autoplay might be blocked by browser, ignore error
				console.log('Autoplay prevented:', error)
			})
		} else if (activeSection !== 'prototypen' && prototypenVideoRef.current) {
			prototypenVideoRef.current.pause()
		}
	}, [activeSection])

	return (
		<>
			<div className="page active over-mij-page" style={{ display: 'block' }}>
				<div className="over-mij-content">
					<div className="over-mij-text">
						<PageHeading title="Gewoonte" />
						<div className="text-content">
							<p className="gewoonte-subtitle">Korte beschrijving van de opdracht</p>
							<p>Voor dit project moest ik een gewoonte veranderen door zelf te experimenteren en te ervaren. De opdracht bestond uit drie onderdelen:</p>

							<ul className="gewoonte-list">
								<li><span className="gewoonte-number">1</span>Verander je gewoonte: bedenk interventie(s)</li>
								<li><span className="gewoonte-number">2</span>Monitor je proces</li>
								<li><span className="gewoonte-number">3</span>Deel je insights</li>
							</ul>

							<div className="gewoonte-content-wrapper">
								<div className="oude-gewoonte">
									<div className="image-icon-wrapper">
										<Image src="/images/gewoonte/cross.svg" alt="X icoon" width={50} height={50} />
									</div>
									<h3 className="gewoonte-titel">OUDE GEWOONTE</h3>
									<p>Bijna elke dag wraps kopen voor lunch</p>
									<ul>
										<li>Ik weet niet wat ik moet maken</li>
										<li>€ 4 per dag</li>
										<li>Ik heb geen zin</li>
									</ul>
								</div>
								<div className="nieuwe-gewoonte">
									<div className="image-icon-wrapper">
										<Image src="/images/gewoonte/check.svg" alt="Check icoon" width={50} height={50} />
									</div>
									<h3 className="gewoonte-titel">NIEUWE GEWOONTE</h3>
									<p>Zelf lunch maken</p>
									<ul>
										<li>Doel: sparen voor een Uggs</li>
										<li>€ 4 bersparen per dag</li>
									</ul>
								</div>

								<Image src="/images/gewoonte/zigzag-arrow.svg" className="zigzag-arrow" alt="" width={200} height={100} />
							</div>

							<div className="gewoonte-aanpak-wrapper">
								<div className="gewoonte-aanpak">
									<h3 className="gewoonte-aanpak-titel">Aanpak</h3>
									<p>Klein beginnen werkt beter dan alles tegelijk. Start met:</p>
									<ul className="gewoonte-aanpak-list">
										<li>2x per week</li>
										<li>Maak het makkelijk(simplifaction)</li>
										<li>Gebruik kleine duwtjes(nudging)</li>
									</ul>
								</div>
								<div className="gewoonte-waarom">
									<div className="flex flex-col items-center w-full max-w-[900px] relative">
										<img src="/images/carddeck/big-circle.svg" className="-rotate-12 z-0 pointer-events-none opacity-60 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
										<h3 className="gewoonte-waarom-titel">Waarom belangrijk voor mij?</h3>
										<p className='text-center'>€4 besparen per dag = €150 in 28 dagen → genoeg voor Uggs. <br />Plus: leren of ik gedrag kan veranderen met theorie uit Psych.</p>
										<Link href="#" className="gewoonte-link">
											Bekijk mijn zelf gemaakte poster
											<Image src="/images/carddeck/slordige-lijn.svg" alt="Slordige lijn" className="gewoonte-link-underline" width={200} height={20} />
										</Link>
									</div>
								</div>
							</div>

							<p className="gewoonte-competenties-titel">Bekijk hier welke competenties ik gebruik heb</p>

							{/* Navigation */}
							<nav className="gewoonte-nav">
								<button
									className={`gewoonte-nav-link ${activeSection === 'orienteren' ? 'active' : ''}`}
									onClick={() => setActiveSection('orienteren')}
								>
									Oriënteren en begrijpen
								</button>
								<button
									className={`gewoonte-nav-link ${activeSection === 'verbeelden' ? 'active' : ''}`}
									onClick={() => setActiveSection('verbeelden')}
								>
									Verbeelden en conceptualiseren
								</button>
								<button
									className={`gewoonte-nav-link ${activeSection === 'prototypen' ? 'active' : ''}`}
									onClick={() => setActiveSection('prototypen')}
								>
									Prototypen en uitwerken
								</button>
								<button
									className={`gewoonte-nav-link ${activeSection === 'evalueren' ? 'active' : ''}`}
									onClick={() => setActiveSection('evalueren')}
								>
									Evalueren
								</button>
							</nav>

							{/* Content Wrapper */}
							<div className="gewoonte-content-sections">
								<div id="orienteren" className={`gewoonte-content-section ${activeSection === 'orienteren' ? 'active' : ''}`}>
									<Image src="/images/gewoonte/gewoonte.jpg" alt="Gewoonte" width={800} height={600} />

									<div className="orienteren-item" ref={orienterenItem1Ref}>
										<div className="orienteren-arrow-wrapper">
											<Image src="/images/gewoonte/big-arrow-right.svg" alt="" className="orienteren-arrow" width={100} height={50} />
										</div>
										<p>Probleem geïdentificeerd: Ik kocht te vaak wraps (oude gewoonte)</p>
									</div>
									<div className="orienteren-item" ref={orienterenItem2Ref}>
										<div className="orienteren-arrow-wrapper">
											<Image src="/images/gewoonte/big-arrow-right.svg" alt="" className="orienteren-arrow" width={100} height={50} />
										</div>
										<p>Zelfonderzoek: Ik analyseerde waarom ik het eerder niet volhield</p>
									</div>
									<div className="orienteren-item" ref={orienterenItem3Ref}>
										<div className="orienteren-arrow-wrapper">
											<Image src="/images/gewoonte/big-arrow-right.svg" alt="" className="orienteren-arrow" width={100} height={50} />
										</div>
										<p>Theorie toegepast: Je onderzocht BJ Fogg's Tiny Habits methode en Psych concepten (nudging, simplification)</p>
									</div>
									<div className="orienteren-item" ref={orienterenItem4Ref}>
										<div className="orienteren-arrow-wrapper">
											<Image src="/images/gewoonte/big-arrow-right.svg" alt="" className="orienteren-arrow" width={100} height={50} />
										</div>
										<p>Job To Be Done bepaald: "Makkelijk, gezond en goedkoop lunchen zonder stress/tijd"</p>
									</div>
								</div>

								<div id="verbeelden" className={`gewoonte-content-section ${activeSection === 'verbeelden' ? 'active' : ''}`}>
									<p className="verbeelden-text">Om mensen te helpen met het besparen van geld, heb ik een app ontwikkelt waarin een draaiwiel met verschillende recepten aanwezig is. Via het draaien aan dit wiel kun je bepalen wat je die dag als lunch kan maken als je geen inspiratie hebt en om te voorkomen dat je geld uitgeeft aan het kopen van lunch. In de app staat onderin een voortgang bar voor extra motivatie en overzicht in de hoeveelheid geld die al bespaard is. Er is visuele feedback door de aanwezigheid van smlieys die de stemming/emotie aangeven.</p>

									<div className="verbeelden-video-wrapper">
										<video
											ref={videoRef}
											className="verbeelden-video"
											muted
											loop
											autoPlay
											onPlay={() => setIsPlaying(true)}
											onPause={() => setIsPlaying(false)}
										>
											<source src="/videos/wielfilm.mp4" type="video/mp4" />
											Je browser ondersteunt de video tag niet.
										</video>
										<button
											className={`verbeelden-video-play-pause ${isPlaying ? 'playing' : ''}`}
											onClick={handleVideoToggle}
											aria-label="Play/Pause video"
										>
											<svg className="play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8 5v14l11-7z" fill="currentColor" />
											</svg>
											<svg className="pause-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor" />
											</svg>
										</button>

										<div className="verbeelden-arrow-item" ref={verbeeldenArrow1Ref}>
											<Image src="/images/gewoonte/big-arrow-right.svg" className="big-arrow-right" alt="" width={100} height={50} />
											<p>Gamification: app met draaiwiel voor random recept</p>
										</div>
										<div className="verbeelden-arrow-item" ref={verbeeldenArrow2Ref}>
											<Image src="/images/gewoonte/big-arrow-right.svg" className="big-arrow-right" alt="" width={100} height={50} />
											<p>Simplification: 1 knop = random recept (geen keuzestress)</p>
										</div>
									</div>

									<div className="lunch-calendar-wrapper relative flex items-center justify-center">
										<div className="flex gap-3 items-center absolute left-0 top-[50px] w-[500px]">
											<p className="mb-0!">Tracking systeem voor voortgang</p>
											<Image
												src="/images/gewoonte/big-arrow-right.svg"
												className="rotate-180 -mt-2"
												alt="Tracking systeem voor voortgang"
												width={200}
												height={50}
											/>
										</div>

										<div className="flex gap-3 items-center absolute left-0 top-[300px]">
											<p className="mb-0!">Visuele feedback (smileys)</p>
											<Image
												src="/images/gewoonte/big-arrow-right.svg"
												className="rotate-180 -mt-2 w-[200px]"
												alt="Visuele feedback (smileys)"
												width={200}
												height={50}
											/>
										</div>

										<Image
											src="/images/gewoonte/lunch-calendar.png"
											alt="Lunch kalender"
											width={800}
											height={600}
										/>
									</div>

									<div className='flex items-center justify-center gap-10 mt-20!'>
										<div className='relative'>
											<img src="/images/carddeck/lines.svg" width={25} className='absolute -left-6 -top-6' alt="" />
											<Image src="/images/gewoonte/uggs.png" alt='UGGS poster op de muur' width={200} height={300} className="animate-nudge" />
											<img src="/images/carddeck/lines.svg" width={25} className='rotate-180 absolute -right-6 -bottom-6' alt="" />
										</div>

										<Image src="/images/gewoonte/left-curly-bracket.svg" alt='left curly bracket' width={52} height={171} />

										<p className='mt-10!'>Nudging: poster bij deur als reminder <br />
											Concrete beloning: Uggs kopen van bespaarde geld</p>
									</div>
								</div>

								<div id="prototypen" className={`gewoonte-content-section ${activeSection === 'prototypen' ? 'active' : ''}`}>
									<div className="flex flex-col items-center">
										<p>Voor dit project moest ik mijn interventies niet alleen bedenken, maar ook echt uitvoeren. Ik bouwde daatom een app met een draaiwiel, tracking en besparingen-counter. Daarnaast hing ik een poster voor extra motivatie. Gedurende 28 dagen gebruikte ik deze app elke dag en verzamelde ik data over wanneer het wel of niet lukte.</p>

										<div className='max-w-4xl relative'>
											<video
												ref={prototypenVideoRef}
												className="verbeelden-video"
												muted
												loop
												autoPlay
												onPlay={() => setIsPrototypenPlaying(true)}
												onPause={() => setIsPrototypenPlaying(false)}
											>
												<source src="/videos/prototypefilmwheellunch.mp4" type="video/mp4" />
												Je browser ondersteunt de video tag niet.
											</video>
											<button
												className={`verbeelden-video-play-pause ${isPrototypenPlaying ? 'playing' : ''}`}
												onClick={handlePrototypenVideoToggle}
												aria-label="Play/Pause video"
											>
												<Play />
												<Pause />
											</button>
											<div className='absolute mt-12!'>
												<p>Klik hier om de live app te bekijken(<a className='font-montez' href="https://kmd98x.github.io/kmdgewoonteopdracht/">https://kmd98x.github.io/kmdgewoonteopdracht/</a>)</p>

												<img src="/images/gewoonte/left-arrow-curved.svg" className='rotate-[20] absolute -top-24 -right-48' width={148} alt="Pijl naar links" />
											</div>
										</div>
									</div>
								</div>

								<div id="evalueren" className={`gewoonte-content-section ${activeSection === 'evalueren' ? 'active' : ''}`}>
									<p>Na 28 dagen verzamelen van data kon ik evalueren wat werkte. Ik behaalde 100 euro in plaats van mijn gestelde doel 150 euro en zag dat vooral het draaiwiel, de euro-teller en de poster effectief waren. Sociale steun had ik meer kunnen gebruiken. Deze inzichten laten zien welke interventies echt impact hebben op gedragsverandering.</p>

									<Image src="/images/gewoonte/interventies.svg" className='mx-auto!' alt="Interventies document" width={826} height={842} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
