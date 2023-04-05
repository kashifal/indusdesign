import { useState } from 'react'
import Link from 'next/link'

import { AnimatePresence, motion } from 'framer-motion'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return [
    ['Features', '#features','old'],
    ['Reviews', '#reviews','old'],
    ['Pricing', '#pricing','old'],
    ['FAQs', '#faqs','old'],
    ['Showcase', '#showcase','old'],
    ['Download Templates', '/template', 'new'],

  ].map(([label, href, isNew], index) => (
    <Link
      key={label}
      href={href}
      className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-100"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      
      <span className="relative z-10">{label} {isNew === 'new' ? <span className='px-1.5 py-0.5 ml-1 text-xs  text-yellow-500 bg-yellow-50 ring-1 ring-yellow-500 rounded-xl'>new</span> : ''}</span>
    </Link>
  ))
}
