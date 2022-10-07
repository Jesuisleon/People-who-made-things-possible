// Fonction pour le Toggle Button
function toggleButton(value) {
    let label = document.querySelector('label[for="'+value.name+'"]')
    if (value.checked) {
        label.innerText = "LIRE MOINS";
    } else {
        label.innerText = "EN SAVOIR PLUS";
    }
}

const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');

function toggleMenu(){  
    burger.addEventListener('click' ,()=>{
        navbar.classList.toggle('showmenu');
        // navbar.style.backgroundColor = 'transparent';
    })
    
}
toggleMenu();


function toggleLink() {
    navbar.classList.remove('showmenu');
        }
