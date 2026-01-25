'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import PageHeading from '@/components/ui/PageHeading'

export default function ZeroMetingEvaluerenPage() {
  const [activeSection, setActiveSection] = useState('waar-ik-nu-sta')
  const [percentage, setPercentage] = useState(0)
  const targetPercentage = 70

  useEffect(() => {
    if (activeSection === 'waar-ik-nu-sta') {
      // Reset percentage when section becomes active
      setPercentage(0)
      
      // Ease-out function
      const easeOut = (t) => {
        return 1 - Math.pow(1 - t, 3) // cubic ease-out
      }
      
      // Animate percentage counting with ease-out
      const duration = 2000 // 2 seconds
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
              <h2 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '28px', color: 'var(--orange)', margin: 0 }}>4. Evalueren</h2>
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
                <p>Op dit moment plan ik regelmatig feedbackrondes in, bijvoorbeeld met medestudenten, docenten of gebruikers. Dat helpt mij om inzicht te krijgen in wat goed werkt in mijn ontwerp en wat nog beter kan. Toch merk ik dat ik mijn evaluaties nog niet altijd gestructureerd aanpak. Vaak beoordeel ik mijn werk vooral op basis van meningen of persoonlijke indrukken, in plaats van via duidelijke methodes. Daardoor is mijn evaluatie soms wat oppervlakkig en weet ik niet altijd waarom iets goed of minder goed is. Ik wil leren om evaluaties meer op feiten en data te baseren, zodat ik sterker kan onderbouwen waarom bepaalde ontwerpkeuzes effectief zijn.</p>
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
              <p>In de afgelopen periode heb ik veel ervaring opgedaan (tijdens korte stage) met het verzamelen en verwerken van feedback. Tijdens groepsprojecten heb ik bijvoorbeeld gebruikerstesten uitgevoerd en feedbackmomenten georganiseerd met verschillende doelgroepen. Ook heb ik samengewerkt met teamleden om A/B-testen op te zetten(korte stage) en resultaten te bespreken. Door dit te doen, heb ik geleerd dat evalueren niet alleen gaat om het horen van meningen, maar ook om het vertalen van die feedback naar concrete verbeteringen. Ik begin steeds beter te begrijpen hoe belangrijk het is om gebruikers echt te betrekken bij het ontwerpproces, omdat hun ervaring vaak andere inzichten oplevert dan die van ontwerpers of docenten.</p>
            </div>
            <div className={`competentie-content ${activeSection === 'goed-minder-goed' ? 'active' : ''}`} id="goed-minder-goed">
              <h3 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '22px', color: 'var(--orange)', marginTop: '20px', marginBottom: '15px' }}>Wat goed gaat</h3>
              <ul style={{ marginBottom: '25px', paddingLeft: '20px' }}>
                <li>Ik plan feedbackmomenten in en vraag regelmatig naar meningen van anderen</li>
                <li>Ik luister goed naar de input van gebruikers, docenten en teamleden en gebruik dit om mijn ontwerp te verbeteren</li>
                <li>Ik ben flexibel en kan snel aanpassingen maken op basis van ontvangen feedback</li>
                <li>Ik sta open voor kritiek en zie dit als een kans om te groeien</li>
              </ul>
              <h3 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '22px', color: 'var(--orange)', marginTop: '20px', marginBottom: '15px' }}>Wat minder goed gaat</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Ik onderbouw mijn evaluaties nog niet met duidelijke meetbare gegevens</li>
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
                    src="/images/0-meting/evalueren/Energize.png" 
                    alt="Energize" 
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image 
                    src="/images/0-meting/evalueren/omnient.png" 
                    alt="Omnient" 
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

