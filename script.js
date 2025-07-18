// Funzione: calcola emissioni energia (kWh)
function calcoloEmissioneEnergetica (kWh) {
    const CO2_per_kWh = 0.233;
    return kWh * CO2_per_kWh;
}

// Funzione: calcola emissioni trasporti (km)
function calcoloEmissioniTrasporto (km) {
    const CO2_per_km = 0.21;
    return km * CO2_per_km;
}

//funzione calcolo emissioni totali (kWh + km)
function calcoloEmissioniTotali (kWh, km) {
    return calcoloEmissioneEnergetica (kWh) + calcoloEmissioniTrasporto (km);
}

// Event listener per pulsante energia
document.getElementById("calculate-kwh-emissions-btn").addEventListener('click', () => {
    const kWh = parseFloat(document.getElementById("kwh").value);
      if (isNaN(kWh) || (kWh < 0)) {
    alert("Inserisci un numero valido");
    return;
      }
    const emissioni =  calcoloEmissioneEnergetica (kWh); 
    document.getElementById("kwh-emissions-output").textContent = emissioni.toFixed(2);
})

// Event listener per pulsante trasporto
document.getElementById("calculate-km-emissions-btn").addEventListener('click', () =>{
    const km = parseFloat(document.getElementById("km").value);
      if (isNaN(km) || (km < 0)) {
    alert("Inserisci un numero valido");
    return;
      }
    const emissioni = calcoloEmissioniTrasporto (km);
    document.getElementById("km-emissions-output").textContent = emissioni.toFixed(2);
})


// Event listener per pulsante totale
document.getElementById("total-emissions-btn").addEventListener('click', () => {
    const kWh = parseFloat(document.getElementById("kwh").value);
    const km = parseFloat(document.getElementById("km").value);
      if (isNaN(kWh) || (kWh < 0) || isNaN(km) || (km < 0)){
    alert ("Ricontrollare i valori inseriti nei campi precedenti");
    return;
      }
    const emissioniTotali = calcoloEmissioniTotali (kWh, km);
    document.getElementById("total-emissions-output").textContent = emissioniTotali.toFixed(2);
})