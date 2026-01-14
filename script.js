function hamburg() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel() {
    const navbar = document.querySelector(".cancel")
    navbar.style.transform = "translateY(-500px)"
}

const texts = [
    "GENIUS.",
    "BILLIONAIRE.",
    "PLAYBOY.",
    "PHILANTHROPIST.",
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter () {
    if (charcterIndex < texts[textIndex].length)
    {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else
    {
        setTimeout(eraseText, 1000)
    }
}

function eraseText () {
    if (textElements.innerHTML.length > 0)
    {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50)
    }
    else
    {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

const form = document.querySelector('.contact-form');
const successMsg = document.querySelector('.form-status.success');
const errorMsg = document.querySelector('.form-status.error');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    const formData = new FormData(form);

    try {
        const res = await fetch('https://formsubmit.co/ajax/kuzhabaev1@gmail.com',
            {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData
            }
        );

        if (res.ok) {
            form.reset();
            successMsg.style.display = 'block';
        } else {
            errorMsg.style.display = 'block';
        }
    } catch {
        errorMsg.style.display = 'block';
    }
});