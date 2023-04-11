const openReadButton = document.querySelector("[data-modal-target]");
const closeButton = document.querySelector("[data-close-button]");
const overlay = document.getElementById('overlay')


openReadButton.addEventListener('click', ()=>{
    const story = document.querySelector(openReadButton.dataset.modalTarget)
    openStory(story)
})

closeButton.addEventListener("click", () => {
  const story = closeButton.closest('.modal')
//   button's closest parent with the class 'modal'
  closeStory(story);
});

overlay.addEventListener('click', ()=> {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal=>{
        closeStory(modal)
    })
})

function openStory(story){
    if(story ===null) return
    story.classList.add('active')
    overlay.classList.add('active')
}

function closeStory(story) {
  if (story === null) return;
  story.classList.remove("active");
  overlay.classList.remove("active");
}