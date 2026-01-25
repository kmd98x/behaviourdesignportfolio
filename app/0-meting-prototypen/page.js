'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import PageHeading from '@/components/ui/PageHeading'

export default function ZeroMetingPrototypenPage() {
  const [activeSection, setActiveSection] = useState('waar-ik-nu-sta')
  const [percentage, setPercentage] = useState(0)
  const targetPercentage = 85

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
          <PageHeading title="0- Meting" />
          <div className="text-content" style={{ marginTop: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <Link href="/0-meting" className="back-arrow">←</Link>
              <h2 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '28px', color: 'var(--orange)', margin: 0 }}>3. Prototypen en uitwerken</h2>
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
                <p>Ik kan eenvoudige prototypes maken in Figma en deze gebruiken om mijn ideeën te testen bij gebruikers. Ik gebruik prototypes vooral om te onderzoeken of een concept duidelijk overkomt en of de interactie logisch aanvoelt. Dit helpt mij om snel te zien wat werkt en wat beter kan. Ik merk dat ik hier al vrij goed in ben, maar toch wil ik mijn prototypes naar een hoger niveau brengen. Vaak zien ze er nog wat eenvoudig uit, waardoor de gebruiker niet altijd goed begrijpt hoe het eindproduct eruit zou kunnen zien. Daarom wil ik leren werken met meer geavanceerde tools en technieken, zoals high-fidelity prototypes in Figma of interactieve prototypes die beter laten zien hoe een product echt zou werken. Ook wil ik leren hoe ik beter kan documenteren wat ik test, zodat ik mijn keuzes beter kan onderbouwen.</p>
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
              <p>Tijdens eerdere projecten heb ik prototypes gebruikt om mijn ideeën te testen en feedback te krijgen. Bij groepsprojecten maakte ik eerst papieren schetsen om snel te kunnen aanpassen, en daarna digitale versies in Figma om te laten zien hoe een gebruiker door het ontwerp navigeert. Daardoor leerde ik hoe belangrijk het is om eerst iets simpels te testen in plaats van meteen alles perfect te willen maken. Door te werken met tools zoals Figma en soms Adobe XD, heb ik beter geleerd hoe ik interacties en overgangen kan laten zien. Zo kan ik mijn concepten duidelijker uitleggen. Wat ik nog lastig vind, is om de hele gebruikerservaring goed over te brengen, bijvoorbeeld het gevoel of de vloeiendheid van het gebruik. Dat wil ik verder ontwikkelen.</p>
            </div>
            <div className={`competentie-content ${activeSection === 'goed-minder-goed' ? 'active' : ''}`} id="goed-minder-goed">
              <h3 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '22px', color: 'var(--orange)', marginTop: '20px', marginBottom: '15px' }}>Wat goed gaat</h3>
              <ul style={{ marginBottom: '25px', paddingLeft: '20px' }}>
                <li>Prototypes gebruiken om ideeën snel te testen</li>
                <li>Feedback van gebruikers verwerken in nieuwe versies van het ontwerp</li>
              </ul>
              <h3 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '22px', color: 'var(--orange)', marginTop: '20px', marginBottom: '15px' }}>Wat minder goed gaat</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li>De volledige gebruikerservaring duidelijk overbrengen via het prototype</li>
                <li>Moeilijke interacties of animaties maken</li>
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
                    src="/images/0-meting/prototypen-en-uitwerken/fw-new-homepage-prototype.png" 
                    alt="FW New Homepage Prototype" 
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image 
                    src="/images/0-meting/prototypen-en-uitwerken/mastercourse-prototype.png" 
                    alt="Mastercourse Prototype" 
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
