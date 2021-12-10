import React from 'react';
import { useState, useEffect } from "react";
import "./Weather.css"


const Weather = () => {

    
    const [place, setPlace] = useState([""])
    const [city, setCity] = useState([]);
    const [newCity, setNewCity] = useState("Helsingborg");

    useEffect(()=> {
        const cityName = newCity;
        async function checkWeather() { //Här hämtar jag api:et från sidan.
            const res = await fetch  (`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=59af68615c9fd72d6b872547d0b34ff1`);
            const data = await res.json();

            console.log(data);

            setCity(data);
        }

        checkWeather();
    }, [newCity]);


    const handleSearch = (e) => { //Se är den korta betydelsen för event objekt som kan skickas till event hanterare.
        e.preventDefault(); //Metoden preventDefault() avbryter händelsen om den är avbrytbar, vilket innebär att standardåtgärden som hör till händelsen inte kommer att inträffa. 
        const city = String(e.target[0].value);
        setNewCity(city); //anger ny stad
        resetSearch();        
    }

    const resetSearch = ()=>{ //När det har inmatats en text på vilken stad som man vill se hur vädret är, så har det reset:ats så då kan man söka om igen.
        setPlace("");
    }
  

    return (
        <div className="weatherwrapper" id="weather">
        <h1 className="weather-meh1">Weather</h1>
            <p className="weather-me">
            
            </p>
            
            {city.name !== undefined &&

            <div className="weatherForecast">

                <h3>The reason why I have a weather forecast here is because I am curious about the weather where I should go for job searches but also so that you as a reader or employer know how my weather is in Helsingborg. 
                    <br/><br/>
                    I'm always open to suggestions and is flexible.
                    <br/> 
                    I trust you will be interested and therefore I will be hearing from you so we can have a coffee when you want to meet me.
                    <br/> 
                    Please feel free to check the current weather at your desired location.</h3>
                    <br/>
                    

                <p>Temperature in {city.name} is {city.main.temp} °c so dont forget to dress according to what it feels like {city.main.feels_like}°c.</p>
                <br/>
                
                <p>The wind speed in {city.name} is {city.wind.speed} an the humidity is around {city.main.humidity}%</p>
                <br/>
                {/* <p>The probabilty for rain in {city.name} is around {}%</p> */}
                <h3></h3>
                <br/>
            </div>
            }    


            { <form onSubmit={handleSearch} className="weather-meh1">
                <label>
                    <input type="text"  onChange={(e) => setPlace(e.target.value)} value={place} className="weather-me" />
                </label>
                <button className="location-box">Check if the weather is good</button>  
            </form> }
            <br/><br/>
           <img src="https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="weather-forecast" />

        </div>     
        
     );
  } 


export default Weather;