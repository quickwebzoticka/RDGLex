import mapInit from './map.js'
import swiperInit from './swipers.js'
import modalsInit from './modals.js'

document.addEventListener('DOMContentLoaded', () => {
  const arrowBottom = document.querySelector('.btn-down')
  const navigationBar = document.querySelector('.side')
  const navBurger = document.querySelector('.nav-mobile-burger')
  const windowHeight = window.innerHeight
  const accordionContainer = document.querySelector('.screen-services-list')
  const accordionItems = accordionContainer.querySelectorAll('.screen-services-item')
  const navLinks = document.querySelectorAll('.nav__link')
  const navLinksMobile = document.querySelectorAll('.nav-mobile__link')
  const navTargetsOffsets = [...navLinks].map(i => {
    return document.querySelector(i.hash)
  })
  const logo = document.querySelector('.logo')
  let isNavLinksDisabled = false

  const scrollTo = (top) => {
    isNavLinksDisabled = true
    window.scrollTo({ 
      top,
      behavior: 'smooth'
    })
    setTimeout(() => {isNavLinksDisabled = false}, 800)
  }

  logo.addEventListener('click', (e) => {
    e.preventDefault()
    
    setActiveLink(document.querySelector('.nav a[href="#main"]'))
    scrollTo(0)
  })

  const setActiveLink = (link) => {
    navLinks.forEach(link => link.classList.remove('active'))
    link.classList.add('active')
  }
  const setActiveMobileLink = (link) => {
    navLinksMobile.forEach(link => link.classList.remove('active'))
    link.classList.add('active')
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
      e.preventDefault()

      const target = document.querySelector(this.hash)
      const targetOffsetTop = target.offsetTop
      
      setActiveLink(this)

      scrollTo(targetOffsetTop)
    })
  })
  navLinksMobile.forEach((link) => {
    link.addEventListener('click', function(e) {
      e.preventDefault()

      const target = document.querySelector(this.hash)
      const targetOffsetTop = target.offsetTop
      
      setActiveMobileLink(this)
      toggleNavMobile(true)
      scrollTo(targetOffsetTop)
    })
  })

  const observerCallback = (entries) => {
    entries.forEach(item => {
      if (item.isIntersecting && !isNavLinksDisabled) {
        const link = document.querySelector(`.nav a[href="#${item.target.id}"]`)
        const linkMobile = document.querySelector(`.nav-mobile__link[href="#${item.target.id}"]`)
        setActiveLink(link)
        setActiveMobileLink(linkMobile)
      }
    })
  }
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5
  });

  navTargetsOffsets.forEach((item) => {
    observer.observe(item)
  })

  // accordionItems.forEach((item) => {
  //   item.addEventListener('click', function() {
  //     accordionItems.forEach(item => item.classList.remove('active'))
  //     this.classList.add('active')
  //   })
  // })

  arrowBottom.addEventListener('click', () => {
    scrollTo(windowHeight)
  })

  const toggleNavMobile = (isOpen = true) => {
    if (isOpen) {
      navigationBar.classList.remove('active')
    } else {
      navigationBar.classList.add('active')
    }
  }

  navBurger.addEventListener('click', () => {
    const isOpen = navigationBar.classList.value.includes('active')
    toggleNavMobile(isOpen)
  })

  mapInit()
  swiperInit()
  modalsInit()
})