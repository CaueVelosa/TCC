const banners = ['images/jogos/banners/wolverine.jpg','images/jogos/banners/spider-man-2.jpg','images/jogos/banners/marvel-rivals.jpg','images/jogos/banners/guardioes-da-galaxia.jpg','images/jogos/banners/midnight-suns.jpg','images/jogos/banners/marvel-snap.jpg']

const capas = ['images/jogos/capas/wolverine.jpg','images/jogos/capas/spider-man-2.jpg','images/jogos/capas/marvel-rivals.jpg','images/jogos/capas/guardioes-da-galaxia.jpg','images/jogos/capas/midnight-suns.jpg','images/jogos/capas/marvel-snap.jpg']

const nomes = ["Marvel's Wolverine","Marvel's Spider-Man 2","Marvel Rivals","Guardiões da Galáxia","Midnight Suns","Marvel Snap"]

const plataformas = ['PLAYSTATION 5','PLAYSTATION 5 / PC','PLAYSTATION / XBOX / PC','PLAYSTATION / XBOX / PC','PLAYSTATION / XBOX / PC','CELULAR / PC']

const desc = ["Aventura de ação solo com o mutante mais famoso dos X-Men, com combate brutal e garras de adamantium.","Peter Parker e Miles Morales juntos pelas ruas de Nova York, enfrentando Venom, Kraven e outras ameaças.","Jogo de tiro em equipes de super-heróis e vilões, com batalhas 6 contra 6 e de graça para jogar.","Aventura com muita história e humor, em que você lidera os Guardiões da Galáxia como o Senhor das Estrelas.","RPG tático de cartas em que os Vingadores se unem a heróis sobrenaturais para enfrentar Lilith.","Jogo de cartas rápido e gratuito, com partidas de poucos minutos usando seus heróis e vilões favoritos."]

const banner = document.getElementById('banner')
const capa = document.getElementById('capa')
const title = document.getElementById('title')
const subtitle = document.getElementById('subtitle')
const plataforma = document.getElementById('plataforma')
const botoes = document.querySelectorAll('.jogo')

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        banner.setAttribute('src', banners[index])
        capa.setAttribute('src', capas[index])
        title.innerText = nomes[index]
        subtitle.innerText = desc[index]
        plataforma.innerText = plataformas[index]
    })
})