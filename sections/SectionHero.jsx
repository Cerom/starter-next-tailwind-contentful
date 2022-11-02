import Section from '../components/Section'

function SectionHero({data}) {
  return (
    <Section id={data.sectionTitle} title={data.title} background="offwhite">
      Hero Section
    </Section>
  )
}

export default SectionHero
