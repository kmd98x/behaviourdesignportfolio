'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function OntwikkelplanPage() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="page active over-mij-page" style={{ display: 'block' }}>
      <div className="over-mij-content">
        <div className="over-mij-text">
          <h1 className="section-title">Ontwikkelplan</h1>
          <Image 
            src="/images/lijn.svg" 
            alt="Ontwikkelplan" 
            className="over-mij-title-image"
            width={371}
            height={50}
          />
          <div className="text-content" style={{ marginTop: '30px' }}>
            <div className="ontwikkelplan-accordion">
              <div className={`accordion-item ${openAccordion === 0 ? 'active' : ''}`}>
                <div className="accordion-header" onClick={() => toggleAccordion(0)}>
                  <span className="accordion-number">1.</span>
                  <span className="accordion-title">Oriënteren en begrijpen</span>
                  <span className="accordion-arrow">›</span>
                </div>
                <div className="accordion-content">
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Waarom</h3>
                    <p>Ik wil beter leren onderzoeken en echt begrijpen wat het probleem is voordat ik oplossingen ga bedenken. Nu begin ik vaak te snel met ideeën, terwijl ik soms nog te weinig weet over de gebruiker of de context.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Aanpak</h3>
                    <p>Ik ga meer aandacht besteden aan de onderzoeksfase door verschillende methodes te gebruiken, zoals interviews, surveys en deskresearch. Bij elk project wil ik minimaal één gebruiker spreken en minimaal twee bronnen analyseren om mijn inzichten te onderbouwen.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Persoonlijk leerdoel</h3>
                    <p>Ik wil leren om duidelijke, gerichte onderzoeksvragen te formuleren die echt helpen om het probleem te begrijpen.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Succesindicator</h3>
                    <p>Als mijn onderzoeksvragen concreet genoeg zijn om de richting van mijn ontwerpkeuzes te sturen, en ik feedback krijg dat mijn onderzoek goed onderbouwd is.</p>
                  </div>
                </div>
              </div>
              <div className={`accordion-item ${openAccordion === 1 ? 'active' : ''}`}>
                <div className="accordion-header" onClick={() => toggleAccordion(1)}>
                  <span className="accordion-number">2.</span>
                  <span className="accordion-title">Verbeelden en conceptualiseren</span>
                  <span className="accordion-arrow">›</span>
                </div>
                <div className="accordion-content">
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Waarom</h3>
                    <p>Ik wil meer creatieve concepten kunnen bedenken in plaats van maar 1 of 2 ideeën. Ook wil ik mijn ideeën beter kunnen visualiseren zodat anderen ze sneller begrijpen.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Aanpak</h3>
                    <p>Ik ga brainstormtechnieken gebruiken zoals mindmaps en crazy 8's om sneller meerdere concepten te bedenken. Daarnaast maak ik moodboards en schetsen om mijn ideeën visueel te ondersteunen. Ik bespreek mijn concepten regelmatig met teamleden of docenten om feedback te krijgen.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Persoonlijk leerdoel</h3>
                    <p>Ik wil leren om per project minstens 2 verschillende concepten te maken, deze visueel uit te werken (via moodboards of schetsen) en kort te kunnen uitleggen.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Succesindicator</h3>
                    <p>Als ik bij elk project meerdere visuele concepten presenteer en positieve feedback krijg op de duidelijkheid en originaliteit ervan.</p>
                  </div>
                </div>
              </div>
              <div className={`accordion-item ${openAccordion === 2 ? 'active' : ''}`}>
                <div className="accordion-header" onClick={() => toggleAccordion(2)}>
                  <span className="accordion-number">3.</span>
                  <span className="accordion-title">Prototypen en uitwerken</span>
                  <span className="accordion-arrow">›</span>
                </div>
                <div className="accordion-content">
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Waarom</h3>
                    <p>Ik wil mijn prototypes professioneler, realistischer en functioneler maken, zodat ze de uiteindelijke gebruikerservaring beter laten zien.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Aanpak</h3>
                    <p>Ik ga oefenen met zowel lo-fi als hi-fi prototypes in Figma. In de 1e fase gebruik ik simpele wireframes, daarna werk ik ze uit tot een volledig klikbaar prototype met interacties. Ik vraag feedback aan gebruikers of docenten en gebruik hun opmerkingen om verbeteringen door te voeren.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Persoonlijk leerdoel</h3>
                    <p>Ik wil leren om binnen elk project een compleet werkend prototype te maken en deze te verbeteren op basis van feedback.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Succesindicator</h3>
                    <p>Als mijn prototype niet alleen het ontwerp, maar ook de interacties duidelijk laat zien en ik aantoonbaar verbeteringen heb doorgevoerd na testfeedback.</p>
                  </div>
                </div>
              </div>
              <div className={`accordion-item ${openAccordion === 3 ? 'active' : ''}`}>
                <div className="accordion-header" onClick={() => toggleAccordion(3)}>
                  <span className="accordion-number">4.</span>
                  <span className="accordion-title">Evalueren</span>
                  <span className="accordion-arrow">›</span>
                </div>
                <div className="accordion-content">
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Waarom</h3>
                    <p>Ik wil leren om concepten en prototypes objectiever te beoordelen in plaats van alleen af te gaan op mijn eigen mening. Ik wil mijn beslissingen beter kunnen onderbouwen.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Aanpak</h3>
                    <p>Ik ga gebruikmaken van peer reviews, feedbacksessies met docenten en gebruikersfeedback via korte tests of vragenlijsten. Ik documenteer de resultaten en laat zien welke aanpassingen ik op basis daarvan maak.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Persoonlijk leerdoel</h3>
                    <p>Ik wil leren om feedback en testresultaten te gebruiken om mijn ideeën en prototypes steeds beter te maken.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Succesindicator</h3>
                    <p>Als ik kan laten zien welke keuzes ik heb gemaakt op basis van feedback en testresultaten.</p>
                  </div>
                </div>
              </div>
              <div className={`accordion-item ${openAccordion === 4 ? 'active' : ''}`}>
                <div className="accordion-header" onClick={() => toggleAccordion(4)}>
                  <span className="accordion-number">5.</span>
                  <span className="accordion-title">Samen ontwerpen</span>
                  <span className="accordion-arrow">›</span>
                </div>
                <div className="accordion-content">
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Waarom</h3>
                    <p>Ik werk graag samen, maar ik merk dat ik soms te afwachtend ben in groepsgesprekken. Ik wil vaker mijn ideeën inbrengen en beter uitleggen waarom ik iets voorstel.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Aanpak</h3>
                    <p>Ik ga tijdens teamsessies en brainstorms actiever deelnemen door minstens één idee of voorstel per overleg in te brengen. Ik oefen met het toelichten van mijn keuzes en luister tegelijkertijd goed naar anderen om tot gezamenlijke beslissingen te komen.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Persoonlijk leerdoel</h3>
                    <p>Ik wil leren om tijdens elk project actief mee te praten, mijn ideeën te delen en mee te beslissen over het ontwerp.</p>
                  </div>
                  <div className="accordion-section">
                    <h3 className="accordion-subtitle">Succesindicator</h3>
                    <p>Als ik merk dat mijn input zichtbaar wordt meegenomen in het eindontwerp en ik vaker initiatief neem tijdens teamoverleggen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

