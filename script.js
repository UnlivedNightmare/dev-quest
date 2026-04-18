const cards = document.querySelectorAll(".clickable");

cards.forEach(card => {
  card.addEventListener("click", () => {

    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    const abilities = card.querySelector(".abilities");

    document.querySelectorAll(".abilities").forEach(list => {
      list.classList.remove("show");
    });

    if (abilities) {
      abilities.classList.toggle("show");
    }

  });
});
