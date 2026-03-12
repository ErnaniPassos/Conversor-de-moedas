const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currencySelect")
const currencyOriginSelect = document.querySelector(".currencyOriginSelect")
const inputCurrencyValue = document.querySelector(".inputCurrency")

const currencyValueToConverter = document.querySelector(".currencyValueToConverter")
const currencyValueConverted = document.querySelector(".currencyValue")

const currencyImage = document.querySelector(".currencyImage")
const currencyImageOrigin = document.querySelector(".currencyImageOrigin")

const currencyName = document.getElementById("currencyName")
const currencyNameOrigin = document.getElementById("currencyNameOrigin")

const currencyData = {
    BRL: { symbol: "R$", image: "./assets/real.png", locale: "pt-BR" },
    USD: { symbol: "US$", image: "./assets/dolar.png", locale: "en-US" },
    EUR: { symbol: "€", image: "./assets/euro.png", locale: "de-DE" },
    GBP: { symbol: "£", image: "./assets/libra.png", locale: "en-GB" },
    JPY: { symbol: "¥", image: "./assets/iene.png", locale: "ja-JP" },
    CHF: { symbol: "CHF", image: "./assets/franco.png", locale: "de-CH" }
}

async function getRates() {

    const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,CHF-BRL")
    const data = await response.json()

    return {
        BRL: 1,
        USD: Number(data.USDBRL.high),
        EUR: Number(data.EURBRL.high),
        GBP: Number(data.GBPBRL.high),
        JPY: Number(data.JPYBRL.high),
        CHF: Number(data.CHFBRL.high)
    }
}

async function convertValues() {

    const value = Number(inputCurrencyValue.value)
    const origin = currencyOriginSelect.value
    const destination = currencySelect.value

    if (!value || !origin || !destination) return

    const rates = await getRates()

    const valueInBRL = value * rates[origin]
    const convertedValue = valueInBRL / rates[destination]

    currencyValueToConverter.innerHTML =
        new Intl.NumberFormat(currencyData[origin].locale, {
            style: "currency",
            currency: origin
        }).format(value)

    currencyValueConverted.innerHTML =
        new Intl.NumberFormat(currencyData[destination].locale, {
            style: "currency",
            currency: destination
        }).format(convertedValue)
}

function changeCurrency() {

    const origin = currencyOriginSelect.value
    const destination = currencySelect.value

    if (origin && currencyData[origin]) {
        currencyImageOrigin.src = currencyData[origin].image
        currencyNameOrigin.innerHTML = origin
    }

    if (destination && currencyData[destination]) {
        currencyImage.src = currencyData[destination].image
        currencyName.innerHTML = destination
    }

    convertValues()
}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
currencyOriginSelect.addEventListener("change", changeCurrency)