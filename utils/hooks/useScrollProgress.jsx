import {useEffect, useState} from 'react'
import {useScrollDirection} from 'react-use-scroll-direction'

export default function useScrollProgress(ref) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolled100vh, setIsScrolled100vh] = useState(false)

  const [isNavBig, setIsNavBig] = useState(true)
  const {isScrollingUp, isScrollingDown} = useScrollDirection()

  useEffect(() => {
    if (isScrollingDown) {
      setIsNavBig(false)
    } else if (isScrollingUp) {
      setIsNavBig(true)
    }
  }, [isScrollingUp, isScrollingDown])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled100vh(true)
      } else {
        setIsScrolled100vh(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const trackProgress = () => {
      const refElement = ref.current
      const contentRect = refElement.getBoundingClientRect()

      const scrollY = window.scrollY
      const sectionTopY = contentRect.y + scrollY
      const scrollInSection = scrollY - sectionTopY

      const sectionH = contentRect.height
      const screenH = window.innerHeight

      const rawScrollProgress = scrollInSection / (sectionH - screenH)

      setScrollProgress(Math.max(0, Math.min(rawScrollProgress, 1)))
    }

    if (ref) window.addEventListener('scroll', trackProgress)

    return () => {
      window.removeEventListener('scroll', trackProgress)
    }
  }, [])

  return {scrollProgress, isNavBig, isScrolled100vh}
}
