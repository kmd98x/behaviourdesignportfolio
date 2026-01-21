'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'

export default function ZeroMetingOrienterenPage() {
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
          <h1 className="section-title">0- Meting</h1>
          <Image 
            src="/images/lijn.svg" 
            alt="0- Meting" 
            className="over-mij-title-image"
            width={371}
            height={50}
          />
          <div className="text-content" style={{ marginTop: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <Link href="/0-meting" className="back-arrow">←</Link>
              <h2 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '28px', color: 'var(--orange)', margin: 0 }}>1. Oriënteren en begrijpen</h2>
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
                <p>Ik heb basiservaring met verschillende vormen van onderzoek, zoals literatuuronderzoek, deskresearch en het afnemen van interviews. In eerdere projecten heb ik vaak de eerste stappen gezet om de gebruiker, de context en het probleem beter te begrijpen. Ik vind het interessant om informatie te verzamelen en verbanden te zoeken tussen wat mensen zeggen en wat ze doen. Toch merk ik dat mijn onderzoek soms nog te oppervlakkig blijft. Ik stel vaak wel vragen, maar niet altijd de juiste of diepgaande vragen die echt nieuwe inzichten opleveren. Ook vind ik het soms lastig om van een breed onderwerp naar een duidelijke en afgebakende onderzoeksvraag te komen. Daardoor kan het gebeuren dat mijn onderzoek niet altijd helemaal gericht of relevant genoeg is.</p>
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
              <p>In de afgelopen semesters heb ik verschillende onderzoeksmethodes geleerd en gebruikt, zoals het maken van persona's, het in kaart brengen van de gebruikerscontext en het observeren van gedrag. Daardoor heb ik beter geleerd om vanuit de gebruiker te denken in plaats van alleen vanuit mijn eigen ideeën. Mijn sterke punt is het verzamelen van informatie. Ik ben nieuwsgierig, kan goed luisteren en vind het interessant om verbanden te zien in wat mensen zeggen of doen. Wat ik nog wil verbeteren, is het analyseren van die informatie en het samenvatten tot duidelijke conclusies. Ik wil leren hoe ik data beter kan ordenen, vergelijken en vertalen naar inzichten die helpen bij het ontwerpen.</p>
            </div>
            <div className={`competentie-content ${activeSection === 'goed-minder-goed' ? 'active' : ''}`} id="goed-minder-goed">
              <h3 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '22px', color: 'var(--orange)', marginTop: '20px', marginBottom: '15px' }}>Wat goed gaat</h3>
              <ul style={{ marginBottom: '25px', paddingLeft: '20px' }}>
                <li>Ik kan zelfstandig informatie vinden en verwerken</li>
                <li>Ik heb geleerd om basisinterviews te plannen, af te nemen en daarna uit te werken</li>
                <li>Ik durf vragen te stellen aan gebruikers</li>
                <li>Ik gebruik verschillende bronnen om een goed beeld te krijgen van de context</li>
              </ul>
              <h3 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '22px', color: 'var(--orange)', marginTop: '20px', marginBottom: '15px' }}>Wat minder goed gaat</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Ik heb nog moeite met het formuleren van scherpe, specifieke onderzoeksvragen die goed aansluiten op het doel van het project</li>
                <li>Soms verzamel ik te veel informatie en weet ik niet goed wat echt belangrijk is voor mijn onderzoek</li>
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
                  slideShadows: true,
                }}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectCoverflow, Navigation, Pagination]}
                className="example-swiper"
              >
                <SwiperSlide>
                  <Image 
                    src="/images/0-meting/orienteren-en-begrijpen/oeb-test-plan.png" 
                    alt="OEB Test Plan" 
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image 
                    src="/images/0-meting/orienteren-en-begrijpen/intro-over-mezelf.png" 
                    alt="Intro over mezelf" 
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image 
                    src="/images/0-meting/orienteren-en-begrijpen/formulier-per-tester.png" 
                    alt="Formulier per tester" 
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
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
