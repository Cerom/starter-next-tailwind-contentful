import React from 'react'
import SectionHero from '../sections/SectionHero'

function SectionMachine({pages}) {
  return pages?.map((section, index) => {
    // const isEven = index % 2 === 0

    switch (section.sys.contentType.sys.id) {
      case 'sectionHero':
        return <SectionHero key={section.sys.id} data={section.fields} />
        break

      default:
        return null
    }
  })
}

export default SectionMachine
