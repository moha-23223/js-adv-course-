export function render(data) {
    const container = document.createElement('div')
    container.classList.add('container', 'py-4')
    container.innerHTML = `
        <h1>Детальная информация о товаре ${data.title}</h1>
        <img src='${data.images[0]}' alt='${data.title}' style='max-width: 300px'>
        <p class='lead'>${data.description}</p>
        <p class='display-3'>${data.price}</p>
    `
    return container
}