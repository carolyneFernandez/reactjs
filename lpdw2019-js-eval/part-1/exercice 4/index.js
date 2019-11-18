/**Créer un object litéral (pas une classe !) "meteo" avec les propriétés: day, temperature, weather.
"day" est un jour de la semaine (lundi, mardi, ...)
"temperature" est un nombre (20.3)
"weather" est la météo du jour (soleil, nuageux, ...) */
let meteo = {
    date: "vendedri",
    temperature: 20.3,
    weather: "soleil",
    setDay(journe){
        this.date= "mercredi";
    },
    setTemperature(temperature){
        this.temperature = 8
    },
    
     setWeather(weater){
        this.weather = weater;
    
    },
    sayMeteo(){
        console.log("Bonjour ,nous sommes "+this.date +",il fait  "+this.temperature+"°C et le temps est  "+ this.weather);
    }


  };



/**Ajouter à l'objet les méthodes suivantes:
"setDay(day)" qui définit la valeur de la propriété day
"setTemperature(t)" qui définit la valeur de la propriété temperature
"setWeather(weather)" qui définit la valeur de la propriété weather
"sayMeteo()" qui affiche dans la console: "Bonjour, nous sommes {DAY}, il fait {TEMPERATURE}ºC et le temps est {WEATHER}." */




// Exemple de code pour vos tests:
meteo.setDay('lundi');
meteo.setTemperature(21.3);
meteo.setWeather('nuageux');
meteo.sayMeteo(); // --> Bonjour, nous sommes lundi, il fait 21.3ºC et le temps est nuageux.