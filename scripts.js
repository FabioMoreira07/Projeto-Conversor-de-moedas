const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")
const currencyselect1 = document.querySelector(".currency-select1")

function convertvalue() {
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
    const currencyvalueconverted = document.querySelector(".currency-value")

    console.log(currencyselect1.value)
    console.log(currencyselect.value)

    const realtoday = 1
    const dolatoday = 5.20
    const eurotoday = 5.50
    const libratoday = 6.20
    const bitcointoday = 321613.03



    if (currencyselect1.value === "Real") {
        currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputcurrencyvalue / realtoday)

    }


    if (currencyselect1.value === "Dola") {
        currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolatoday)

    }


    if (currencyselect1.value === "Euro") {
        currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)

    }

    if (currencyselect1.value === "Libra") {
        currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue / libratoday)

    }


    if (currencyselect1.value === "Bitcoin") {
        currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputcurrencyvalue / bitcointoday)

    }




    if (currencyselect.value === "Real") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputcurrencyvalue / realtoday)

    }

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
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputcurrencyvalue / bitcointoday)

    }


    if (currencyselect1.value === "Real") {
        currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputcurrencyvalue / realtoday)

    }

    if (currencyselect1.value === "Dola") {
        currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolatoday)

    }


    if (currencyselect1.value === "Euro") {
        currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)

    }

    if (currencyselect1.value === "Libra") {
        currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue / libratoday)

    }


    if (currencyselect1.value === "Bitcoin") {
        currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputcurrencyvalue / bitcointoday)

    }


}


function changecurrency1() {
    const currencyname1 = document.querySelector(".currency-name1")
    const currencyimg1 = document.querySelector(".currency-img1")

if (currencyselect1.value === "Real") {
        currencyname1.innerHTML = "Real Brasileiro"
        currencyimg1.src = "./assets/real.png"

}

if (currencyselect1.value === "Dola") {
        currencyname1.innerHTML = "Dólar Americano"
        currencyimg1.src = "./assets/dolar.png"

}
 

if (currencyselect1.value === "Euro") {
        currencyname1.innerHTML = "Euro"
        currencyimg1.src = "./assets/euro.png"

}

if (currencyselect1.value === "Libra") {
        currencyname1.innerHTML = "Libra Esterlina"
        currencyimg1.src = "./assets/libra.png"

}


if (currencyselect1.value === "Bitcoin") {
        currencyname1.innerHTML = "Bitcoin"
        currencyimg1.src = "./assets/bitcoin.png"


}


}



function changecurrency() {
    const currencyname = document.getElementById("currecy-name")
    const currencyimg = document.querySelector(".currency-img")


if (currencyselect1.value === "Real") {
        currencyname.innerHTML = "Real Brasileiro"
        currencyimg.src = "./assets/real.png"
    
    
    }



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

    if (currencyselect.value === "Real") {
        currencyname.innerHTML = "Real Brasileiro"
        currencyimg.src = "./assets/real.png"

    }



    convertvalue()
}

currencyselect1.addEventListener("change", changecurrency1)
currencyselect.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convertvalue)
