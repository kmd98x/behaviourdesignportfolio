'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Tab from '@/components/ui/Tab'

export default function CarddeckPage() {
	const [activeSection, setActiveSection] = useState('beschrijving')
	const [openAccordion, setOpenAccordion] = useState(null)
	const [lightboxImage, setLightboxImage] = useState(null)
	const [isLightboxOpen, setIsLightboxOpen] = useState(false)
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

	const toggleAccordion = (index) => {
		setOpenAccordion(openAccordion === index ? null : index)
		// Reset slideshow to first image when opening accordion
		if (index === 2 && openAccordion !== 2) {
			setCurrentSlideIndex(0)
		}
	}

	const openLightbox = (src, alt) => {
		setLightboxImage({ src, alt })
		setIsLightboxOpen(true)
		document.body.style.overflow = 'hidden'
	}

	const closeLightbox = () => {
		setIsLightboxOpen(false)
		setLightboxImage(null)
		document.body.style.overflow = ''
	}

	// Handle Escape key
	useEffect(() => {
		if (!isLightboxOpen) return

		const handleEscape = (e) => {
			if (e.key === 'Escape') {
				setIsLightboxOpen(false)
				setLightboxImage(null)
				document.body.style.overflow = ''
			}
		}

		window.addEventListener('keydown', handleEscape)

		return () => {
			window.removeEventListener('keydown', handleEscape)
		}
	}, [isLightboxOpen])

	// Slideshow auto-advance functionality
	useEffect(() => {
		// Only run slideshow when accordion is open (index 2 = "Evalueren")
		if (openAccordion !== 2) return

		const slideshowInterval = setInterval(() => {
			setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % 5) // 5 images total
		}, 3000)

		return () => {
			clearInterval(slideshowInterval)
		}
	}, [openAccordion])

	return (
		<>
			<div className="page active over-mij-page" style={{ display: 'block' }}>
				<div className="over-mij-content">
					<div className="over-mij-text">
						<h1 className="section-title">Carddeck</h1>
						
						<Image 
							src="/images/lijn.svg" 
							alt="Carddeck" 
							className="over-mij-title-image"
							width={371}
							height={50}
						/>
						
						<div className="carddeck-video-wrapper">
							<video muted autoPlay loop className="carddeck-video">
								<source src="/videos/carddeckfilm.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
							
							<p className="carddeck-video-text">
								<Image 
									src="/images/carddeck/arrow-jump-right.svg" 
									className="arrow-right" 
									alt="Pijlje"
									width={150}
									height={150}
								/>
								<Image 
									src="/images/carddeck/big-circle.svg" 
									alt="" 
									className="carddeck-circle-bg"
									width={300}
									height={300}
								/>
								Omdat het onderwerp draaide om kaarten, wilde ik dat mijn prototype ook echt aanvoelde als een echte set speelkaarten. Daarom heb ik geprobeerd om het ontwerp zo vorm te geven dat het lijkt alsof je echte kaarten in handen hebt — bijvoorbeeld door het gebruik van afgeronde hoeken, een herkenbare achterkant en een 'flip'-effect in de digitale versie.
								Door te werken aan een realistisch prototype kon ik beter nadenken over vorm, gebruikservaring en presentatie. Het hielp mij om te begrijpen hoe een fysiek product digitaal overtuigend kan worden weergegeven.

								<a 
									href="https://www.figma.com/design/hazm3CZKsfa34msiY1NEtb/Emotion-typology-carddeck-prototype?node-id=37-2&t=cfcx559w6F64khbP-0&fuid=1102224205114188958" 
									style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '16px' }}
									target="_blank"
									rel="noopener noreferrer"
								>
									Bekijk hier het bestand
									<Image 
										src="/images/carddeck/slordige-lijn.svg" 
										alt="Slordige lijn"
										width={200}
										height={20}
									/>
								</a>

								<Image 
									src="/images/carddeck/loop-arrow-down.svg" 
									className="loop-arrow-down" 
									alt="Loop arrow down"
									width={50}
									height={100}
								/>

								<span className="prototypen-en-uitwerken-tekst">Prototypen en Uitwerken</span>
							</p>
						</div>
						
						{/* Navigation */}
						<nav className="carddeck-nav flex flex-row gap-[15px] my-[50px] flex-wrap">
							<Tab
								label="Korte beschrijving van de opdracht"
								sectionId="beschrijving"
								activeSection={activeSection}
								onClick={() => setActiveSection('beschrijving')}
							/>
							<Tab
								label="Waarom heb ik voor dit gekozen?"
								sectionId="waarom"
								activeSection={activeSection}
								onClick={() => setActiveSection('waarom')}
							/>
							<Tab
								label="Welke competenties ik heb toegepast"
								sectionId="competenties"
								activeSection={activeSection}
								onClick={() => setActiveSection('competenties')}
							/>
							<Tab
								label="Reflectie"
								sectionId="reflectie"
								activeSection={activeSection}
								onClick={() => setActiveSection('reflectie')}
							/>
						</nav>
						
						{/* Content Wrapper */}
						<div className="carddeck-content-wrapper">
							{/* Korte beschrijving van de opdracht */}
							<div className={`carddeck-content-section ${activeSection === 'beschrijving' ? 'active' : ''}`}>
								<p className="carddeck-text">Voor dit project heb ik een carddeck ontworpen over het onderwerp <strong>Typology of Emotions</strong>. Het doel was om theorie en kennis over emoties te vertalen naar duidelijke, praktische kaarten die ontwerpers kunnen gebruiken. Elke kaart moest uitleg en voorbeelden bevatten, zodat iemand zonder voorkennis het onderwerp kon begrijpen en toepassen.</p>
								
								<p className="carddeck-text">We gebruikten hiervoor de <strong>S.Ex.I.-methode</strong> (State, Explain, Illustrate):</p>
								
								<ul className="carddeck-list">
									<li><Image src="/images/carddeck/State.svg" alt="State" width={250} height={250} /></li>
									<li><Image src="/images/carddeck/Explain.svg" alt="Explain" width={250} height={250} /></li>
									<li><Image src="/images/carddeck/Illustrate.svg" alt="Illustrate" width={250} height={250} /></li>
								</ul>
								
								<div 
									className="carddeck-image-wrapper" 
									onClick={() => openLightbox('/images/carddeck/legenda-opengeklapt.svg', 'Legenda opengeklapt')}
									style={{ cursor: 'pointer' }}
								>
									<Image 
										src="/images/carddeck/legenda-opengeklapt.svg" 
										alt="Legenda opengeklapt" 
										className="carddeck-content-image"
										width={800}
										height={600}
									/>
									<div className="magnify-overlay">
										<svg className="magnify-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
											<path d="m20 20-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
										</svg>
									</div>
								</div>

								<p className="carddeck-text">Daarnaast moest de card ook <strong>relevant zijn voor ontwerpers</strong>, met concrete tips, do's & don'ts en voorbeelden uit de praktijk.</p>
							</div>
							
							{/* Waarom heb ik voor dit gekozen? */}
							<div className={`carddeck-content-section ${activeSection === 'waarom' ? 'active' : ''}`}>
								<p className="carddeck-text">Ik heb gekozen voor Typology of Emotions, omdat emoties ook in mijn eigen leven een grote rol spelen. Soms vind ik het lastig om te begrijpen of te herkennen wat ik voel en hoe ik daarmee moet omgaan. Door dit onderwerp te onderzoeken, wilde ik beter leren begrijpen wat emoties zijn en hoe ze invloed hebben op mensen en op ontwerp. Ik heb mijn carddeck zelf ontworpen in Figma, zodat ik de informatie op een visuele manier kon verwerken. Dat hielp mij om de theorie beter te onthouden. Door de do's en don'ts en concrete voorbeelden uit te werken, kon ik de kennis niet alleen toepassen op design, maar ook beter begrijpen hoe emoties in het algemeen werken.</p>
							</div>
							
							{/* Welke competenties ik heb toegepast */}
							<div className={`carddeck-content-section ${activeSection === 'competenties' ? 'active' : ''}`}>
								<div className="carddeck-accordion">
									<div className={`accordion-item ${openAccordion === 0 ? 'active' : ''}`}>
										<div className="accordion-header" onClick={() => toggleAccordion(0)}>
											<Image src="/images/carddeck/lines.svg" alt="Lines" width={30} height={30} />
											<span className="accordion-title">Oriënteren en begrijpen</span>
											<span className="accordion-arrow">›</span>
										</div>
										<div className="accordion-content">
											<p className="carddeck-text">Ik begon met het onderzoeken van het onderwerp. Ik heb verschillende bronnen over emoties gelezen en simpel samengevat op mijn kaarten. Tijdens mijn onderzoek heb ik alle verschillende emoties bekeken die er bestaan. Sommige kende ik nog niet eens bij naam, en ik wist ook niet dat elke emotie een eigen kleur had. Door mijn research weet ik nu beter wat emoties betekenen, hoe ze ontstaan en hoe je ermee kunt omgaan.</p>
											<Image 
												src="/images/carddeck/emotional-typology.png" 
												alt="Emotion Typology" 
												className="carddeck-accordion-image"
												width={800}
												height={500}
											/>
										</div>
									</div>
									<div className={`accordion-item ${openAccordion === 1 ? 'active' : ''}`}>
										<div className="accordion-header" onClick={() => toggleAccordion(1)}>
											<span className="accordion-title">Verbeelden en conceptualiseren</span>
											<span className="accordion-arrow">›</span>
										</div>
										<div className="accordion-content">
											<p className="carddeck-text">Bij het maken van de kaarten moest ik theorieën over emoties visueel en eenvoudig weergeven. Ik heb gebruikgemaakt van de website emotiontypology.com, waar ik inspiratie haalde uit de kleurenschema's en de manier waarop emoties daar eenvoudig worden uitgelegd. Dat hielp mij om mijn eigen kaarten duidelijker en toegankelijker te maken.</p>
											<p className="carddeck-text">Daarnaast heb ik gebruikgemaakt van storytelling, zodat de uitleg niet alleen informatief was, maar ook herkenbaar en makkelijk te begrijpen. Door kleine voorbeelden of korte situaties toe te voegen, kon ik laten zien hoe een emotie in de praktijk voorkomt.</p>
										</div>
									</div>
									<div className={`accordion-item ${openAccordion === 2 ? 'active' : ''}`}>
										<div className="accordion-header" onClick={() => toggleAccordion(2)}>
											<span className="accordion-title">Evalueren</span>
											<span className="accordion-arrow">›</span>
										</div>
										<div className="accordion-content">
											<p className="carddeck-text">Ik heb verschillende versies van mijn carddeck gemaakt en telkens geëvalueerd wat beter kon. Door te kijken naar duidelijkheid, kleurgebruik en leesbaarheid kon ik verbeteringen maken tot ik een versie had die goed werkte.</p>

											<div className="carddeck-slideshow">
												<div className="slideshow-container">
													<Image src="/images/carddeck/anger-image-1.svg" alt="Carddeck versie 1" className={`slideshow-image ${currentSlideIndex === 0 && openAccordion === 2 ? 'active' : ''}`} width={800} height={600} />
													<Image src="/images/carddeck/anger-image-2.svg" alt="Carddeck versie 2" className={`slideshow-image ${currentSlideIndex === 1 && openAccordion === 2 ? 'active' : ''}`} width={800} height={600} />
													<Image src="/images/carddeck/anger-image-3.svg" alt="Carddeck versie 3" className={`slideshow-image ${currentSlideIndex === 2 && openAccordion === 2 ? 'active' : ''}`} width={800} height={600} />
													<Image src="/images/carddeck/anger-image-4.svg" alt="Carddeck versie 4" className={`slideshow-image ${currentSlideIndex === 3 && openAccordion === 2 ? 'active' : ''}`} width={800} height={600} />
													<Image src="/images/carddeck/anger-image-5.svg" alt="Carddeck versie 5" className={`slideshow-image ${currentSlideIndex === 4 && openAccordion === 2 ? 'active' : ''}`} width={800} height={600} />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							{/* Reflectie */}
							<div className={`carddeck-content-section ${activeSection === 'reflectie' ? 'active' : ''}`}>
								<p className="carddeck-text">Ik vond het project erg interessant, vooral omdat het ook iets persoonlijks voor mij is. Emoties spelen een grote rol in mijn dagelijks leven, en soms weet ik niet goed wat ik voel of hoe ik ermee om moet gaan. Door dit project kan ik nu terugkijken naar mijn bronnen en zien hoe ik met een emotie kan omgaan als ik het even niet weet.</p>
								<p className="carddeck-text">Het onderzoeken van emoties en hun betekenissen was leerzaam. Ik wist bijvoorbeeld niet dat elke emotie een eigen kleur of sfeer kan hebben, en dat ontwerpers dit bewust kunnen gebruiken om bepaalde gevoelens over te brengen.</p>
								<p className="carddeck-text">In het begin wist ik niet goed hoe en waar ik moest beginnen. Het maken van de kaarten was lastig, vooral om de theorie duidelijk en eenvoudig te laten zien. Maar door te schetsen, feedback te vragen en aan te passen, werd het steeds beter. Toen het prototype echt op een set speelkaarten leek, vond ik dat een groot succes.</p>
								<p className="carddeck-text">Ik heb geleerd dat theorie pas echt handig is als je het kunt uitleggen en omzetten naar iets dat anderen kunnen gebruiken. Ook heb ik ontdekt dat ik visueel sterker ben dan ik dacht. Het combineren van onderzoek, vormgeving en storytelling vond ik heel leuk.</p>
								<p className="carddeck-text">Als ik dit opnieuw doe, zou ik de kaarten vaker laten testen door echte ontwerpers of gebruikers.</p>
							</div>
						</div>
					</div>
				</div>
				<Image 
					src="/images/carddeck/confution-emotion-card.svg" 
					alt="Confusion emotion card" 
					className="confution-emotion-card"
					width={200}
					height={300}
				/>
			</div>

			{/* Lightbox Modal */}
			{isLightboxOpen && lightboxImage && (
				<div className={`lightbox-modal ${isLightboxOpen ? 'active' : ''}`}>
					<div className="lightbox-overlay" onClick={closeLightbox}></div>
					<div className="lightbox-content">
						<button 
							className="lightbox-close" 
							onClick={closeLightbox}
							aria-label="Sluiten"
						>
							×
						</button>
						<Image 
							className="lightbox-image" 
							src={lightboxImage.src} 
							alt={lightboxImage.alt}
							width={1200}
							height={900}
						/>
					</div>
				</div>
			)}
		</>
	)
}
