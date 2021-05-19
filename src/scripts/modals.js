const modalsInit = () => {
  const modalCloseBtns = document.querySelectorAll('.modal-close__btn')
  const modalRate = document.querySelector('#modal-rate')
  const modalSuccess = document.querySelector('#modal-success')
  const modalRateSelect = modalRate.querySelector('[name="rate"]')
  const fieldWrapper = '.form-input'

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal').getAttribute('id')
      $.fancybox.close(modal)
    })
  })

  const toggleDisableUI = (modal, isDisabled = false) => {
    if (!modal) return false

    const fields = modal.querySelectorAll('[name]')
    const submitBtn = modal.querySelector('[type="submit"]')

    const classAction = isDisabled ? 'add' : 'remove'

    submitBtn.classList[classAction]('sending')
      fields.forEach(input => {
        if (isDisabled) {
          input.setAttribute('disabled', true)
          return true
        }
        input.removeAttribute('disabled')
      })
  }

  const openModal = (modalElement) => {
    $.fancybox.open(modalElement, {
      touch: false,
      smallBtn: false,
      toolbar: false
    })
  }

  const closeModal = (modalElement) => {
    $.fancybox.close(modalElement)
  }

  const openSuccessModal = () => {
    $.fancybox.close()
    openModal(modalSuccess)
    setTimeout(() => {
      closeModal(modalSuccess)
    }, 3000)
  }

  const initModal = (id) => {
    const btns = document.querySelectorAll(`[data-${id}]`)
    const modal = document.querySelector(`#modal-${id}`)

    const form = modal.querySelector('form')

    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        openModal(modal)
      })
    })

    form.addEventListener('submit', async function(e) {
      e.preventDefault()
      toggleDisableUI(modal, true)
      const fields = modal.querySelectorAll('[name]')
      const fieldsWithValidations = modal.querySelectorAll('[data-mask]')
      const data = {}
      let isFormValid = true

      fields.forEach((field) => {
        const name = field.getAttribute('name')
        data[name] = field.value
      })

      fieldsWithValidations.forEach(field => {
        const isValid = field.inputmask.isComplete()
        const validAction = isValid ? 'remove' : 'add'
        field.closest(fieldWrapper).classList[validAction]('invalid')

        if (!isValid) isFormValid = false          
      })

      if (isFormValid) {
        const test = () => {
          return new Promise(resolve => {
            setTimeout(() => resolve(data), 1000)
          })
        }
    
        const response = await test()
        openSuccessModal()
    
        console.log(response)
      }
      toggleDisableUI(modal, false)
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
   
  const initRateModal = (id) => {
    const btns = document.querySelectorAll(`[data-${id}]`)
    const modal = document.querySelector(`#modal-${id}`)
    const chooseBtn = modal.querySelector('[data-choose-rate]')

    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        openModal(modal)
      })
    })

    chooseBtn.addEventListener('click', () => {
      closeModal(modal)
      openModal(modalRate)
      const index = [...modalRateSelect.options].findIndex(i => i.value === id)
      modalRateSelect.sumo.selectItem(index)
    })
  }

  initModal('callback')
  initModal('consult')
  initModal('service')
  initModal('rate')

  initRateModal('rate-base')
  initRateModal('rate-full')
}

export default modalsInit
