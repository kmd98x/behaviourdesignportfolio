'use client'

import { useState } from 'react'
import Image from 'next/image'
import Tab from '@/components/ui/Tab'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import PageHeading from '@/components/ui/PageHeading'

export default function WorkshopPage() {
	const [activeSection, setActiveSection] = useState('orienteren')

	return (
		<div className="block min-h-screen py-[100px]! relative overflow-hidden">
			<div className="w-full mx-auto flex gap-[60px] items-start">
				<div className="flex-1 w-full relative z-2 px-10!">
					<PageHeading title="Workshop" />
					<div className="text-lg leading-[1.8] text-white w-full mt-8! flex gap-[250px]">
						<div>
							<h2 className="mb-10 font-montez text-3xl text-orange-500">Korte beschrijving van de opdracht</h2>
							<p className='mt-8!'>Voor dit project moest ik iets leren en vervolgens een workshop geven. Ik koos ervoor om de Netflix-serie The Mind Explained te kijken en maakte sketchnotes per aflevering om de informatie te verwerken. Ik verdiepte me in de aflevering over Dreams: hoe werkt dromen precies en welke delen van de hersenen zijn actief tijdens verschillende droomfasen? Om deze kennis te delen, ontwierp ik een informatieve workshop. De workshop begon met algemene informatie over dromen, gevolgd door een interactieve quiz, en daarna verdiepende uitleg. Daarnaast maakte ik een chunk - een tastbaar object waar de informatie visueel uit te halen is. Zo kon ik complexe informatie over hersenen en dromen begrijpelijk maken voor anderen.</p>
						</div>

						<video
							src="/videos/workshop-dreams.mp4"
							autoPlay
							loop
							muted
							playsInline
							className="w-full max-w-[200px] h-auto block mt-8! "
							style={{ transform: 'scaleX(-1)' }}
						/>
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
					</div>

					{/* Content Sections */}
					<div className="mt-8!">
						<div className={activeSection === 'orienteren' ? 'block' : 'hidden'}>
							<p>Ik keek The Mind Explained op Netflix en verdiepte me in de aflevering over dromen. Door sketchnotes te maken kon ik de complexe informatie over hersenen en droomfasen beter begrijpen en verwerken. Ook heb ik verder research gedaan, omdat ik meer informatie nodig had voor mijn workshop.</p>

							<div className='mt-20! flex flex-col items-center justify-center'>
								<video
									src="/videos/tablet-sketchnotes.mp4"
									autoPlay
									loop
									muted
									playsInline
									className="w-full max-w-[700px] h-auto block rounded-xl"
								/>
							</div>
						</div>
						<div className={activeSection === 'verbeelden' ? 'block' : 'hidden'}>
							<p>Na het verzamelen van kennis moest ik bedenken hoe ik deze informatie op een begrijpelijke manier kon overbrengen. Ik koos voor een informatieve workshop met een duidelijke structuur: eerst algemene informatie, dan een interactieve quiz, en daarna verdiepende uitleg. Om het abstracte concept van dromen en hersenen tastbaar te maken, ontwierp ik een chunk - een fysiek object waar de informatie visueel uit te halen is. Door de quiz toe te voegen maakte ik de workshop interactief, zodat deelnemers actief betrokken bleven. Zo vertaalde ik complexe wetenschappelijke informatie naar een toegankelijke en begrijpelijke vorm.</p>

							<div className='mt-8! flex flex-col items-center justify-center relative'>
								<Image
									src="/images/workshop/workshop-canvas-1.png"
									alt="Workshop canvas 1"
									className="w-full max-w-[900px] h-auto block mt-8! "
									width={900}
									height={900}
								/>

								<Image
									src="/images/bootcamp/curly-arrow-down.svg"
									alt="Curly arrow down"
									className="w-full max-w-[50px] h-auto block mt-8! absolute bottom-32 left-1/2 z-10"
									width={50}
									height={186}
								/>

								<div className='relative mt-32!'>
									<Image
										src="/images/workshop/squared-bracket-open.svg"
										alt="Squared bracket open"
										className="w-full max-w-[50px] h-auto block mt-8! absolute -top-20 -left-8"
										width={50}
										height={186}
									/>

									<p className='max-w-[120ch] text-center'>Ik gebruikte een workshop canvas om de structuur van mijn workshop te bepalen. De canvas hielp me om het doel, de doelgroep, het programma en de gewenste resultaten duidelijk te krijgen. Ook plande ik interactieve elementen zoals een quiz en visualisaties, en dacht ik na over benodigde materialen en mogelijke problemen. Zo had ik een goede voorbereiding.</p>

									<Image
										src="/images/workshop/squared-bracket-close.svg"
										alt="Squared bracket close"
										className="w-full max-w-[50px] h-auto block mt-8! absolute -top-20 -right-8"
										width={50}
										height={186}
									/>
								</div>
							</div>
						</div>
						<div className={activeSection === 'prototypen' ? 'block' : 'hidden'}>
							<p>Ik maakte alles wat ik had bedacht: een quiz over dromen, visueel materiaal zoals sketchnotes en een presentatie, en een chunk - een tastbaar object over hersenen en dromen. Vervolgens voerde ik de workshop uit met deelnemers volgens de structuur.</p>

							<div className='mt-8! flex flex-col items-center justify-center gap-2'>
								<video
									src="/videos/dreamsfilm.mp4"
									autoPlay
									loop
									muted
									playsInline
									className="w-full max-w-[900px] h-auto block mt-8! aspect-video"
								/>

								<div className='relative'>
									<Image
										src="/images/carddeck/arrow-jump-right.svg"
										alt="Arrow jumping right"
										className="w-full max-w-[130px] h-auto block mt-8! absolute top-2/3 -translate-y-[120px] -right-20"
										width={130}
										height={130}
									/>

									<p className='text-lg absolute top-2/3 -right-32'>Chunk</p>

									<Image
										src="/images/workshop/chunk.png"
										alt="Chunk"
										className="w-full max-w-[700px] h-auto block mt-8! "
										width={600}
										height={600}
									/>
								</div>
							</div>
						</div>
						<div className={activeSection === 'evalueren' ? 'block' : 'hidden'}>
							<p>Om te testen of mijn workshop goed werkte, gaf ik eerst een test-workshop aan twee vrienden via Google Meet. Hierdoor kon ik zien wat wel en niet duidelijk was en waar verbeteringen nodig waren. De feedback die ik van hen kreeg, heb ik verwerkt voordat ik de echte workshop gaf. Ook ontving ik feedback van mijn docent, die ik heb uitgewerkt. In de foto's hieronder zie je hoe ik deze feedback heb toegepast om mijn workshop te verbeteren.</p>

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
									slideShadows: true,
								}}
								navigation={true}
								pagination={{ clickable: true }}
								modules={[EffectCoverflow, Navigation, Pagination]}
								className="example-swiper"
							>
								<SwiperSlide>
									<Image
										src="/images/workshop/workshop-evalueren-1.png"
										alt="Workshop evaluatie afbeelding 1"
										width={700}
										height={500}
										className="w-full h-auto rounded-lg shadow-lg"
									/>
								</SwiperSlide>
								<SwiperSlide>
									<Image
										src="/images/workshop/workshop-evalueren-2.png"
										alt="Workshop evaluatie afbeelding 2"
										width={700}
										height={500}
										className="w-full h-auto rounded-lg shadow-lg"
									/>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

