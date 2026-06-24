const imagens = ['images/capas quadrinhos/capa quadrinhobanner.png','images/capas quadrinhos/thor wat if_capa.webp','images/capas quadrinhos/capitao america.webp','images/capas quadrinhos/miranha.webp','images/capas quadrinhos/wolverine.webp','images/capas quadrinhos/portrait_uncanny.webp']

const nomes = ['generation x-23','thor: what if','capitão america','o espetacular homem aranha','wolverine','thanos the infinity end']

const capas = ['images/capas quadrinhos/capa quadrinhobanner.png','images/capas quadrinhos/thor wat if_capa.webp','images/capas quadrinhos/capitao america.webp','images/capas quadrinhos/miranha.webp']

const desc = ["REVENGE OF X-23! The FACILITY feels the full rage of LAURA KINNEY as she and the X-numbers take the fight to their captors!","WHAT IF…THOR GOT SPIDER-MANS SYMBIOTE SUIT?","Captain America meets a new crimefighting partner as the Falcon makes his daring debut!","THE TALK... Peter Parker's world will never be the same. Don't miss one of the most pivotal issues in Spider-Man history!","SNAPT! WOLVERINE has been beaten down to the bone - literally! His adamantium claws SHATTERED","The cosmic conclusion to Jim Starlin and Alan Davis’ epic trilogy! All hail Thanos, lord of all that is — including himself!"]

const nome = document.getElementById('nome')
const banner = document.getElementById('banner')
const capa = document.getElementById('capa')
const botoes = document.querySelectorAll('.quadrinho')
const title = document.getElementById('title')
const subtitle = document.getElementById('subtitle')

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        banner.setAttribute('src', imagens[index])
        nome.setAttribute('src', nomes[index])
        capa.setAttribute('src', imagens[index])
        title.innerText = nomes[index]
        subtitle.innerText = desc[index]
    })
})