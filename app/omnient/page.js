'use client'

import { useState } from 'react'
import Image from 'next/image'
import Tab from '@/components/ui/Tab'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function OmnientPage() {
	const [activeSection, setActiveSection] = useState('orienteren')

	const gedragspatronen = [
		'Be strong',
		'Pleaser',
		'Try hard',
		'Hurry up',
		'Be perfect',
	]

	return (
		<div className="block min-h-screen py-[100px]! relative overflow-hidden">
			<div className="over-mij-content">
				<div className="over-mij-text">
					<h1 className="section-title">Omnient</h1>

					<div className="text-lg leading-[1.8] w-full mt-8!">
						<h2>Korte beschrijving van de opdracht</h2>

						<p className="mb-4! mt-4!">
							Voor dit project werkten we in een team van 3 studenten aan een opdracht van RockportInk. Het doel was om een tool te ontwikkelen voor
							startende managers en trainees (0-2 jaar ervaring) die hen helpt om meer zelfinzicht te krijgen in hun leiderschapsstijl.
						</p>
						<p>
							Het probleem: jonge leiders passen zich vaak te veel aan aan de bestaande leiderschapscultuur in organisaties. Hierdoor verliezen ze hun
							authenticiteit en durven ze hun mening minder te geven uit angst voor conflicten of afwijzing. Dit komt vaak voort uit onbewuste
							gedragspatronen zoals:
						</p>
					</div>

					<div className="flex justify-between items-center">
						<ul className="list-none list-inside flex flex-col gap-7 pl-12! mt-8! text-2xl font-jacques">
							{gedragspatronen.map((patroon, index) => (
								<li key={index} className="flex items-center gap-2">
									<span className="bg-orange-500 pt-2! pb-3.5! px-4! flex items-center justify-center rounded-full text-center leading-6">
										{index + 1}
									</span>{' '}
									{patroon}
								</li>
							))}
						</ul>

						<div className="relative">
							<p className="leading-[1.8] max-w-[60ch] text-lg text-center">
								Hoe kunnen we startende managers kennis laten maken met de eerste drie stappen uit het Omnient-model, zodat zij hun zelfinzicht
								vergroten en krachtige keuzes kunnen maken in gedrag, communicatie en leiderschap?
							</p>

							<Image
								src="/images/carddeck/big-circle.svg"
								alt="Big circle"
								width={500}
								height={500}
								className="w-full max-w-[500px] -rotate-13 scale-125 h-auto block mt-8! absolute top-1/2 -translate-y-1/2 right-10"
							/>
						</div>
					</div>

					{/* Tabs */}
					<div className="flex gap-4 mt-12! mb-8! flex-wrap">
						<Tab
							label="Oriënteren en begrijpen"
							sectionId="orienteren"
							activeSection={activeSection}
							onClick={() => setActiveSection('orienteren')}
						/>
						<Tab
							label="Verbeelden en conceptualiseren"
							sectionId="verbeelden"
							activeSection={activeSection}
							onClick={() => setActiveSection('verbeelden')}
						/>
						<Tab
							label="Prototypen en uitwerken"
							sectionId="prototypen"
							activeSection={activeSection}
							onClick={() => setActiveSection('prototypen')}
						/>
						<Tab
							label="Evalueren"
							sectionId="evalueren"
							activeSection={activeSection}
							onClick={() => setActiveSection('evalueren')}
						/>
						<Tab
							label="Samen ontwerpen"
							sectionId="samen"
							activeSection={activeSection}
							onClick={() => setActiveSection('samen')}
						/>
					</div>

					{/* Content Sections */}
					<div className="mt-8! text-lg leading-[1.8]">
						<div className={activeSection === 'orienteren' ? 'block' : 'hidden'}>
							<p>We startten met uitgebreid onderzoek om de doelgroep, het probleem en de context goed te begrijpen. We voerden interviews met startende managers, een leiderschapstrainer (Quinten), een HR-professional (Lonneke) en iemand met ervaring in leiderschapstrainingen. Door deze interviews kregen we inzicht in hoe jonge leiders hun rol ervaren en welke spanningen zij voelen binnen bestaande leiderschapsculturen.
								We analyseerden de stakeholders (wie speelt een rol in het leven van een startende manager?) en maakte een stakeholder map. Ook deden we deskresearch naar concurrerende programma's zoals het Cambiana Young Leaders Program en het yuii Business Trainings programma uit Duitsland.
								Daarnaast gebruikten we het SUE Behavioral Influence framework om te begrijpen welke gedragsprincipes een rol spelen bij jonge leiders. We onderzochten de vijf gedragspatronen (drivers): Be Strong, Pleaser, Try Hard, Hurry Up en Be Perfect. Door dit onderzoek begrepen we beter waarom startende managers zich vaak aanpassen uit onzekerheid in plaats van authentiek te blijven.</p>

							<Swiper
								effect="coverflow"
								grabCursor={true}
								centeredSlides={true}
								slidesPerView="auto"
								loop={false}
								coverflowEffect={{
									rotate: 30,
									stretch: 0,
									depth: 100,
									modifier: 1,
									slideShadows: true,
								}}
								navigation={true}
								pagination={{ clickable: true }}
								modules={[EffectCoverflow, Navigation, Pagination]}
								className="example-swiper mt-12!"
							>
								<SwiperSlide>
									<Image
										src="/images/omnient/interview-resultaten-1.png"
										alt="Interview resultaten 1"
										width={900}
										height={600}
										className="w-full h-auto rounded-lg shadow-lg"
									/>
								</SwiperSlide>

								<SwiperSlide>
									<Image
										src="/images/omnient/interview-resultaten-2.png"
										alt="Interview resultaten 2"
										width={900}
										height={600}
										className="w-full h-auto rounded-lg shadow-lg"
									/>
								</SwiperSlide>

								<SwiperSlide>
									<Image
										src="/images/omnient/sue-if.png"
										alt="SUE Influence Framework"
										width={900}
										height={600}
										className="w-full h-auto rounded-lg shadow-lg"
									/>
								</SwiperSlide>
							</Swiper>
						</div>

						<div className={activeSection === 'verbeelden' ? 'block' : 'hidden'}>
							<p>Met de inzichten uit ons onderzoek gingen we concepten bedenken. We ontwikkelden twee hoofdconcepten: een fysiek bordspel en een digitale app. Beide concepten moesten jonge leiders helpen om hun gedragspatronen te herkennen en te reflecteren. Voor Concept 1 gebruikten we het Predraft Change Tactics framework om na te denken over hoe we gedragsverandering konden stimuleren. Voor Concept 2 kozen we het Duwtje (Nudge) framework om subtiele sturen in te bouwen. We visualiseerden beide concepten en bedachten hoe de gebruikerservaring eruit zou zien. Ook maakten we een ethische stakeholderanalyse om na te denken over de impact van onze tool: wie heeft er baat bij? Welke risico's zijn er? Hoe beschermen we privacy? Om onze concepten te testen, ontwikkelden we een testplan met duidelijke vragen en succesindicatoren. We bedachten spelregels voor het OMNI-bordspel en maakten een eerste versie van de app-interface.</p>

							<ul className="mt-8! font-jacques!">
								<li>Live app concept 1:</li>
								<li>Live app concept 2: <a href="https://testminorkmd.vercel.app/" className="font-jacques!" target="_blank" rel="noopener noreferrer">https://testminorkmd.vercel.app/</a></li>
							</ul>

							<Swiper
								effect="coverflow"
								grabCursor={true}
								centeredSlides={true}
								slidesPerView="auto"
								loop={false}
								coverflowEffect={{
									rotate: 30,
									stretch: 0,
									depth: 100,
									modifier: 1,
									slideShadows: true,
								}}
								navigation={true}
								pagination={{ clickable: true }}
								modules={[EffectCoverflow, Navigation, Pagination]}
								className="example-swiper mt-12!"
							>
								<SwiperSlide>
									<Image
										src="/images/omnient/omnient-orienteren-afbeelding-1.png"
										alt="Omnient orienteren afbeelding 1"
										width={900}
										height={600}
										className="w-full h-auto rounded-lg shadow-lg"
									/>
								</SwiperSlide>

								<SwiperSlide>
									<Image
										src="/images/omnient/omnient-orienteren-afbeelding-2.png"
										alt="Omnient orienteren afbeelding 2"
										width={900}
										height={600}
										className="w-full h-auto rounded-lg shadow-lg"
									/>
								</SwiperSlide>

								<SwiperSlide>
									<div className="w-full max-w-[900px] h-[420px] mx-auto flex items-center justify-center bg-black/40 rounded-lg shadow-lg overflow-hidden">
										<video
											src="/videos/omnienttest.mp4"
											autoPlay
											muted
											loop
											playsInline
											className="w-full h-full object-contain"
										/>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="w-full max-w-[900px] h-[420px] mx-auto flex items-center justify-center bg-black/40 rounded-lg shadow-lg overflow-hidden">
										<video
											src="/videos/concept-1.mp4"
											autoPlay
											muted
											loop
											playsInline
											className="w-full h-full object-contain"
										/>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>

						<div className={activeSection === 'prototypen' ? 'block' : 'hidden'}>
							<div>
								<p>We bouwden zowel een mefi  prototype als uiteindelijk een hifi prototype. Voor het bordspel ontwierpen we kaarten met reflectievragen, maakten we een spelbord en werkten we de Tarot cards uit om ethische overwegingen visueel te maken. We testten verschillende tone of voice opties voor de reflectiekaarten: moesten ze serieus en professioneel zijn, of juist toegankelijk en persoonlijk? Door te testen ontdekten we wat het beste werkte voor onze doelgroep. Voor de digitale variant bouwden we een interactieve app waarin gebruikers hun gedragspatronen konden herkennen en reflecteren. We ontwikkelden verschillende speelmodi: samen spelen (in groepsverband) en alleen spelen (individueel), zodat de tool flexibel inzetbaar was. Het eindproduct werd een combinatie van fysiek en digitaal: een bordspel dat zowel in trainingen als zelfstandig gebruikt kan worden, met een digitale component voor tracking en extra reflectie.</p>

								<p className="mt-8!">Link live app: <a href="https://minorbd-omnient-bordspel.vercel.app" className="font-jacques!" target="_blank" rel="noopener noreferrer">https://minorbd-omnient-bordspel.vercel.app</a></p>
							</div>

							<Swiper
								effect="coverflow"
								grabCursor={true}
								centeredSlides={true}
								slidesPerView="auto"
								loop={false}
								coverflowEffect={{
									rotate: 30,
									stretch: 0,
									depth: 100,
									modifier: 1,
									slideShadows: true,
								}}
								navigation={true}
								pagination={{ clickable: true }}
								modules={[EffectCoverflow, Navigation, Pagination]}
								className="example-swiper mt-12!"
							>
								<SwiperSlide>
									<Image
										src="/images/omnient/omnient-kaarten-1.png"
										alt="Omnient kaarten 1"
										width={900}
										height={600}
										className="w-full h-auto rounded-lg shadow-lg"
									/>
								</SwiperSlide>

								<SwiperSlide>
									<Image
										src="/images/omnient/omnient-kaarten-2.png"
										alt="Omnient kaarten 2"
										width={900}
										height={600}
										className="w-full h-auto rounded-lg shadow-lg"
									/>
								</SwiperSlide>
							</Swiper>
						</div>

						<div className={activeSection === 'evalueren' ? 'block' : 'hidden'}>
							<p>
								Na het uitproberen wordt gereflecteerd: wat werkte wel, wat niet, en wat zegt dat over hun onderliggende patronen? Op basis hiervan scherpen ze
								hun volgende stappen aan.
							</p>
						</div>

						<div className={activeSection === 'samen' ? 'block' : 'hidden'}>
							<p>Dit was een groepsproject met Amber (HRM) en Caia (CMD). We werkten samen aan elk onderdeel: van onderzoek tot eindproduct.</p>

							<p className="mt-8!">Ook werkten we samen met externe stakeholders:</p>

							<ul className="font-jacques! list-disc list-inside">
								<li>Jacqueline (RockportInk): opdrachtgever, meerdere feedbackmomenten</li>
								<li>Interview respondenten: Quinten, Lonneke, ervaringsdeskundige</li>
								<li>Coaches: begeleiding tijdens het project</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
