
class Weather{

    constructor(){
        
        this.clientid='192c73e3b4ec45d7bf4130028211012';
        
    }

    async getWeather(city){


        var getResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.clientid}&q=${city}&aqi=no`);

        var getCity= await getResponse.json();

        return{
            getCity
        }

    }



}