document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.js-open-modal')
    const modal = document.querySelector(openButton.dataset.target)

    openButton.addEventListener('click', () => {
        modal.style.display = 'block'
    })

    modal.querySelector('.modal-dialog').addEventListener('click', event => {
        event._isClickWithinModal = true
    })

    modal.addEventListener('click', event => {
        if (event._isClickWithinModal) return
        modal.style.display = 'none'
    })
})