const imagens = ['images/capas quadrinhos/capa quadrinhobanner.png','images/capas quadrinhos/thor wat if_capa.webp','images/capas quadrinhos/capitao america.webp','images/capas quadrinhos/miranha.webp']
const nomes = ['nome1','nome2']
const capas = ['images/capas quadrinhos/capa quadrinhobanner.png','images/capas quadrinhos/thor wat if_capa.webp','images/capas quadrinhos/capitao america.webp','images/capas quadrinhos/miranha.webp']
const nome = document.getElementById('nome')
const banner = document.getElementById('banner')
const capa = document.getElementById('capa')
const botoes = document.querySelectorAll('.quadrinho')
const title = document.getElementById('title')

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        banner.setAttribute('src', imagens[index])
        nome.setAttribute('src', nomes[index])
        capa.setAttribute('src', imagens[index])
        title.innerText = nomes[index]
    })
})