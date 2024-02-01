const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

const currencySelectConvert = document.querySelector(".currency-select-convert")

function convertValues(){
    const inputCurrencyValue =  document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currecy-value-to-convert")

    const currencyValueConverted = document.querySelector(".currecy-value")


    const dolarToday = 4.9
    const euroToday = 5.3
    const libraToday = 6.2
    const bitcoinTotay = 210.94
    // const realTotay = 0.2

   

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {style: "currency", currency: "EUR"}).format(inputCurrencyValue / euroToday)
    }
    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "GBP"}).format(inputCurrencyValue / libraToday)
    }
    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "BTC"}).format(inputCurrencyValue / bitcoinTotay)
    }
    
   
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRl"}).format(inputCurrencyValue)


}




function changeCurrencyConvert(){
    const currencyNameConverted = document.getElementById("currency-name-converted")
    const currencyImageConverted = document.querySelector(".currency-img-converted")

    if(currencySelectConvert.value == "real1"){
        currencyNameConverted.innerHTML = "Real"
        currencyImageConverted.src = "./assets/icon-real.png"
    }
    if(currencySelectConvert.value == "dolar1"){
    currencyNameConverted.innerHTML = "Dólar Americano"
    currencyImageConverted.src = "./assets/icon-dolar.png"
    }
    if(currencySelectConvert.value == "euro1"){
        currencyNameConverted.innerHTML = "Euro"
        currencyImageConverted.src = "./assets/icon-euro.png"
    }
    if(currencySelectConvert.value == "libra1"){
        currencyNameConverted.innerHTML = "Libra"
        currencyImageConverted.src = "./assets/icon-libra.png"
    }    
    if(currencySelectConvert.value == "bitcoin1"){
        currencyNameConverted.innerHTML = "Bitcoin"
        currencyImageConverted.src = "./assets/icon-bitcoin.png"
    }

    
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/icon-real.png"
    }
    if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/icon-dolar.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/icon-euro.png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/icon-libra.png"
    }    
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/icon-bitcoin.png"
    }

    
    convertValues()
}

currencySelectConvert.addEventListener("change", changeCurrencyConvert)

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)