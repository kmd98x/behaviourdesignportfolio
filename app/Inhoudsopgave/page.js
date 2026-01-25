'use client'

import Image from 'next/image'
import Link from 'next/link'
import InhoudsopgaveSVG from '@/components/InhoudsopgaveSVG'
import PageHeading from '@/components/ui/PageHeading'

export default function InhoudsopgavePage() {
	const defaultLinkStyling = 'text-4xl flex flex-col items-center justify-center absolute leading-none'
	const pageLinks = [
		{page: 'over-mij', top: '-14%', left: '-2%'},
		{page: '0-meting', top: '62%', left: '20%'},
		{page: 'ontwikkelplan', top: '37%', left: '0%'},
		{page: 'carddeck', top: '3%', left: '22%'},
		{page: 'bootcamp', top: '34%', left: '32%'},
		{page: 'gewoonte', top: '50%', left: '46%'},
		{page: 'workshop', top: '32%', left: '61%'},
		{page: 'omnient', top: '65%', left: '72%'},
	]

	return (
		<div className="page active" style={{ display: 'block' }}>
			<div className="page-content">
				<PageHeading title="Inhoudsopgave" />

				<div className="translate-y-20 translate-x-14 py-14 relative">
					<InhoudsopgaveSVG />
					{pageLinks.map((link, index) => (
						<Link key={index} href={link.page} className={`${defaultLinkStyling} text-2xl`} style={{ top: link.top, left: link.left }}><span>0{index + 1}</span> {link.page.replace('-', ' ')}</Link>
					))}
				</div>
			</div>
		</div>
	)
}
