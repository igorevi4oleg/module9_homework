const btn = document.querySelector(".btm-sbm")

const showResultDiv = document.querySelector(".result-div");



btn.addEventListener('click', () => {
    
    let indexWight = document.querySelector(".first").value;
    let indexLenght = document.querySelector(".second").value;

    let errorMessege = `<div class = "errorMessegeDiv"<p>Одно из чисел вне диапазона от 100 до 300</p></div>`;

    if (indexWight < 100 || indexWight > 300 ||  indexLenght < 100 || indexLenght > 300) {
       
        showResultDiv.innerHTML = errorMessege;
        return;

    } else { 
        fetch(`https://picsum.photos/${indexWight}/${indexLenght}`)
        .then(response => showResultDiv.innerHTML = `<div class="result-div"><img src="${response.url}"/></div>`)
        .catch(() => console.log('error'));
    }

    });
        