'use client'

import Image from 'next/image'
import Link from 'next/link'
import InhoudsopgaveSVG from '@/components/InhoudsopgaveSVG'

export default function InhoudsopgavePage() {
  return (
    <div className="page active" style={{ display: 'block' }}>
      <div className="page-content">
        <h1 className="section-title">Inhoudsopgave</h1>
        <Image 
          src="/images/lijn.svg" 
          alt="Inhoudsopgave" 
          className="over-mij-title-image"
          width={371}
          height={50}
        />
        <div className="content-placeholder">
          <a href="" className=""></a>
          <div className="inhoudsopgave-svg-container" style={{ width: '1280px', overflowX: 'auto', position: 'relative', minHeight: '620px' }}>
            <InhoudsopgaveSVG />
            <Link href="/0-meting" className="overlay-link overlay-link--meting"></Link>
            <Link href="/ontwikkelplan" className="overlay-link overlay-link--ontwikkelplan"></Link>
            <Link href="/carddeck" className="overlay-link overlay-link--carddeck"></Link>
            <Link href="/bootcamp" className="overlay-link overlay-link--bootcamp"></Link>
            <Link href="/gewoonte" className="overlay-link overlay-link--gewoonte"></Link>
            <Link href="/workshop" className="overlay-link overlay-link--workshop"></Link>
            <Link href="/omnient" className="overlay-link overlay-link--omnient"></Link>
            <Link href="/over-mij" className="overlay-link overlay-link--overmij"></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
