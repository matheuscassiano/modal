const button = document.querySelector('.button')

function modalStart(modalId) {
    const modal = document.getElementById(modalId)

    if (modal) {
        modal.classList.add('show')
        modal.addEventListener('click', (event) => {
            if (event.target.id == modalId || event.target.className == 'exit') {
                modal.classList.remove('show')
            }
        })
    }
}

button.addEventListener('click', () => {
    modalStart('modal')
})