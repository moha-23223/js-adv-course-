window.addEventListener('input', event => {
    console.log(event.target.value)
}, { capture: true })