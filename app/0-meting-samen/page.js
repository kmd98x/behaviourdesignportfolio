'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ZeroMetingSamenPage() {
  const [activeSection, setActiveSection] = useState('waar-ik-nu-sta')
  const [percentage, setPercentage] = useState(0)
  const targetPercentage = 75

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
              <h2 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '28px', color: 'var(--orange)', margin: 0 }}>5. Samen ontwerpen</h2>
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
                <p>Ik kan goed samenwerken in een team. Ik luister naar anderen, denk mee en verwerk de ideeën van mijn teamleden in het ontwerp. Ik merk dat dit zorgt voor betere resultaten, omdat we verschillende perspectieven combineren. Ik vind het belangrijk dat iedereen zich gehoord voelt en dat we samen beslissingen nemen. Wat ik soms nog lastig vind, is om mijn eigen ideeën duidelijk te presenteren of door te zetten als anderen een andere richting op willen. Ik ben eerder geneigd om mee te gaan met de groep, ook als ik eigenlijk een goed alternatief heb.</p>
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
              <p>In de afgelopen semesters heb ik veel samengewerkt aan groepsopdrachten, waarbij ik heb geleerd hoe belangrijk communicatie is in het ontwerpproces. Ik heb ervaren dat samenwerken niet alleen betekent dat je taken verdeelt, maar ook dat je elkaar helpt om beter te worden. Door feedbacksessies en gezamenlijke brainstorms heb ik geleerd mijn mening beter te onderbouwen en te luisteren naar de argumenten van anderen. Toch wil ik mezelf verder ontwikkelen in het actiever presenteren van mijn eigen ideeën. Dat betekent dat ik vaker uitleg waarom ik iets voorstel, wat het toevoegt aan het ontwerp en hoe het aansluit bij de wensen van de gebruiker.</p>
            </div>
            <div className={`competentie-content ${activeSection === 'goed-minder-goed' ? 'active' : ''}`} id="goed-minder-goed">
              <h3 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '22px', color: 'var(--orange)', marginTop: '20px', marginBottom: '15px' }}>Wat goed gaat</h3>
              <ul style={{ marginBottom: '25px', paddingLeft: '20px' }}>
                <li>Ik kan goed samenwerken en communiceren met verschillende teamleden</li>
                <li>Ik ontvang feedback op een positieve manier</li>
                <li>Ik help mee om overzicht te houden en de samenwerking soepel te laten verlopen</li>
                <li>Ik denk mee vanuit het gezamenlijke doel en houd rekening met de mening van anderen</li>
              </ul>
              <h3 style={{ fontFamily: 'var(--font-jacques-francois)', fontSize: '22px', color: 'var(--orange)', marginTop: '20px', marginBottom: '15px' }}>Wat minder goed gaat</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Ik vind het soms lastig om mijn eigen ideeën overtuigend te presenteren</li>
                <li>Ik durf mijn mening niet altijd te verdedigen als anderen een andere richting kiezen</li>
              </ul>
            </div>
            <div className={`competentie-content ${activeSection === 'voorbeelden' ? 'active' : ''}`} id="voorbeelden">
              <Image 
                src="/images/0-meting/samen-ontwerpen/screens.png" 
                alt="Screens" 
                width={800}
                height={600}
                style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', margin: '0 auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
