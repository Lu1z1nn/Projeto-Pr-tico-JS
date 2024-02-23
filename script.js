const convertButton = document.querySelector(".convert-button")
const convertedSelect = document.querySelector(".second-select")
function convertValues () {
    const valueInput = document.querySelector("#first-input").value

    const currencyToConvert = document.querySelector(".currency-value-to-convert")

    const convertedCurrency = document.querySelector(".currency-value-converted")
    
    const valueDolarUS = 4.95
    const valueEuro = 5.36
    const valueDolarCA = 3.67
    const valueDolarAUS = 3.24
    const valueLibraEsterlina = 6.27
    const valueYen = 0.03
    const valueYuan = 0.69
    const valueFrancoSuico = 5.62



    if(convertedSelect.value == "euro") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"EUR"
        }).format(valueInput / valueEuro)
    }
    if(convertedSelect.value == "dolar-americano") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency:"USD"
        }).format(valueInput / valueDolarUS)
    }
    if(convertedSelect.value == "dolar-canadense") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency:"CAD"
        }).format(valueInput / valueDolarCA)
    }
    if(convertedSelect.value == "dolar-australiano") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency:"AUD"
        }).format(valueInput / valueDolarAUS)
    }
    if(convertedSelect.value == "libra-esterlina") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency:"GBP"
        }).format(valueInput / valueLibraEsterlina)
    }
    if(convertedSelect.value == "yen") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency:"JPY"
        }).format(valueInput / valueYen)
    }
    if(convertedSelect.value == "yuan-renmimbi") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency:"RMB"
        }).format(valueInput / valueYuan)
    }
    if(convertedSelect.value == "franco-suico") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency:"CHF"
        }).format(valueInput / valueFrancoSuico)
    }

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL"
    }).format(valueInput)
}

function changeCurrency(){
    const convertedCurrencyName = document.querySelector(".converted-currency")

    const currencyImg = document.querySelector(".currency-converted-img")

    if (convertedSelect.value == "dolar-americano") {
        convertedCurrencyName.innerHTML = "Dólar americano"
        // currencyImg.src = "./assets/dolar-americano.png"
    }

    if (convertedSelect.value == "euro") {
        convertedCurrencyName.innerHTML = "Euro"
        // currencyImg.src = "./assets/euro.png"
    }

    if (convertedSelect.value == "dolar-canadense") {
        convertedCurrencyName.innerHTML = "Dólar Canadense"
        // currencyImg.src = "./assets/canada.png"
    }

    if (convertedSelect.value == "dolar-australiano") {
        convertedCurrencyName.innerHTML = "Dólar Australiano"
        currencyImg.src = "./assets/australia.png"
    }

    if (convertedSelect.value == "libra-esterlina") {
        convertedCurrencyName.innerHTML = "Libra esterlina"
    }

    if (convertedSelect.value == "yen") {
        convertedCurrencyName.innerHTML = "Yen"
        currencyImg.src = "./assets/china.png"
    }

    if (convertedSelect.value == "yuan-renmimbi") {
        convertedCurrencyName.innerHTML = "Yuan Renmimbi"
    }

    if (convertedSelect.value == "franco-suico") {
        convertedCurrencyName.innerHTML = "Franco suiço"
    }

    convertValues ()

}
convertedSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)



