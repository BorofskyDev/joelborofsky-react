// import { useState, useEffect, useRef } from 'react'

// export function useStickyNav() {
//   const [isSticky, setIsSticky] = useState(false)
//   const navbarRef = useRef(null)
//   const titleRef = useRef(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       const navbar = navbarRef.current
//       const title = titleRef.current

//       if (!navbar || !title) return

//       const navPos = navbar.getBoundingClientRect().top
//       const scrollPos = window.scrollY

//       if (scrollPos > navPos) {
//         setIsSticky(true)
//       } else {
//         setIsSticky(false)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return { isSticky, navbarRef, titleRef }
// }


import { useState, useEffect, useRef } from 'react'

export function useStickyNav() {
  const [isSticky, setIsSticky] = useState(false)
  const navbarRef = useRef(null)
  const bannerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current
      const banner  = bannerRef.current
      if (!navbar || !banner) return

      const navPos = navbar.getBoundingClientRect().top
       const bannerBottomPos = banner.getBoundingClientRect().bottom

      if (navPos <= 0 && bannerBottomPos < 0 ) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isSticky, navbarRef, bannerRef }
}