let btn = document.getElementById('btn')
let div = document.getElementById('content')
let precoBuffet = document.getElementById('precob')
let clienteqtd = document.getElementById('clienteqtd')

function calcula() {
    let calc = ((precoBuffet.value) / 1000 * (clienteqtd.value))

    console.log(`${calc} Reais`)

    div.innerHTML = `O valor a ser pago é: ${calc} Reais`
}




btn.addEventListener('click', calcula)

