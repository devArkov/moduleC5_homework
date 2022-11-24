const getResopnse = (url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = () => {
          if (xhr.status === 200) {
                const result = JSON.parse(xhr.response);
                if (cb) {
                      cb(result);
                }
          } else {
                console.log('Статус ответа:', xhr.status);
          }
    };

    xhr.onerror = () => {
          console.log('Ошибка! Статус ответа:', xhr.status);
    };

    xhr.send();
}

const output = document.querySelector('.outputBlock');
const btn = document.querySelector('.btn');

const showImages = (data) => {
    let images = '';

    data.forEach( item => {
          const cardBlock =`
          <div class="card">
              <img class="card-image" src="${item.download_url}" alt="">
              <p>${item.author}</p>
          </div>
      `;
          images = images + cardBlock;
    });

    output.innerHTML = images;
}

btn.addEventListener('click', () => {
    let inputValue = document.querySelector('.input').value;
    if (inputValue > 10) {
          document.querySelector('.outputBlock').innerHTML = 'Число вне диапазона от 1 до 10!';
    } else {
          getResopnse(`https://picsum.photos/v2/list/?limit=${inputValue}`, showImages);
    }
});