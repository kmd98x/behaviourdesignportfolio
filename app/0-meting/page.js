'use client'

// Dependencies
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// Components
import PageHeading from '@/components/ui/PageHeading'
import Link from 'next/link'

export default function ZeroMetingPage() {
	const textContentRef = useRef(null)
	const competentiesContainerRef = useRef(null);
	
	useGSAP(() => {
		gsap.to(textContentRef.current, {
			opacity: 1,
			duration: 0.5,
			ease: 'power2.out',
		})
	})

	useGSAP(() => {
		gsap.to('.competentie-item', {
			y: 0,
			opacity: 1,
			duration: 0.5,
			stagger: 0.1,
		})
	}, {scope: competentiesContainerRef})

	return (
		<div className="page active over-mij-page" style={{ display: 'block' }}>
			<div className="over-mij-content">
				<div className="over-mij-text">
					<PageHeading title="0- Meting" />

					<div className="text-content" ref={textContentRef}>
						<p>De 0-meting geeft een duidelijk beeld van mijn huidige niveau per gekozen competentie voordat ik start met de minor. Het doel is om te reflecteren op mijn ontwikkeling tot nu toe en inzicht te krijgen in waar ik nog kan groeien. Voor iedere competentie beschrijf ik mijn huidige vaardigheden, onderbouw ik dit met voorbeelden uit eerdere projecten of studiewerk, en geef ik aan wat al goed gaat en waar verbeterpunten liggen. Door dit helder in kaart te brengen, kan ik gerichter werken aan mijn leerdoelen en ontwikkeling gedurende de minor. Hieronder ziet u de 5 competenties die ik heb gekozen. U kunt op elke competentie klikken om meer informatie per onderdeel te bekijken.</p>
					</div>
					
					<div className="competenties-container" ref={competentiesContainerRef}>
						<Link href="/0-meting-orienteren" className="competentie-item" data-competentie="1">
							<div className="competentie-number">1</div>
							<div className="competentie-name">Oriënteren en begrijpen</div>
							<div className="competentie-arrow">›</div>
						</Link>
						<Link href="/0-meting-verbeelden" className="competentie-item" data-competentie="2">
							<div className="competentie-number">2</div>
							<div className="competentie-name">Verbeelden en conceptualiseren</div>
							<div className="competentie-arrow">›</div>
						</Link>
						<Link href="/0-meting-prototypen" className="competentie-item" data-competentie="3">
							<div className="competentie-number">3</div>
							<div className="competentie-name">Prototypen en uitwerken</div>
							<div className="competentie-arrow">›</div>
						</Link>
						<Link href="/0-meting-evalueren" className="competentie-item" data-competentie="4">
							<div className="competentie-number">4</div>
							<div className="competentie-name">Evalueren</div>
							<div className="competentie-arrow">›</div>
						</Link>
						<Link href="/0-meting-samen" className="competentie-item" data-competentie="5">
							<div className="competentie-number">5</div>
							<div className="competentie-name">Samen ontwerpen</div>
							<div className="competentie-arrow">›</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

