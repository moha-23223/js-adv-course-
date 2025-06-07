const cssPromises = {}

function loadResource(src) {
    if (src.endsWith('.js')) {
        return import(src)
    }

    if (src.endsWith('.css')) {
        if (!cssPromises[src]) {
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = src
            cssPromises[src] = new Promise(resolve => {
                link.addEventListener('load', () => resolve())
            })
            document.head.append(link)
        }
        return cssPromises[src]
    }

    return fetch(src).then(res => res.json())
}

const appContainer = document.getElementById('app')
const searchParams = new URLSearchParams(location.search)

const productId = searchParams.get('productId')

function renderPage(moduleName, apiUrl, css) {
    Promise.all([moduleName,apiUrl,css].map(src => loadResource(src)))
        .then(([pageModule, data]) => {
            appContainer.innerHTML = ''
            appContainer.append(pageModule.render(data))
        })
}

if (productId) {
    renderPage(
        './product-details.js',
        `https://api.escuelajs.co/api/v1/products/${productId}`,
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css'
    )
} else {
    renderPage(
        './product-list.js',
        'https://api.escuelajs.co/api/v1/products',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css'
    )
}