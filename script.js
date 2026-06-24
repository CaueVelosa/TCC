const imagens = ["images/banners/banner spider.png","images/banners/banner doomsday.webp","images/banners/banner novo capitao.webp","images/banners/quarteto banner.webp","images/banners/banner thunderbolts.webp","images/banners/banner deadpool.webp"]

const nomes = ["images/nomes/nome spider.webp","images/nomes/nome doomsday.webp","images/nomes/nome novo capitao.webp","images/nomes/quarteto nome.webp","images/nomes/nome thunderbolts.webp","images/nomes/nome deadpool.webp"]

const banner = document.getElementById('banner')
const nome = document.getElementById('nome')
const botoes = document.querySelectorAll('.filme')

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        banner.setAttribute('src', imagens[index])
        nome.setAttribute('src', nomes[index])
    })
})