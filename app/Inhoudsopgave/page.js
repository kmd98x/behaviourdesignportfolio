'use client'

import Image from 'next/image'
import Link from 'next/link'
import InhoudsopgaveSVG from '@/components/InhoudsopgaveSVG'
import PageHeading from '@/components/ui/PageHeading'

export default function InhoudsopgavePage() {
	const defaultLinkStyling = 'text-4xl flex flex-col items-center justify-center absolute leading-none'
	const pageLinks = [
		{page: 'Over mij', top: '-70px', left: '-30px'},
		{page: '0-meting', top: '310px', left: '330px'},
		{page: 'Ontwikkelplan', top: '185px', left: '0px'},
		{page: 'Carddeck', top: '15px', left: '370px'},
		{page: 'Bootcamp', top: '170px', left: '555px'},
		{page: 'Gewoonte', top: '250px', left: '784px'},
		{page: 'Workshop', top: '160px', left: '1055px'},
		{page: 'Omnient', top: '330px', left: '1215px'},
	]

	return (
		<div className="page active" style={{ display: 'block' }}>
			<div className="page-content">
				<div className="ml-10!">
					<PageHeading title="Inhoudsopgave" />
				</div>

				<div className="translate-y-20 translate-x-14 py-14 relative">
					<InhoudsopgaveSVG />
					{pageLinks.map((link, index) => (
						<Link key={index} href={'/' + link.page.replace(' ', '-').toLowerCase()} className={`${defaultLinkStyling} text-2xl`} style={{ top: link.top, left: link.left }}><span>0{index + 1}</span> {link.page}</Link>
					))}
				</div>
			</div>
		</div>
	)
}
