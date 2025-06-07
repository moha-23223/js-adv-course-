document.addEventListener('DOMContentLoaded', event => {
    const input = document.getElementById('kb-input')
    const expectedString = 'qwerty'

    input.addEventListener('keypress', event => {
        const newValue = event.target.value + event.key
        if (newValue === expectedString) {
            alert('Вы закончили упражнение')
        } else if (!expectedString.startsWith(newValue)) {
            event.preventDefault()
        }
    })
})