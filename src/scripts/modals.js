const modalsInit = () => {
  /**
   * Common
   */
  const modalCloseBtns = document.querySelectorAll('.modal-close__btn')

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal').getAttribute('id')
      $.fancybox.close(modal)
    })
  })


  const initModal = (id) => {
    const btns = document.querySelectorAll(`[data-${id}]`)
    const modal = document.querySelector(`#modal-${id}`)

    const form = modal.querySelector('form')
    const fields = modal.querySelectorAll('[name]')
    const submitBtn = modal.querySelector('[type="submit"]')

    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        $.fancybox.open(modal, {
          touch: false
        })
      })
    })

    form.addEventListener('submit', async function(e) {
      e.preventDefault()
      console.log('submiting')
      submitBtn.classList.add('sending')
      fields.forEach(input => {
        input.setAttribute('disabled', true)
      })
      const test = () => {
        return new Promise(resolve => {
          setTimeout(() => resolve(1), 1000)
        })
      }
  
      const response = await test()
  
      console.log(response)
  
      submitBtn.classList.remove('sending')
      fields.forEach(input => {
        input.removeAttribute('disabled')
      })
    })
  }

  /**
   * Validations
   */

  const elementsWithMasks = document.querySelectorAll('[data-mask]')
  elementsWithMasks.forEach(el => {
    const maskType = el.dataset.mask

    if (maskType === 'letters') {
      Inputmask({ regex: "[А-Яа-я\\s]*" }).mask(el)
    }

    if (maskType === 'tel') {
      Inputmask("+7 (999) 999-99-99").mask(el)
    }
  })
   
  initModal('callback')
  initModal('consult')
}

export default modalsInit
