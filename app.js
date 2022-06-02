// IIFE arrow function implementation

(() => {
  const dropIcon = document.querySelector(".drop-down-icon");
  const dropMenu = document.querySelector(".drop-down-menu");
  const dropItem = document.querySelectorAll(".drop-item");
  const colorsList = document.querySelector(".colors-list");
  const techList = document.querySelector(".tech-list");
  const creditsList = document.querySelector(".credits-list");

  dropIcon.addEventListener("click", () => {
    if (!dropIcon.classList.contains("visible")) {
      dropIcon.classList.add("visible");
      dropMenu.style.display = "flex";
    } else if (dropIcon.classList.contains("visible")) {
      dropIcon.classList.remove("visible");
      dropMenu.style.display = "none";
    }
  });

  dropItem.forEach((item) => {
    item.addEventListener("mouseover", () => {
      if (item.classList.contains("home")) {
      } else if (item.classList.contains("colors")) {
        colorsList.style.display = "flex";
      } else if (item.classList.contains("tech")) {
        techList.style.display = "flex";
      } else if (item.classList.contains("credits")) {
        creditsList.style.display = "flex";
      }
    });

    item.addEventListener("mouseout", () => {
      colorsList.style.display = "none";
      techList.style.display = "none";
      creditsList.style.display = "none";
    });
  });
})();
