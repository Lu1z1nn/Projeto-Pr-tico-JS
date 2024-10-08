const convertButton = document.querySelector(".convert-button")
const firstSelect = document.querySelector(".first-select")
const convertedSelect = document.querySelector(".second-select")
const convertMain = document.querySelector(".menu")

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
    const valueLibraEsterlina = 6.33
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

    // Dolar canadense

    const valueDcaToDus = 1.35
    const valueDcaToEu = 1.47
    const valueDcaToDca = 1
    const valueDcaToDau = 0.88
    const valueDcaToLE = 1.71
    const valueDcaToYen = 0.0090
    const valueDcaToYuan = 0.19
    const valueDcaToFranco = 1.54
    const valueDcaToReal = 0.27
    
    // Dolar australiano
    
    const valueDauToDus = 1.53
    const valueDauToEu = 1.66
    const valueDauToDca = 1.13
    const valueDauToDau = 1
    const valueDauToLE = 1.94
    const valueDauToYen = 0.010
    const valueDauToYuan = 0.21
    const valueDauToFranco = 1.74
    const valueDauToReal = 0.31
    
    // Libra esterlina
    
    const valueLeToDus = 0.79
    const valueLeToEu = 0.86
    const valueLeToDca = 0.58
    const valueLeToDau = 0.52
    const valueLeToLE = 1
    const valueLeToYen = 0.0052
    const valueLeToYuan = 0.11
    const valueLeToFranco = 0.90
    const valueLeToReal = 0.16
    
    // Yen

    const valueYeToDus = 150.80
    const valueYeToEu = 163.66
    const valueYeToDca = 111.58
    const valueYeToDau = 98.57
    const valueYeToLE = 191.18
    const valueYeToYen = 1
    const valueYeToYuan = 20.95
    const valueYeToFranco = 171.26
    const valueYeToReal = 30.23
    
    // Yuan renmimbi

    const valueYuToDus = 7.20
    const valueYuToEu = 7.72
    const valueYuToDca = 5.33
    const valueYuToDau = 4.70
    const valueYuToLE = 9.02
    const valueYuToYen = 0.048
    const valueYuToYuan = 1
    const valueYuToFranco = 8.18
    const valueYuToReal = 1.44
    
    // Franco suico

    const valueFrToDus = 0.88
    const valueFrToEu = 0.96
    const valueFrToDca = 0.65
    const valueFrToDau = 0.58
    const valueFrToLE = 1.12
    const valueFrToYen = 0.0058
    const valueFrToYuan = 1
    const valueFrToFranco = 1
    const valueFrToReal = 0.18
    
    // Franco suico

    if (firstSelect.value == "franco-suico" && convertedSelect.value == "dolar-americano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / valueFrToDus)
    }
    if (firstSelect.value == "franco-suico" && convertedSelect.value == "euro") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput / valueFrToEu)
    }
    if (firstSelect.value == "franco-suico" && convertedSelect.value == "dolar-canadense") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput / valueFrToDca)
    }
    if (firstSelect.value == "franco-suico" && convertedSelect.value == "dolar-australiano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput / valueFrToDau)
    }
    if (firstSelect.value == "franco-suico" && convertedSelect.value == "libra-esterlina") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput / valueFrToLE)
    }
    if (firstSelect.value == "franco-suico" && convertedSelect.value == "yen") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput / valueFrToYen)
    }
    if (firstSelect.value == "franco-suico" && convertedSelect.value == "yuan-renmimbi") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput / valueFrToYuan)
    }
    if (firstSelect.value == "franco-suico" && convertedSelect.value == "franco-suico") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput / valueFrToFranco)
    }
    if (firstSelect.value == "franco-suico" && convertedSelect.value == "real") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput / valueFrToReal)
    }

    // Yuan renmimbi
    
    if (firstSelect.value == "yuan-renmimbi" && convertedSelect.value == "dolar-americano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / valueYuToDus)
    }
    if (firstSelect.value == "yuan-renmimbi" && convertedSelect.value == "euro") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput / valueYuToEu)
    }
    if (firstSelect.value == "yuan-renmimbi" && convertedSelect.value == "dolar-candense") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput / valueYuToDca)
    }
    if (firstSelect.value == "yuan-renmimbi" && convertedSelect.value == "dolar-australiano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput / valueYuToDau)
    }
    if (firstSelect.value == "yuan-renmimbi" && convertedSelect.value == "libra-esterlina") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput / valueYuToLE)
    }
    if (firstSelect.value == "yuan-renmimbi" && convertedSelect.value == "yen") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput / valueYuToYen)
    }
    if (firstSelect.value == "yuan-renmimbi" && convertedSelect.value == "yuan-renmimbi") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput / valueYuToYuan)
    }
    if (firstSelect.value == "yuan-renmimbi" && convertedSelect.value == "franco-suico") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput / valueYuToFranco)
    }
    if (firstSelect.value == "yuan-renmimbi" && convertedSelect.value == "real") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput / valueYuToReal)
    }

    // Yen
    
    if (firstSelect.value == "yen" && convertedSelect.value == "dolar-americano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / valueYeToDus)
    }
    if (firstSelect.value == "yen" && convertedSelect.value == "euro") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput / valueYeToEu)
    }
    if (firstSelect.value == "yen" && convertedSelect.value == "dolar-canadense") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput / valueYeToDca)
    }
    if (firstSelect.value == "yen" && convertedSelect.value == "dolar-australiano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput / valueYeToDau)
    }
    if (firstSelect.value == "yen" && convertedSelect.value == "libra-esterlina") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput / valueYeToLE)
    }
    if (firstSelect.value == "yen" && convertedSelect.value == "yen") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput / valueYeToYen)
    }
    if (firstSelect.value == "yen" && convertedSelect.value == "yuan-renmimbi") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput / valueYeToYuan)
    }
    if (firstSelect.value == "yen" && convertedSelect.value == "franco-suico") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput / valueYeToFranco)
    }
    if (firstSelect.value == "yen" && convertedSelect.value == "real") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput / valueYeToReal)
    }

    // Libra esterlina

    if (firstSelect.value == "libra-esterlina" && convertedSelect.value == "dolar-americano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / valueLeToDus)
    }
    if (firstSelect.value == "libra-esterlina" && convertedSelect.value == "euro") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput / valueLeToEu)
    }
    if (firstSelect.value == "libra-esterlina" && convertedSelect.value == "dolar-canadense") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput / valueLeToDca)
    }
    if (firstSelect.value == "libra-esterlina" && convertedSelect.value == "dolar-australiano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput / valueLeToDau)
    }
    if (firstSelect.value == "libra-esterlina" && convertedSelect.value == "libra-esterlina") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput / valueLeToLE)
    }
    if (firstSelect.value == "libra-esterlina" && convertedSelect.value == "yen") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput / valueLeToYen)
    }
    if (firstSelect.value == "libra-esterlina" && convertedSelect.value == "yuan-renmimbi") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput / valueLeToYuan)
    }
    if (firstSelect.value == "libra-esterlina" && convertedSelect.value == "franco-suico") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput / valueLeToFranco)
    }
    if (firstSelect.value == "libra-esterlina" && convertedSelect.value == "real") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput / valueLeToReal)
    }

    // Dolar australiano
    
    if (firstSelect.value == "dolar-australiano" && convertedSelect.value == "dolar-americano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / valueDauToDus)
    }
    if (firstSelect.value == "dolar-australiano" && convertedSelect.value == "euro") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput / valueDauToEu)
    }
    if (firstSelect.value == "dolar-australiano" && convertedSelect.value == "dolar-canadense") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput / valueDauToDca)
    }
    if (firstSelect.value == "dolar-australiano" && convertedSelect.value == "dolar-australiano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput / valueDauToDau)
    }
    if (firstSelect.value == "dolar-australiano" && convertedSelect.value == "libra-esterlina") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput / valueDauToLE)
    }
    if (firstSelect.value == "dolar-australiano" && convertedSelect.value == "yen") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput / valueDauToYen)
    }
    if (firstSelect.value == "dolar-australiano" && convertedSelect.value == "yuan-renmimbi") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput / valueDauToYuan)
    }
    if (firstSelect.value == "dolar-australiano" && convertedSelect.value == "franco-suico") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput / valueDauToFranco)
    }
    if (firstSelect.value == "dolar-australiano" && convertedSelect.value == "real") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput / valueDauToReal)
    }

    // Dolar canadense
    
    if (firstSelect.value == "dolar-canadense" && convertedSelect.value == "dolar-americano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / valueDcaToDus)
    }

    if (firstSelect.value == "dolar-canadense" && convertedSelect.value == "euro") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput / valueDcaToEu)
    }

    if (firstSelect.value == "dolar-canadense" && convertedSelect.value == "dolar-canadense") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput / valueDcaToDca)
    }

    if (firstSelect.value == "dolar-canadense" && convertedSelect.value == "dolar-australiano") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(valueInput / valueDcaToDau)
    }

    if (firstSelect.value == "dolar-canadense" && convertedSelect.value == "libra-esterlina") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput / valueDcaToLE)
    }

    if (firstSelect.value == "dolar-canadense" && convertedSelect.value == "yen") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(valueInput / valueDcaToYen)
    }

    if (firstSelect.value == "dolar-canadense" && convertedSelect.value == "yuan-renmimbi") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(valueInput / valueDcaToYuan)
    }

    if (firstSelect.value == "dolar-canadense" && convertedSelect.value == "franco-suico") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valueInput / valueDcaToFranco)
    }

    if (firstSelect.value == "dolar-canadense" && convertedSelect.value == "real") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput / valueDcaToReal)
    }


    // Dolar americano

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

}

function changeCurrency() {

    const convertedCurrencyName = document.querySelector(".converted-currency")
    const convertToCurrencyName = document.querySelector(".currency-convert-to")
    const currencyToImg = document.querySelector(".currency-to-convert")
    const currencyImg = document.querySelector(".currency-converted-img")
    const currencyToConvert = document.querySelector(".currency-value-to-convert")
    const convertedCurrency = document.querySelector(".currency-value-converted")

    if (firstSelect.value == "real") {
        convertToCurrencyName.innerHTML = "Real"
        currencyToImg.src = "./assets/Bandeira do BRASIL.png"
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(0)
    }
    if (firstSelect.value == "dolar-americano") {
        convertToCurrencyName.innerHTML = "Dólar americano"
        currencyToImg.src = "./assets/united-states.png"
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(0)
    }
    if (firstSelect.value == "euro") {
        convertToCurrencyName.innerHTML = "Euro"
        currencyToImg.src = "./assets/euro.png"
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(0)
    }
    if (firstSelect.value == "dolar-canadense") {
        convertToCurrencyName.innerHTML = "Dólar canadense"
        currencyToImg.src = "./assets/canadian.png"
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(0)
    }
    if (firstSelect.value == "dolar-australiano") {
        convertToCurrencyName.innerHTML = "Dólar australiano"
        currencyToImg.src = "./assets/australian.png"
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(0)
    }
    if (firstSelect.value == "libra-esterlina") {
        convertToCurrencyName.innerHTML = "Libra esterlina"
        currencyToImg.src = "./assets/unitedkingdom.png"
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(0)
    }
    if (firstSelect.value == "yen") {
        convertToCurrencyName.innerHTML = "Yen"
        currencyToImg.src = "./assets/japan.png"
        currencyToConvert.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(0)
    }
    if (firstSelect.value == "yuan-renmimbi") {
        convertToCurrencyName.innerHTML = "Yuan renmimbi"
        currencyToImg.src = "./assets/figurinha-china.png"
        currencyToConvert.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(0)
    }
    if (firstSelect.value == "franco-suico") {
        convertToCurrencyName.innerHTML = "Franco suiço"
        currencyToImg.src = "./assets/switzerland.png"
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(0)
    }




    if (convertedSelect.value == "real") {
        convertedCurrencyName.innerHTML = "Real"
        currencyImg.src = "./assets/Bandeira do BRASIL.png"
        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(0)
    }

    if (convertedSelect.value == "dolar-americano") {
        convertedCurrencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/united-states.png"
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(0)
    }

    if (convertedSelect.value == "euro") {
        convertedCurrencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(0)
    }

    if (convertedSelect.value == "dolar-canadense") {
        convertedCurrencyName.innerHTML = "Dólar Canadense"
        currencyImg.src = "./assets/canadian.png"
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(0)
    }

    if (convertedSelect.value == "dolar-australiano") {
        convertedCurrencyName.innerHTML = "Dólar Australiano"
        currencyImg.src = "./assets/australian.png"
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(0)
    }

    if (convertedSelect.value == "libra-esterlina") {
        convertedCurrencyName.innerHTML = "Libra esterlina"
        currencyImg.src = "./assets/unitedkingdom.png"
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(0)
    }

    if (convertedSelect.value == "yen") {
        convertedCurrencyName.innerHTML = "Yen"
        currencyImg.src = "./assets/japan.png"
        convertedCurrency.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(0)
    }
    
    if (convertedSelect.value == "yuan-renmimbi") {
        convertedCurrencyName.innerHTML = "Yuan Renmimbi"
        currencyImg.src = "./assets/figurinha-china.png"
        convertedCurrency.innerHTML = new Intl.NumberFormat("zh-HK", {
            style: "currency",
            currency: "RMB"
        }).format(0)
    }

    if (convertedSelect.value == "franco-suico") {
        convertedCurrencyName.innerHTML = "Franco suiço"
        currencyImg.src = "./assets/switzerland.png"
        convertedCurrency.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(0)
    }

    convertValues()

}

function pushElement() {
    convertMain.style.left = "50%"
    convertMain.style.transform = "translateX(-50%)"
    convertMain.style.transition = "ease-in-out 2s"
    convertMain.style.cursor = "default"
}


firstSelect.addEventListener("change", changeCurrency)
convertedSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
convertMain.addEventListener("click", pushElement)


''
''
