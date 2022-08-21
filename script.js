let div = document.querySelector('#pic');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn').addEventListener('click', function(){
    modalContainer.style.display = 'none';
})

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
})

// Event Listener

// div.addEventListener('click', function(){
    
//     modalContainer.style.display = 'block';
//     modalContainer.style.backgroundImage = div.style.backgroundImage;
// })

function modalActive(element) {
    let modalContainer = document.getElementById('modal-container');
    let modal = document.getElementById('Image');
    
    modalContainer.style.display = 'flex';
    modal.style.backgroundImage = document.getElementById(element).style.backgroundImage
}