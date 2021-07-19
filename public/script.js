console.log('Script.js loaded');

document.querySelector('#buttonLoad').addEventListener('click', () => {
    if(document.querySelector('#covidDate'))
        document.querySelector('#covidDate').remove();

    if (document.getElementById('cImage'))
        document.getElementById('cImage').remove();
    
    getCovidCountries();
    getCovidImage();
});

async function getCovidCountries() {
    const response = await fetch('/covidcountries');
    const data = await response.json();
    let covidObj = data[0];

    if(covidObj) {
        var covidDate = document.createElement('div');
        covidDate.id ='covidDate';
        document.querySelector('#covidWrapper').appendChild(covidDate);
    }

    for (let key in covidObj) {
        if (document.querySelector(`#${key}`))
            document.querySelector(`#${key}`).remove();

        var li = document.createElement('li');
        li.innerText = `${key} : ${covidObj[key]} people`;
        li.id = `${key}`;
        document.querySelector('#covidWrapper').appendChild(li);
    }
    console.log(covidObj.date);
    document.querySelector('#covidDate').textContent = covidObj.date;
};

async function getCovidImage() {
    const response = await fetch('/covidimage');
    const data = await response.json();
    const items = data.value;
    let index = Math.floor(Math.random() * items.length);
    let covidImage = items[index].thumbnailUrl;
    console.log(covidImage, items.length);

    var img = document.createElement('img');
    img.src = covidImage;
    img.alt = items[index].name;
    img.id = 'cImage';
    document.querySelector('#covidWrapper').appendChild(img);

};