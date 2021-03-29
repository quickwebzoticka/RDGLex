import mapInit from './map.js'
import swiperInit from './swipers.js'

document.addEventListener('DOMContentLoaded', () => {
  const arrowBottom = document.querySelector('.btn-down')
  const windowHeight = window.innerHeight
  const accordionContainer = document.querySelector('.screen-services-list')
  const accordionItems = accordionContainer.querySelectorAll('.screen-services-item')
  const navLinks = document.querySelectorAll('.nav__link')
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

  navLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
      e.preventDefault()

      const target = document.querySelector(this.hash)
      const targetOffsetTop = target.offsetTop
      
      setActiveLink(this)

      scrollTo(targetOffsetTop)
    })
  })
  const observerCallback = (entries) => {
    entries.forEach(item => {
      if (item.isIntersecting && !isNavLinksDisabled) {
        const link = document.querySelector(`.nav a[href="#${item.target.id}"]`)
        setActiveLink(link)
      }
    })
  }
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5
  });

  navTargetsOffsets.forEach((item) => {
    observer.observe(item)
  })

  accordionItems.forEach((item) => {
    item.addEventListener('click', function() {
      accordionItems.forEach(item => item.classList.remove('active'))
      this.classList.add('active')
    })
  })

  arrowBottom.addEventListener('click', () => {
    scrollTo(windowHeight)
  })

  mapInit()
  swiperInit()
})