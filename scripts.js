const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currencySelect")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".inputCurrency").value
    const currencyValueToConverter = document.querySelector(".currencyValueToConverter")
    const currencyValueConverted = document.querySelector(".currencyValue")

    const dolarToday = 5.20
    const euroToday = 7.20
    const libraToday = 8.20
    const ieneToday = 9.20
    const francoSuicoToday = 10.20

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }

    if (currencySelect.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue / francoSuicoToday)
    }

    currencyValueToConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currencyName")
    const currencyImage = document.querySelector(".currencyImage")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "$"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "€"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "£"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "¥"
        currencyImage.src = "./assets/iene.png"
    }

    if (currencySelect.value == "franco") {
        currencyName.innerHTML = "CHF"
        currencyImage.src = "./assets/franco.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "R$"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()
}




currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
