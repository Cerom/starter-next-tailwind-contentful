import React, {use} from 'react'
import SectionMachine from '../components/SectionMachine'
import {getContentfulData} from './getContentfulData'
import Section from '../components/Section'

function index(props) {
  let data = use(
    getContentfulData(
      '2FDJUAB65d3Ylu22ZCDAzi',
      process.env.CONTENTFUL_SPACE_ID,
      process.env.CONTENTFUL_ACCESS_TOKEN
    )
  )

  console.log(data)

  return (
    <main id="HOME">
      <Section>hello</Section>
      {/* <SectionMachine pages={data?.listSections} /> */}
    </main>
  )
}

export default index
