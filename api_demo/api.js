console.log('API Time!')

const getBeers = async (e) => {
    e.preventDefault();
    console.log('Form Submitted!')
    let number = e.target.number.value
    if (number=='')number = 1;
    
    console.log(number)
    const url = `https://random-data-api.com/api/v2/beers?size=${number}`
    // SYNTAX fetch(url, options)
    // fetch will return a promise
    // options are an optional dictionary
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    const container = document.getElementById('container')
    container.innerHTML = ''
    if (Array.isArray(data)){ // more than 1
        for (let beer of data){
            let card = `
        <div>
            <h3>${beer.name} by ${beer.brand}</h3>
            <h5>${beer.alcohol} alc</h5>
        </div>
        `
        container.innerHTML += card
        }
    }
    else {
        // display single beer
        let card = `
        <div>
            <h3>${data.name} by ${data.brand}</h3>
            <h5>${data.alcohol} alc</h5>
        </div>
        `
        container.innerHTML = card
    }


}

const form = document.querySelector('form')
form.addEventListener('submit', getBeers)