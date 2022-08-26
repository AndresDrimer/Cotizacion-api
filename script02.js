const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

async function traerCotizacion(){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  
    const {code, rate} = data.bpi.USD  
    let rateRounded= rate.substring(0, 6); 
    document.getElementById("priceuss").textContent=rateRounded
    document.getElementById("code").textContent=code
    const {updated} = data.time
    document.getElementById("date").textContent=updated
    
}



traerCotizacion()





