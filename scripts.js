const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertvalue() {
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
    const currencyvalueconverted = document.querySelector(".currency-value")

    console.log(currencyselect.value)
    const dolatoday = 5.20
    const eurotoday = 5.50
    const libratoday = 6.20
    const bitcointoday = 120000.00


    if (currencyselect.value === "Dola") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolatoday)

    }


    if (currencyselect.value === "Euro") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)
    }

    if (currencyselect.value === "Libra") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue / libratoday)

    }

    if (currencyselect.value === "Bitcoin") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputcurrencyvalue / bitcointoday)

    }


    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue)


}

function changecurrency() {
    const currencyname = document.getElementById("currecy-name")
    const currencyimg = document.querySelector(".currency-img")

    if (currencyselect.value === "Dola") {
        currencyname.innerHTML = "Dólar Americano"
        currencyimg.src = "./assets/dolar.png"


    }


    if (currencyselect.value === "Euro") {
        currencyname.innerHTML = "Euro"
        currencyimg.src = "./assets/euro.png"


    }

    if (currencyselect.value === "Libra") {
        currencyname.innerHTML = "Libra Esterlina"
        currencyimg.src = "./assets/libra.png"


    }

    if (currencyselect.value === "Bitcoin") {
        currencyname.innerHTML = "Bitcoin"
        currencyimg.src = "./assets/bitcoin.png"


    }



    convertvalue()
}

currencyselect.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convertvalue)