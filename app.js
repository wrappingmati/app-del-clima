function weatherBalloon( city ) {
    key = '43c888b90cb717a2884b2ed46e6a061c'
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + key + '&lang=sp ')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
     
     drawWeather(data);
     const {name} = data;
     const {id, main} = data.weather[0]

     console.log(data)

    
      
var cuerpo = document.querySelector(".cuerpo")
        //Temperaturas
      
    //frio
    if (data.main.temp < 288.15 && data.main.temp >= 278 ){ 
      cuerpo.classList.remove("cuerpo-calido");     // 15 celsis    y 5 celcius
      cuerpo.classList.toggle("cuerpo-frio")
    }else if(data.main.temp < 278.15 ){       
      cuerpo.classList.remove("cuerpo-calido");       //  5 celcius a menos de 0
      cuerpo.classList.toggle("cuerpo-frio")
    }else if( data.main.temp > 288.15 && data.main.temp < 293.15){  
      cuerpo.classList.remove("cuerpo-calido");   //15 celcius y 20 celcius  
      cuerpo.classList.toggle("cuerpo-frio")
    }else if(data.main.temp === 293.15 ){                       // 20 celcius
      document.getElementsByClassName(" cuerpo").innerHTML = "" ;
    }else if(data.main.temp > 293.15 && data.main.temp <= 300.15 ){ 
      cuerpo.classList.remove("cuerpo-frio");            // 20 a 27 celcius
      cuerpo.classList.toggle("cuerpo-calido")
    }else if (data.main.temp > 300.15 ){
      cuerpo.classList.remove("cuerpo-frio");   
      cuerpo.classList.toggle("cuerpo-calido")
    }
                                                               
     // Climas   

    if (id < 250 && id > 199){ 
      document.getElementById('descripcion').innerHTML =("Tormenta")
    }
    //nieve
   else if(id >= 600 && id < 622){
    document.getElementById("logo_clima").innerHTML = "<img src=imagenes/nieve.png width=120px height=120spx>"
   }
   //llovizna
    else if ( id <350 && id > 299){
      document.getElementById("logo_clima").innerHTML = "<img src=imagenes/lluvia_ligera.png width=120px height=120spx>"
    }
    //  lluvias
    else if ( id === 500){
      document.getElementById("logo_clima").innerHTML = "<img src=imagenes/lluvia_ligera.png width=120px height=120spx>" 
      //llovizna 
    }
    else if (id === 501){
      document.getElementById("logo_clima").innerHTML = "<img src=imagenes/lluvia_moderada.png width=120px height=120spx>"  
      //moderada
    }
    else if(id === 502){
      document.getElementById("logo_clima").innerHTML = "<img src=imagenes/lluvia_moderada.png width=120px height=120spx>"
      document.getElementById('descripcion').innerHTML =("Lluvia intensa")
    }
    else if ( id === 503){
      document.getElementById('descripcion').innerHTML =("Diluvio")
    }
    // nubes
    else if (id === 800){
      
      document.getElementById("logo_clima").innerHTML = "<img src=imagenes/despejado.png width=120px height=120spx>"    
    }
    else if (id === 801 ){
     
      document.getElementById("logo_clima").innerHTML = "<img src=imagenes/poco_nublado.png width=120px height=120spx>"
    }
    else if (id === 802 ){
     
      document.getElementById("logo_clima").innerHTML = "<img src=imagenes/nubes_dispersas.png width=120px height=120spx>"
   }
   else if (id === 803 ){
   
    document.getElementById("logo_clima").innerHTML = "<img src=imagenes/nublado.png width=120px height=120spx>"
   
   }
    else if( id === 804){
 
      document.getElementById("logo_clima").innerHTML = "<img src=imagenes/Muy_nublado.png width=120px height=120spx>"
      
   
    }
    })
    
  }
 
function resultado_clima() {
  var ciudad = document.getElementById("input_ciudad").value;
  weatherBalloon(ciudad) 

}




function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
    
	document.getElementById('descripcion').innerHTML = d.weather[0].description;
	document.getElementById('temperatura').innerHTML = celcius + '&deg;';
	document.getElementById('locacion').innerHTML = d.name;

   
    
  
}

