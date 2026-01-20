export default function Tab({ label, sectionId, activeSection, onClick, className = '' }) {
	const isActive = activeSection === sectionId

	return (
		<button
			className={`font-jacques-francois text-lg no-underline relative transition-all duration-300 whitespace-nowrap shrink-0 px-[25px]! py-[15px]! border border-white/20 rounded-[50px] ${
				isActive
					? 'text-orange-500 bg-[#181819]'
					: 'text-gray-300 bg-[#181819] hover:text-orange-500 hover:bg-[rgba(24,24,25,0.8)]'
			} ${className}`}
			onClick={onClick}
		>
			{label}
		</button>
	)
}
