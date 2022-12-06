const btn = document.querySelector(".btm-sbm");

const showResultDiv = document.querySelector(".result-div");


document.addEventListener('DOMContentLoaded', () => {

    let savedSession = localStorage.getItem('images');
    if (savedSession) {
        showResultDiv.innerHTML = savedSession;
    }
  });


function checkDateAndSendRequest () {

    const indexPage = document.querySelector(".first").value;
    const indexLimit = document.querySelector(".second").value;
    
    if ((indexLimit < 1 || indexLimit > 10 || isNaN(indexLimit)) && (indexPage < 1 || indexPage > 10 || isNaN(indexPage))){

        showResultDiv.innerHTML = `<div class = "errorMessegeDiv"<p>Номер страницы и лимит вне диапазона от 1 до 10</p></div>`
        return

    } 
    else if(indexLimit < 1 || indexLimit > 10 || isNaN(indexLimit)) {

        showResultDiv.innerHTML = `<div class = "errorMessegeDiv"<p>Лимит вне диапазона от 1 до 10</p></div>`
        return
    }

    else if (indexPage < 1 || indexPage > 10 || isNaN(indexPage)){

        showResultDiv.innerHTML = `<div class = "errorMessegeDiv"<p>Номер страницы вне диапазона от 1 до 10</p></div>`
        return

    } else { 

        const fetchRequest = fetch(`https://picsum.photos/v2/list?page=${indexPage}&limit=${indexLimit}`)
                            .then((response) => {return response.json()})
                            .then((result) => {return result})
                            .then((result) => {return fetchRequest.innerHTML = result})
                            .then((fetchRequest) => {

                                let blocks = '';

                                fetchRequest.forEach(item => {

                                    const EveryBlock = `
                                  <div class="card">
                                    <img
                                      src="${item.download_url}"
                                      class="block-image"
                                    />
                                    <p>${item.author}</p>
                                  </div>
                                `;
                            
                                    blocks = blocks + EveryBlock;
                                });
                                localStorage.setItem('images', blocks);
                                showResultDiv.innerHTML = blocks;
                            })
                            .catch(() => console.log("Ошибка"))

    }
}






btn.addEventListener("click", checkDateAndSendRequest)

