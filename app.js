const menuBtn = document.querySelector(".mobile i")
const dropDown = document.querySelector(".items")
console.log(menuBtn)
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    dropDown.classList.toggle("activeMenu")
})
window.addEventListener("click", () => {
    if (dropDown.classList.contains("activeMenu")) {
        dropDown.classList.remove("activeMenu")

    }
})
