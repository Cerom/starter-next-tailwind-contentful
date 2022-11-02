import React from 'react'
import {motion} from 'framer-motion'
import useScrollProgress from '../utils/hooks/useScrollProgress'

function SectionStickyProgressBar({background, scrollProgress}) {
  const {isNavBig} = useScrollProgress(ref)

  return (
    <motion.div
      className={`absolute left-0 h-2 w-full 
                ${background === 'blue' && 'bg-themeoffwhite'} 
                ${background === 'offwhite' && 'bg-white'}`}
      initial={{opacity: 0}}
      animate={{
        opacity: scrollProgress > 0 ? 1 : 0,
        top: isNavBig ? '45px' : '21px'
      }}
    >
      {[...Array(slidesNumber)].map((slide, i) => {
        if (i + 1 === slidesNumber) return null
        return (
          <div
            key={i}
            className={`absolute top-0 h-2 w-2 
                      ${background === 'blue' && 'bg-themeblue'} 
                      ${background === 'offwhite' && 'bg-themeoffwhite'}
                    `}
            style={{
              left: `${(100 / slidesNumber) * (i + 1)}%`
            }}
          />
        )
      })}
      <motion.div
        className={`absolute top-0 left-0 h-2 
                  ${background === 'blue' && 'bg-themeblue'} 
                  ${background === 'offwhite' && 'bg-themeoffwhite'}
                `}
        style={{width: scrollProgress * 100 + '%'}}
      />
    </motion.div>
  )
}

export default SectionStickyProgressBar
