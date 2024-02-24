const convertButton = document.querySelector(".convert-button")
const firstSelect = document.querySelector(".first-select")
const convertedSelect = document.querySelector(".second-select")
function convertValues() {
    const valueInput = document.querySelector("#first-input").value

    const currencyToConvert = document.querySelector(".currency-value-to-convert")

    const convertedCurrency = document.querySelector(".currency-value-converted")

    // Real

    const valueDolarUS = 4.95
    const valueReal = 1
    const valueEuro = 5.36
    const valueDolarCA = 3.70
    const valueDolarAUS = 3.24
    const valueLibraEsterlina = 6.27
    const valueYen = 0.03
    const valueYuan = 0.70
    const valueFrancoSuico = 5.62

    // EURO

    const valueDolarUStoEU = 0.92
    const valueEu = 1
    const valueDolarCAtoEu = 0.68
    const valueDolarAUtoEu = 0.60
    const valueLibraEsterlinaToEu = 1.17
    const valueYuanToEu = 0.13
    const valueYenToEu = 0.0061
    const valueFrancoSuicoToEu = 1.05
    const valueRealToEu = 0.18

    // Dolar americano

    const valueDusToDus = 1
    const valueDeuToEu = 1.08
    const valueDeuToDca = 0.74
    const valueDeuToDau = 0.66
    const valueDeuToLE = 1.27
    const valueDeuToYen = 0.0066
    const valueDeuToYuan = 0.14
    const valueDeuToFranco = 1.14
    const valueDeuToReal = 0.20

    if (firstSelect.value == "dolar-americano" && convertedSelect.value == "dolar-americano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / valueDusToDus)
    }

    if (firstSelect.value == "dolar-americano" && convertedSelect.value == "euro") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput / valueDeuToEu)
    }

    if (firstSelect.value == "dolar-americano" && convertedSelect.value == "dolar-canadense") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput / valueDeuToDca)
    }

    if (firstSelect.value == "dolar-americano" && convertedSelect.value == "dolar-australiano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput / valueDeuToDau)
    }

    if (firstSelect.value == "dolar-americano" && convertedSelect.value == "libra-esterlina") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput / valueDeuToLE)
    }

    if (firstSelect.value == "dolar-americano" && convertedSelect.value == "yen") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput / valueDeuToYen)
    }

    if (firstSelect.value == "dolar-americano" && convertedSelect.value == "yuan-renmimbi") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput / valueDeuToYuan)
    }

    if (firstSelect.value == "dolar-americano" && convertedSelect.value == "franco-suico") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput / valueDeuToFranco)
    }

    if (firstSelect.value == "dolar-americano" && convertedSelect.value == "real") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput / valueDeuToReal)
    }

    
                                // EURO

    if (firstSelect.value == "euro" && convertedSelect.value == "euro") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput / valueEu)
    }

    if (firstSelect.value == "euro" && convertedSelect.value == "dolar-americano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput)


        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / valueDolarUStoEU)
    }

    if (firstSelect.value == "euro" && convertedSelect.value == "dolar-canadense") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput)


        convertedCurrency.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput / valueDolarCAtoEu)
    }

    if (firstSelect.value == "euro" && convertedSelect.value == "dolar-australiano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput / valueDolarAUtoEu)
    }

    if (firstSelect.value == "euro" && convertedSelect.value == "libra-esterlina") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput / valueLibraEsterlinaToEu)
    }

    if (firstSelect.value == "euro" && convertedSelect.value == "yen") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput)


        convertedCurrency.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput / valueYenToEu)
    }

    if (firstSelect.value == "euro" && convertedSelect.value == "yuan-renmimbi") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput)


        convertedCurrency.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput / valueYuanToEu)
    }

    if (firstSelect.value == "euro" && convertedSelect.value == "franco-suico") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput)


        convertedCurrency.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput / valueFrancoSuicoToEu)
    }

    if (firstSelect.value == "euro" && convertedSelect.value == "real") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput)


        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput / valueRealToEu)
    }

    // REAL

    if (firstSelect.value == "real" && convertedSelect.value == "real") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput / valueReal)

    }

    if (firstSelect.value == "real" && convertedSelect.value == "euro") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput / valueEuro)

    }

    if (firstSelect.value == "real" && convertedSelect.value == "dolar-americano") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / valueDolarUS)
    }

    if (firstSelect.value == "real" && convertedSelect.value == "dolar-canadense") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput / valueDolarCA)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput / valueDolarCA)
    }

    if (firstSelect.value == "real" && convertedSelect.value == "dolar-australiano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput / valueDolarAUS)
    }

    if (firstSelect.value == "real" && convertedSelect.value == "libra-esterlina") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput / valueLibraEsterlina)
    }
    if (firstSelect.value == "real" && convertedSelect.value == "yen") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput / valueYen)
    }
    if (firstSelect.value == "real" && convertedSelect.value == "yuan-renmimbi") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput / valueYuan)
    }
    if (firstSelect.value == "real" && convertedSelect.value == "franco-suico") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput / valueFrancoSuico)
    }

    // currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    //     style: "currency",
    //     currency:"BRL"
    // }).format(valueInput)

}

function changeCurrency() {
    const convertedCurrencyName = document.querySelector(".converted-currency")

    const currencyImg = document.querySelector(".currency-converted-img")

    if (convertedSelect.value == "real") {
        convertedCurrencyName.innerHTML = "Real"
        // currencyImg.src = "./assets/dolar-americano.png"
    }

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

    convertValues()

}

convertedSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)




