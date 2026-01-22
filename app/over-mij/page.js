'use client'

import Image from 'next/image'

export default function OverMijPage() {
  return (
    <div className="page active over-mij-page" style={{ display: 'block' }}>
      <div className="over-mij-photo">
        <Image
          src="/images/bewerktefoto2.svg"
          alt="Martina Doekharan"
          className="over-mij-photo-img"
          width={500}
          height={600}
        />
      </div>
      <div className="over-mij-content">
        <div className="over-mij-text">
          <h1 className="section-title">Over Mij</h1>
          <Image
            src="/images/lijn.svg"
            alt="Over Mij"
            className="over-mij-title-image"
            width={371}
            height={50}
          />
          <div className="text-content">
            <p>Ik ben Martina Doekharan, derdejaarsstudent Communication and Multimedia Design aan de Hogeschool van Amsterdam. Mijn passie ligt in het ontwerpen van digitale producten die niet alleen mooi zijn, maar vooral waarde toevoegen aan de gebruikerservaring. Ik wil me ontwikkelen tot een UX-designer die websites en apps ontwerpt met oog voor gebruiksvriendelijkheid, esthetiek en impact.</p>
            <p>Ik heb gekozen voor de minor Behaviour Design omdat ik wil leren hoe ontwerp kan bijdragen aan positieve verandering. Tijdens deze minor wil ik ontdekken hoe ik psychologie en design kan combineren om digitale producten te maken die goed aansluiten bij de gebruiker.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

