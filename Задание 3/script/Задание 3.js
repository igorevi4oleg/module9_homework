
function useRequest (url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {

        if(xhr.status != 200) {
            console.log(`Статус ответа: `, xhr.status)
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    }

    xhr.onerror = function() {
        console.log(`Ошибка. Статус ответа: `,  xhr.status)
    };
    xhr.send();
};


const btnToGet = document.querySelector(".btm-sbm");

const showResultDiv = document.querySelector(".result-div");


 function displayResult (apiData) {

    let blocks = '';
    
    apiData.forEach(item => {

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

    showResultDiv.innerHTML = blocks;
 };


 btnToGet.addEventListener('click', () => {
    
    let index = document.querySelector('input').value;

    let errorMessege = `<div class = "errorMessegeDiv"<p> &nbsp &nbsp Значение ${index} недопустимо :( Число должно &nbsp&nbspбыть в диапозоне от 1 до 10 включительно</p></div>`;

    if(index < 1 || index > 10) {
        showResultDiv.innerHTML = errorMessege;
        return;
    } else 
    useRequest(`https://picsum.photos/v2/list?limit=${index}`, displayResult);
 })