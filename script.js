const imagens = ['images/banner capitao america.png','images/banner quadrinhoss.png']
const nomes = ['images/nomes/nome capita america.webp']
const banner = document.getElementById('banner')
const nome = document.getElementById('nome')
const botoes = document.querySelectorAll('.filme')

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        banner.setAttribute('src', imagens[index])
        nome.setAttribute('src', nomes[index])
    })
})