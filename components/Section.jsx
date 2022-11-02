import React, {useContext, useEffect, useRef, useState} from 'react'
import Background from './Background'
import useScrollProgress from '../utils/hooks/useScrollProgress.jsx'

function Section({
  title,
  background,
  stickyNbSlides,
  children,
  setScrollProgress,
  id
}) {
  const refSection = useRef()
  const {scrollProgress} = useScrollProgress(refSection)

  const slidesNumber = stickyNbSlides ? stickyNbSlides : 0

  useEffect(() => {
    stickyNbSlides && setScrollProgress(scrollProgress)
  }, [scrollProgress])

  return (
    <section
      ref={refSection}
      style={{
        height: stickyNbSlides ? `calc(${slidesNumber} * 100vh)` : '100vh',
        contain: 'paint'
      }}
      id={id}
    >
      {background && (
        <Background color={background} stickyNbSlides={slidesNumber} />
      )}
      {stickyNbSlides ? (
        <div className="sticky top-0 bottom-18 h-screen p-8">
          <div className="relative flex flex-col flex-grow justify-evenly items-center max-w-7xl m-auto min-h-full h-full">
            <SectionStickyProgressBar
              background={background}
              scrollProgress={scrollProgress}
              slidesNumber={slidesNumber}
            />
            <div
              className={`container flex flex-col justify-start flex-grow p-around py-0 md:p-0 gap-0 mx-auto h-full w-full mb-32 
                          ${!title && 'justify-center'}
                        `}
            >
              {title && (
                <div className="text-center">
                  <h4>{title}</h4>
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative p-8 h-full">
          <div className="max-w-7xl m-auto h-full">
            <div
              className={`container flex flex-col justify-start flex-grow p-around py-0 md:p-0 gap-0 mx-auto h-full w-full mb-32 
                          ${!title && 'justify-center'}
                        `}
            >
              {title && (
                <div className="subtitle text-center">
                  <h4>{title}</h4>
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Section
