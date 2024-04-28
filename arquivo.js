const convertbutton =  document.querySelector('.convert-button')
const dolarday = 5.12
const btc = 324316.63
const coinselect = document.querySelector('.select-coin')
 const imgcurrency =  document.querySelector('.img-currency')

const euro = 5.47


function values() {

    const inputvalue = document.querySelector(".input-value").value

    const value = inputvalue / dolarday

    const convertedvalue =  document.querySelector(".converted-value")
    const valuetoconvert =  document.querySelector(".value-to-convert")
    convertedvalue.textContent =   new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
    valuetoconvert.textContent =   new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputvalue)

    if(coinselect.value == 'dolar'){

        convertedvalue.textContent =   new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputvalue/ dolarday)
        imgcurrency.src = './assets/dolar.png'

        
    }


    if(coinselect.value == 'btc' ){
        convertedvalue.textContent =   new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputvalue/ btc)

        imgcurrency.src = './assets/btc.png'

    }

    if(coinselect.value == 'euro'){

        convertedvalue.textContent =   new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputvalue/ euro)
        imgcurrency.src = './assets/euro.png'


    }


   
 }


    convertbutton.addEventListener("click", values )

     


















 




     