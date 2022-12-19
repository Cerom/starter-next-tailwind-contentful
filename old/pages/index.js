import {useContext, useEffect, useMemo, useRef, useState} from 'react'
import Footer from '../../components/Footer'
import Metadata from '../../components/Metadata'
import Navbar from '../../components/Navbar'
import SectionMachine from '../../components/SectionMachine'
import Context from '../../utils/Context'
import useScrollProgress from '../../utils/hooks/useScrollProgress'

export default function Home({homeDataFr, homeDataEn}) {
  const ref = useRef()
  const scrollProgress = useScrollProgress(ref)

  const [data, setData] = useState(null)
  const {locale} = useContext(Context)

  useEffect(() => {
    setData(locale === 'fr' ? homeDataFr : homeDataEn)
  }, [locale])

  const main = useMemo(() => {
    return (
      <main id="HOME" ref={ref}>
        <Metadata title={data?.pageTitle} />
        <Navbar data={data} />
        <SectionMachine pages={data?.listSections} />
        <Footer data={data} />
      </main>
    )
  }, [data, scrollProgress])

  if (!data) {
    return null
  }
  return main
}

export async function getStaticProps({preview = false}) {
  const contentful = require('contentful')
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  // const homeDataFr = await client
  //   .getEntry('2FDJUAB65d3Ylu22ZCDAzi', {include: 3, locale: 'fr'})
  //   .then((entry) => entry.fields)
  //   .catch(console.error)

  const homeDataEn = await client
    .getEntry(process.env.CONTENTFUL_HOMEPAGECONTENT_ID, {
      include: 3,
      locale: 'en-US'
    })
    .then((entry) => entry.fields)
    .catch(console.error)

  return {
    props: {homeDataEn}
  }
}
