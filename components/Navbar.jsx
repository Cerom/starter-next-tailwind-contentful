'use client'
import React from 'react'
import {motion} from 'framer-motion'
import useScrollProgress from '../utils/hooks/useScrollProgress'

function Navbar({data}) {
  const {isNavBig, isScrolled100vh} = useScrollProgress()

  const menu = data.listSections
    ?.map((e, i) => {
      return {
        key: i,
        sectionTitle: e.fields.sectionTitle,
        navbar: e.fields.navbar
      }
    })
    .filter((e) => e.navbar)

  return (
    <motion.nav className="sticky top-0 z-50 flex w-screen items-center justify-between bg-black/10 backdrop-blur">
      <motion.div
        initial={{
          padding: '1rem 1rem'
        }}
        animate={{
          padding: isNavBig ? '1rem 1rem' : '0.25rem 1rem'
        }}
        className="m-auto flex w-full max-w-7xl items-center justify-between"
      >
        <img
          onClick={() => {
            document.getElementById('HOME').scrollIntoView()
          }}
          className="w-12 cursor-pointer"
          src="images/logo-white.svg"
          alt="logo"
        />
        <div className="z-40 flex gap-8">
          {menu?.map((e, i) => {
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
