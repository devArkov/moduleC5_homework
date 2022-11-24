const btn = document.querySelector('.btn');
const output = document.querySelector('.outputBlock');

// Send request
const sendRequest = (url, cb) => {
    return fetch(url)
        .then((response) => {

            const result = response.json();
            console.log('response.json', result)
            return result;
        })
        .then((data) => {

            if (cb) {
                cb(data);
            }
        })
}

// Show images
const showImages = (data) => {

    let cards = '';
    data.forEach((item) => {
        const cardBlock =`
            <div class="card">
                <img class="card-image" src="${item.download_url}" alt="">
                <p class="author">${item.author}</p>
            </div>
        `;
        cards = cards + cardBlock;
    })

    output.innerHTML = cards;
}

btn.addEventListener('click', async () => {
    let pageInput = document.querySelector('.page').value;
    let limitInput = document.querySelector('.limit').value;

    if ((pageInput < 1 || pageInput > 10) && (limitInput < 1 || limitInput > 10)) {
        output.innerHTML = '<p class="danger">* Номер страницы и лимит вне диапазона от 1 до 10</p>';
    } else if ((limitInput < 1 || limitInput > 10)) {
        output.innerHTML = '<p class="danger">* Лимит вне диапазона от 1 до 10</p>';
    } else if ((pageInput < 1 || pageInput > 10)) {
        output.innerHTML = `<p class="danger">* Номер страницы вне диапазона от 1 до 10</p>`;
    } else {
        await sendRequest(`https://picsum.photos/v2/list?page=${pageInput}&limit=${limitInput}`, showImages);
    }
})