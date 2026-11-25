const banners = ['images/capas_jogos/Marvels_Wolverine_cover_art.jpg','images/capas_jogos/spider-man2.jpg','images/capas_jogos/marvel_rival.jpg','images/capas_jogos/guardioes_da_galaxia.jpg','images/capas_jogos/marvel_midnightsuns.jpg','images/capas_jogos/Marvel_Snap.jpg']

const capas = ['images/capas_jogos/Marvels_Wolverine_cover_art.jpg','images/capas_jogos/spider-man2.jpg','images/capas_jogos/marvel_rival.jpg','images/capas_jogos/guardioes_da_galaxia.jpg','images/capas_jogos/marvel_midnightsuns.jpg','images/capas_jogos/Marvel_Snap.jpg'  ]

const nomes = ["Marvel's Wolverine","Marvel's Spider-Man 2","Marvel Rivals","Guardiões da Galáxia","Midnight Suns","Marvel Snap"]

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