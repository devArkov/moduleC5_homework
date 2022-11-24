const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
    let widthValue = document.querySelector('.inputWidth').value,
        heightValue = document.querySelector('.inputHeight').value;
    const output = document.querySelector('.outputBlock');
    if ( (widthValue >= 100 && widthValue <= 300) && (heightValue >= 100 && heightValue <= 300)) {
        const useRequest = () => {
            return fetch(`https://picsum.photos/${widthValue}/${heightValue}`)
            .then((response) => {
                console.log('Response:', response.json());
                return `https://picsum.photos/${widthValue}/${heightValue}`;
            })
                .then((json) => {
                    console.log('json', json);
                    return json;
                })
                .catch(() => {
                    console.log('Ошибка. Данные не получены.');
                })
        }

        const result = await useRequest();
        output.innerHTML = `<img src="${result.download_url}">`;
        output.innerHTML = `"${result}"`;

    } else {
        output.innerHTML = '<p class="danger">* Одно из чисел вне диапазона от 100 до 300!</p>';
    }
});