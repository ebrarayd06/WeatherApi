class UI{

constructor(){

    this.cityWeather=document.querySelector("#cityWeather");

}


clear(){

    this.cityWeather.innerHTML="";

}

showAlert(){
    this.cityWeather.innerHTML="CİTY HAS NOT BEEN FOUNDED";
}

showCity(city){

    this.cityWeather.innerHTML=`

    <div class="card card-body">
    <div class="row">
        <div class="col-md-3">
        
        <a href="https://placeholder.com">
        <img src="https://via.placeholder.com/350x150"
        class="img-thumbnail">
        </a>
    
        </div>
        <div class="col-md-9">
        <div class="table-responsive">
        <table class="table table-dark table-striped table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">NAME</th>
                <th scope="col">CLOUD</th>
                <th scope="col">TEXT</th>
                <th scope="col">WIND DEGREE</th>
                <th scope="col">TEMPERATURE</th>
                <th scope="col">LAST UPDATE</th>
                <th scope="col">IMAGE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>${city.location.name}</td>
                <td>${city.current.cloud}</td>
                <td>${city.current.condition.text}</td>
                <td>${city.current.temp_c}</td>
                <td>${city.current.wind_degree}</td>
                <td>${city.current.last_updated}</td>
                <td><img src="${city.current.condition.icon}"></td>
                </tr>
            </tbody>
        </table>
        </div>

            
        </div>

    </div>
 
</div>    
 
 `;


}

}