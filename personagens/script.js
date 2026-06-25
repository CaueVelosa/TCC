const heroList = document.getElementById("hero-list");
const details = document.getElementById("details");

const firstTenHeroes = heroes.slice(0, 10);

firstTenHeroes.forEach(function(hero) {
    const li = document.createElement("li");
    li.textContent = hero.name;

    li.addEventListener("click", function() {
    details.innerHTML = `
        <img src="${hero.image_url}" alt="${hero.name}">
        <h2>${hero.name}</h2>
        <p><strong>Nome:</strong> ${hero.name || "Não informado"}</p>
        <p><strong>Nome real:</strong> ${hero.real_name || "Não informado"}</p>
        <p><strong>Descrição:</strong> ${hero.description || "Não informado"}</p>
    `;
    });

    heroList.appendChild(li);
});