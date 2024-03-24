function domyslneZdjecie(audioId) {
    var przycisk = document.getElementById('przycisk' + audioId.split('cytat')[1]);
    przycisk.src = "../resources/start_icon.png";
}

function odtwarzaj(audioId) {
    var cytat = document.getElementById(audioId);
    var przycisk = document.getElementById('przycisk' + audioId.split('cytat')[1]);

    if (cytat.paused || cytat.ended) {
        cytat.play();
        przycisk.src = "../resources/stop_icon.png";
    } else {
        cytat.pause();
        cytat.currentTime = 0;
        przycisk.src = "../resources/start_icon.png";
    }

    cytat.addEventListener("ended", function() {
        domyslneZdjecie(audioId);
    });    
}

function kontakt(){
    var nazwa = document.getElementById("nazwa").value;
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var email = document.getElementById("email").value;
    var opis = document.getElementById("opis").value;
    
    if ((nazwa == "") || (imie == "" || !isNaN(imie)) || (nazwisko == "" || !isNaN(nazwisko)) || email == "" || opis == ""){
        alert("Uzupełnij wszystkie pola.");
        return false;
    }
    
    alert("Dziękujemy za kontakt.\nWiadomość została wysłana do administratora.");
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    const przyciskiMlotka = document.querySelectorAll('.przyciskMlotek');

    przyciskiMlotka.forEach(przycisk => {
        przycisk.addEventListener('click', () => {
            edytujPost(przycisk);
        });
    });

    const edytujPost = (przycisk) => {
        const post = przycisk.closest('.post');
        const zawartoscPostu = post.querySelector('.zawartoscPostu');
        const tekstPostu = zawartoscPostu.textContent;
        const tytulElement = post.querySelector('.tytulPostu');
        const tytul = tytulElement.textContent;

        if (!zawartoscPostu.querySelector('input')) {
            const inputPostu = document.createElement('input');
            inputPostu.value = tekstPostu;
            inputPostu.classList.add('daneWprowadzaneEdycja');
            inputPostu.setAttribute('id', 'post-edycja');
            zawartoscPostu.innerHTML = '';
            zawartoscPostu.appendChild(inputPostu);
            inputPostu.focus();

            inputPostu.addEventListener('keypress', event => {
                if (event.key === 'Enter') {
                    const nowyTekst = inputPostu.value;
                    zawartoscPostu.innerHTML = nowyTekst;
                }
            });
        }

        if (!tytulElement.querySelector('input')) {
            const inputTytulu = document.createElement('input');
            inputTytulu.value = tytul;
            inputTytulu.classList.add('daneWprowadzaneEdycja');
            tytulElement.innerHTML = '';
            tytulElement.appendChild(inputTytulu);
            inputTytulu.focus();

            inputTytulu.addEventListener('keypress', event => {
                if (event.key === 'Enter') {
                    const nowyTytul = inputTytulu.value;
                    tytulElement.innerHTML = nowyTytul;
                }
            });
        }
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const przyciskX = document.querySelectorAll('.przyciskX');

    przyciskX.forEach(przycisk => {
        przycisk.addEventListener('click', () => {
            const potwierdzenie = window.confirm("Czy na pewno chcesz usunąć ten post?");
            if (potwierdzenie){
                usunPost(przycisk);
            }
        });
    });

    const usunPost = (przycisk) => {
        const post = przycisk.closest('.post');
        post.remove();
    };
    
});

document.addEventListener('DOMContentLoaded', () => {
    const przyciskWykrzyknik = document.querySelectorAll('.przyciskWykrzyknik');

    przyciskWykrzyknik.forEach(przycisk => {
        przycisk.addEventListener('click', () => {
            const potwierdzenie = window.confirm("Czy na pewno chcesz zgłosić ten post?");
        });
    });
});
