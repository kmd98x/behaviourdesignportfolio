'use client'

import { useState } from 'react'
// NOTE: Uncomment these imports after installing swiper: npm install swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import Image from 'next/image'
import BootcampCard from "@/components/ui/BootcampCard"
import Tab from "@/components/ui/Tab"

// Swiper CSS is loaded via CDN in layout.js

export default function BootcampPage() {
	const [activeSection, setActiveSection] = useState('orienteren')
	return (
		<div className="page active over-mij-page" style={{ display: 'block' }}>
			<div className="over-mij-content">
				<div className="over-mij-text">
					<h1 className="section-title">Bootcamp</h1>
					<img src="/images/lijn.svg" alt="Bootcamp" className="over-mij-title-image" />

					<p className="text-lg text-orange-500">Korte beschrijving van de opdracht</p>
					<p className="mt-8!">Tijdens de bootcamp hebben we een groepsopdracht gedaan over consuminderen.Ons team richtte zich op het verminderen van energieverbruik in huis. Onze doelgroep was de partner van een van onze groepsgenoten. Omdat het maar 1 persoon was, konden we een heel persoonlijk en passend concept maken.Ons idee helpt hem makkelijk en op een leuke manier zijn lampen en apparaten uit te zetten, zodat hij bewuster met energie omgaat en tegelijk beloningen kan verdienen.</p>
					<p className="mt-8!">Om het concept te maken hebben we verschillende methoden gebruikt. We begonnen met een gedragsuitdaging recap en interviews, en gebruikten de 4C's om te bedenken hoe we hem kunnen motiveren:</p>
				</div>
			</div>

			<div className="flex items-center gap-10 px-10! mt-8!">
				<BootcampCard title="Catch" content="aandacht trekken" />
				<BootcampCard title="Convert" content="actie laten doen" />
				<BootcampCard title="Confirm" content="succes bevestigen" noBorder={true}>
					<img src="/images/bootcamp/circle.svg" alt="Circle afbeelding" className="absolute size-full scale-130" />
					<img src="/images/bootcamp/right-arrow-curved.svg" className="absolute -bottom-16 -translate-x-[60px]" alt="Gebogen pijl naar rechts beneden" />
				</BootcampCard>
				<BootcampCard title="Continue" content="het gedrag volhouden" />
			</div>

			<div className="relative flex flex-col items-start justify-end ml-auto! mt-28! w-full max-w-[1000px] text-lg">
				<p className="mb-5!">Ik heb ervoor gekozen om deze C uit te werken voor de reflectie</p>

				<p>Dit gaat over het bevestigen van gedrag. Je ziet dit terug in ons design:</p>
				<ul className="list-disc pl-6!">
					<li>Als Jason zijn apparaten en lichten uitzet via de app, krijgt hij een positief bericht.</li>
					<li>Als hij iets uitzet met de toggle button, verandert de knop van licht naar donker, zodat hij ziet dat het uitstaat.</li>
					<li>Als grapje verandert oma in Super Saiyan als iets wordt uitgezet.</li>
				</ul>

				<img src="/images/bootcamp/curly-arrow-down.svg" className="absolute -left-24 top-32" alt="Gekrulde pijl naar beneden" />

				<p className="mt-40! -translate-x-68">Door hieraan te werken heb ik vooral gewerkt aan de competenties:</p>
			</div>

			{/* Navigation */}
			<nav className="flex flex-row gap-[15px] flex-wrap mt-20! px-5!">
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
			</nav>

			{/* Content Wrapper */}
			<div className="mt-8! px-5!">
				<div className={`${activeSection === 'orienteren' ? 'block' : 'hidden'}`}>
					<div className='text-lg'>
						<p className='mb-8!'>Onderzoek doen naar de gebruiker en zijn situatie, informatie verzamelen en gebruiken voor het ontwerp d.m.v interviews.</p>

						<p>Daarnaast hebben we SUE-if gebruikt om scenario's te maken van hoe hij op het concept reageert, en SWAC om het gedrag goed te begrijpen:</p>
						<ul className='list-disc pl-8!'>
							<li>MTM: wanneer moet hij iets doen, bijvoorbeeld tijdens een pauze of als hij een kamer verlaat.</li>
							<li>WANT: hij wil dat zijn apparaten lang goed blijven werken, met hulp van geluid en lampjes.</li>
							<li>CAN: hij kan apparaten makkelijk uitzetten vanuit bed of via de app, zonder zijn routine te veranderen.</li>
							<li>SPARK: signalen laten zien wanneer hij iets moet doen, zodat problemen zoals doorbranden of commentaar van oma voorkomen worden.</li>
							<li>AGAIN: door herhaling en streaks leert hij een routine, waardoor hij het gedrag volhoudt.</li>
						</ul>
						<p>Door al deze stappen konden we een persoonlijk, makkelijk en motiverend concept maken dat goed past bij onze gebruiker.</p>
					</div>

					{/* Swiper Slideshow */}

					<Swiper
						effect="coverflow"
						grabCursor={true}
						centeredSlides={true}
						slidesPerView="auto"
						loop={true}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						navigation={true}
						pagination={{
							clickable: true,
						}}
						modules={[EffectCoverflow, Navigation, Pagination]}
						className="example-swiper mt-8!"
					>
						<SwiperSlide>
							<Image
								src="/images/bootcamp/interview-1.png"
								alt="Interview 1"
								width={1600}
								height={1200}
								className="w-full h-[1200px] object-contain rounded-lg block"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src="/images/bootcamp/interview-2.png"
								alt="Interview 2"
								width={1600}
								height={1200}
								className="w-full h-[1200px] object-contain rounded-lg block"
							/>
						</SwiperSlide>
					</Swiper>

					<div className='text-lg px-10! mt-20!'>
						<p className='text-2xl font-bold text-orange-500 mb-4!'>Reflectie</p>
						<p className='mb-4!'>Tijdens dit project merkte ik dat het soms lastig was om mijn ideeën echt goed over te brengen. Vaak had ik het gevoel dat mijn ideeën niet helemaal werden meegenomen in het eindresultaat. Daardoor twijfelde ik soms aan mezelf en nam ik een stapje terug in plaats van door te zetten.</p>
						<p>Ook had ik moeite met de stijl van de app. Het was niet echt mijn smaak, en daardoor vond ik het lastig om enthousiast te blijven. Toch heb ik uiteindelijk wel geprobeerd me aan te passen en binnen die stijl iets toe te voegen dat bij mij paste. Dat was een goede les in samenwerken en omgaan met verschillende meningen.
							Wat ik hiervan geleerd heb, is dat ik meer vertrouwen mag hebben in mijn eigen ideeën, ook als ze anders zijn. En dat samenwerken soms betekent dat je een middenweg moet vinden, zonder jezelf helemaal kwijt te raken.</p>
					</div>
				</div>

				<div className={`${activeSection === 'verbeelden' ? 'block' : 'hidden'}`}>
					<p>Ideeën bedenken en visueel uitwerken met schetsen en moodboards</p>

					<Swiper
						effect="coverflow"
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={2}
						spaceBetween={30}
						loop={false}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						navigation={true}
						pagination={{
							clickable: true,
						}}
						modules={[EffectCoverflow, Navigation, Pagination]}
						className="example-swiper mt-8!"
					>
						<SwiperSlide>
							<Image
								src="/images/bootcamp/dragon-ball-moodboard.png"
								alt="Dragon Ball moodboard"
								width={800}
								height={600}
								className="w-full h-[600px] object-contain rounded-lg block"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src="/images/bootcamp/dragon-ball-interface.png"
								alt="Dragon Ball interface"
								width={800}
								height={600}
								className="w-full h-[600px] object-contain rounded-lg block"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src="/images/bootcamp/schetsen.png"
								alt="Schetsen"
								width={800}
								height={600}
								className="w-full h-[600px] object-contain rounded-lg block"
							/>
						</SwiperSlide>
					</Swiper>
					<div className='text-lg px-10! mt-20!'>
						<p className='text-2xl font-bold text-orange-500 mb-4!'>Reflectie</p>
						<p className='mb-4!'>Tijdens dit project merkte ik dat het soms lastig was om mijn ideeën echt goed over te brengen. Vaak had ik het gevoel dat mijn ideeën niet helemaal werden meegenomen in het eindresultaat. Daardoor twijfelde ik soms aan mezelf en nam ik een stapje terug in plaats van door te zetten.</p>
						<p>Ook had ik moeite met de stijl van de app. Het was niet echt mijn smaak, en daardoor vond ik het lastig om enthousiast te blijven. Toch heb ik uiteindelijk wel geprobeerd me aan te passen en binnen die stijl iets toe te voegen dat bij mij paste. Dat was een goede les in samenwerken en omgaan met verschillende meningen.
							Wat ik hiervan geleerd heb, is dat ik meer vertrouwen mag hebben in mijn eigen ideeën, ook als ze anders zijn. En dat samenwerken soms betekent dat je een middenweg moet vinden, zonder jezelf helemaal kwijt te raken.</p>
					</div>
				</div>

				<div className={`${activeSection === 'prototypen' ? 'block' : 'hidden'}`}>
					<p>Een prototype maken in Figma en testen bij de gebruiker. En op basis van feedback steeds het prototypen verbeteren. (<a href="https://www.figma.com/design/6rn7moXTtqbs0Ek1ShkjzT/Energize?t=Z5DEynwHkgxc5usD-0">Bekijk prototype</a>)</p>

					<div className="w-full flex justify-center my-8">
						<video
							src="/videos/bootcamp-film.mp4"
							autoPlay muted
							className="h-[900px] max-w-full rounded-[40px] bg-black mt-20!"
						>
							Your browser does not support the video tag.
						</video>
					</div>

					<div className='text-lg px-10! mt-20!'>
						<p className='text-2xl font-bold text-orange-500 mb-4!'>Reflectie</p>
						<p className='mb-4!'>Tijdens dit project merkte ik dat het soms lastig was om mijn ideeën echt goed over te brengen. Vaak had ik het gevoel dat mijn ideeën niet helemaal werden meegenomen in het eindresultaat. Daardoor twijfelde ik soms aan mezelf en nam ik een stapje terug in plaats van door te zetten.</p>

						<p>Ook had ik moeite met de stijl van de app. Het was niet echt mijn smaak, en daardoor vond ik het lastig om enthousiast te blijven. Toch heb ik uiteindelijk wel geprobeerd me aan te passen en binnen die stijl iets toe te voegen dat bij mij paste. Dat was een goede les in samenwerken en omgaan met verschillende meningen.
							Wat ik hiervan geleerd heb, is dat ik meer vertrouwen mag hebben in mijn eigen ideeën, ook als ze anders zijn. En dat samenwerken soms betekent dat je een middenweg moet vinden, zonder jezelf helemaal kwijt te raken.</p>
					</div>
				</div>

				<div className={`${activeSection === 'evalueren' ? 'block' : 'hidden'}`}>
					<p>Kijken hoe de gebruiker reageert op knoppen en verbeteringen maken als dat nodig is</p>

					<div className="w-full flex justify-center mt-20!">
						<div className="max-w-[1150px] w-full">
							<Swiper
								spaceBetween={35}
								slidesPerView={1}
								navigation={{
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev',
								}}
								pagination={{
									clickable: true,
									bulletClass: 'swiper-pagination-bullet !bg-orange-500',
									bulletActiveClass: 'swiper-pagination-bullet-active !bg-orange-500',
								}}
								effect="coverflow"
								modules={[Navigation, Pagination, EffectCoverflow]}
								className="rounded-[30px] overflow-hidden"
							>
								<SwiperSlide>
									<Image
										src="/images/bootcamp/feedback-afbeelding-1.png"
										alt="Feedback afbeelding 1"
										width={1100}
										height={800}
										className="w-full h-[700px] object-contain rounded-lg block"
									/>
								</SwiperSlide>
								<SwiperSlide>
									<Image
										src="/images/bootcamp/feeback-afbeelding-2.png"
										alt="Feedback afbeelding 2"
										width={1100}
										height={800}
										className="w-full h-[700px] object-contain rounded-lg block"
									/>
								</SwiperSlide>
								<div className="swiper-button-prev !text-orange-500 !fill-orange-500 !stroke-orange-500" />
								<div className="swiper-button-next !text-orange-500 !fill-orange-500 !stroke-orange-500" />
							</Swiper>
						</div>
					</div>

					<div className='text-lg px-10! mt-20!'>
						<p className='text-2xl font-bold text-orange-500 mb-4!'>Reflectie</p>
						<p className='mb-4!'>Tijdens dit project merkte ik dat het soms lastig was om mijn ideeën echt goed over te brengen. Vaak had ik het gevoel dat mijn ideeën niet helemaal werden meegenomen in het eindresultaat. Daardoor twijfelde ik soms aan mezelf en nam ik een stapje terug in plaats van door te zetten.</p>
						<p>Ook had ik moeite met de stijl van de app. Het was niet echt mijn smaak, en daardoor vond ik het lastig om enthousiast te blijven. Toch heb ik uiteindelijk wel geprobeerd me aan te passen en binnen die stijl iets toe te voegen dat bij mij paste. Dat was een goede les in samenwerken en omgaan met verschillende meningen.
							Wat ik hiervan geleerd heb, is dat ik meer vertrouwen mag hebben in mijn eigen ideeën, ook als ze anders zijn. En dat samenwerken soms betekent dat je een middenweg moet vinden, zonder jezelf helemaal kwijt te raken.</p>
					</div>
				</div>

				<div className={`${activeSection === 'samen' ? 'block' : 'hidden'}`}>
					<p>Naast de genoemde competenties is er heel veel samengewerkt om dit tot stand te brengen, en daarmee is ook de competentie 'Samen ontwerpen' tot stand gekomen. De stijl van de app was in het begin niet echt mijn ding, maar ik heb toch deze stijl gebruikt en zo actief bijgedragen aan het ontwerp.</p>

					<p>Door te focussen op Confirm heb ik geleerd hoe belangrijk het is om gedrag positief te bevestigen, zodat de gebruiker gemotiveerd blijft en een routine ontwikkelt.</p>

					<div className='text-lg mt-20!'>
						<p className='text-2xl font-bold text-orange-500 mb-4!'>Reflectie</p>
						<p className='mb-4!'>Tijdens dit project merkte ik dat het soms lastig was om mijn ideeën echt goed over te brengen. Vaak had ik het gevoel dat mijn ideeën niet helemaal werden meegenomen in het eindresultaat. Daardoor twijfelde ik soms aan mezelf en nam ik een stapje terug in plaats van door te zetten.</p>
						
						<p>Ook had ik moeite met de stijl van de app. Het was niet echt mijn smaak, en daardoor vond ik het lastig om enthousiast te blijven. Toch heb ik uiteindelijk wel geprobeerd me aan te passen en binnen die stijl iets toe te voegen dat bij mij paste. Dat was een goede les in samenwerken en omgaan met verschillende meningen. Wat ik hiervan geleerd heb, is dat ik meer vertrouwen mag hebben in mijn eigen ideeën, ook als ze anders zijn. En dat samenwerken soms betekent dat je een middenweg moet vinden, zonder jezelf helemaal kwijt te raken.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

