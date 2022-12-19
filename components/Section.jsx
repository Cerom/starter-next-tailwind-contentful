import React from 'react'
import Background from './Background'

function Section({title, background, children, id, className}) {
  return (
    <section id={encodeURIComponent(id)} className={className}>
      {background && <Background color={background} />}
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
    </section>
  )
}

export default Section
