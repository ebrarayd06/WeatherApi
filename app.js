
const city = new Weather();
const ui=new UI();

const element=document.querySelector(".form-select");

element.addEventListener("change",event=>{

    ui.clear();

        if(event.target.value!=='Please choose your city for weather'){

           let item=event.target.value; 
           city.getWeather(item).then(res=>{

                console.log(res.getCity);
                ui.showCity(res.getCity);


           }).catch(err=>{
            ui.showAlert();
           });

        }



})