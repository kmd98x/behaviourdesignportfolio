'use client'

import React, { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function PageHeading({ title }) {
    const titleRef = useRef(null)
    const svgRef = useRef(null)

    useGSAP(() => {
        if (!titleRef.current) return

        const letters = titleRef.current.querySelectorAll('.letter')
        
        // Set initial state for all letters
        gsap.set(letters, {
            opacity: 0,
            y: 20
        })

        // Animate letters with stagger
        gsap.to(letters, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
            stagger: 0.08
        })
    }, [title])

    useGSAP(() => {
        if (!svgRef.current) return

        const clipRect = svgRef.current.querySelector('#clip-rect')
        if (!clipRect) return

        // Set initial state - clip from left (width = 0)
        gsap.set(clipRect, {
            width: 0
        })

        // Animate clipPath from left to right
        gsap.to(clipRect, {
            width: 342, // Full SVG width
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.3 // Start after letters animation begins
        })
    }, [])

    // Split title into individual letters, preserving spaces
    const letters = title ? title.split('').map((char, index) => {
        if (char === ' ') {
            return <span key={index} className="letter inline-block w-2 font-montez" aria-hidden="true">&nbsp;</span>
        }
        return (
            <span key={index} className="letter inline-block font-montez" aria-hidden="false">
                {char}
            </span>
        )
    }) : null

    return (
        <div className="mb-5!">
            <h1 
                ref={titleRef}
                className="text-5xl text-orange-500 mb-12 leading-none"
                aria-label={title}
            >
                {letters}
            </h1>

            <svg 
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg" 
                width="342" 
                height="50" 
                fill="none" 
                viewBox="0 0 342 50"
                className="-ml-10!"
            >
                <defs>
                    <clipPath id="svg-clip">
                        <rect id="clip-rect" x="0" y="0" height="50" />
                    </clipPath>
                </defs>
                <path 
                    fill="#f95d01" 
                    d="m-32.22 47.854.363.931q.353.855.368.85a239 239 0 0 1 18.087-6.243C97.353 5.794 222.197 75.849 326.26 10.843A147 147 0 0 0 338.994.896l-.039.027c.889-.522 1.859-.872 2.937-.83-1.024-.195-2.206-.099-3.142.449l-.04.027a145 145 0 0 1-12.756 9.83C222.016 74.46 98.197 2.991-14.219 40.673a238 238 0 0 0-18.308 6.307q-.015.006.306.874"
                    clipPath="url(#svg-clip)"
                />
            </svg>
        </div>
    )
}