import React from 'react'

export default function BootcampCard({title, content, children, noBorder}) {

    return (
        <div className={`relative flex flex-col items-center justify-center gap-8 p-8! px-16! ${noBorder ? '' : 'border border-orange-500/50 rounded-lg'}`}>
            <p className='text-lg font-bold'>{title}</p>
            <p>{content}</p>

            {children}
        </div>
    )
}
