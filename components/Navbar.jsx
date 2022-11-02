import React, {useMemo} from 'react'
import {motion} from 'framer-motion'
import useScrollProgress from '../utils/hooks/useScrollProgress'

function Navbar({data}) {
  const {isNavBig, isScrolled100vh} = useScrollProgress()

  const menu = useMemo(() => {
    return data.listSections
      .map((e, i) => {
        return {
          key: i,
          sectionTitle: e.fields.sectionTitle,
          navbar: e.fields.navbar
        }
      })
      .filter((e) => e.navbar)
  }, [data])

  return (
    <motion.nav
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className="flex w-screen justify-between items-center sticky top-0 z-50 bg-black/10 backdrop-blur"
    >
      <motion.div
        animate={{
          padding: isNavBig ? '1rem 1rem' : '0.25rem 1rem'
        }}
        className="flex w-full max-w-7xl m-auto justify-between items-center"
      >
        <img
          onClick={() => {
            document.getElementById('HOME').scrollIntoView()
          }}
          className="w-12 cursor-pointer"
          src="images/logo-white.svg"
          alt="logo"
        />
        <div className="flex gap-8 z-40">
          {menu.map((e, i) => {
            return (
              <div
                key={i + '-' + e.sectionTitle}
                className="cursor-pointer uppercase text-white"
                onClick={() => {
                  document.getElementById(e.sectionTitle).scrollIntoView()
                }}
              >
                {e.sectionTitle}
              </div>
            )
          })}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
