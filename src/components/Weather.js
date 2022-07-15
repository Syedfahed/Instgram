/* https://api.weatherapi.com/v1/current.json?key=facd693514784127a83154058221407&q=Adilabad */
import {React, useState,useEffect} from 'react'

import Humidity from '../image/humidity.webp'
import Pressure from '../image/pressure.webp'
import Wind from '../image/wind.png'
export default function Weather() {

const  [Search, setSearch] = useState("Hyderabad")
const [data , setdata] = useState("")
 const SearchData = async ()=>{
     const url = `https://api.weatherapi.com/v1/current.json?key=facd693514784127a83154058221407&q=${Search}`
     var res = await fetch(url);
     var data = await res.json();
     const {name,region,country,localtime,tz_id} = data.location
     const {temp_c,pressure_in,humidity,wind_kph} = data.current
     const {text,icon} = data.current.condition;
     const newdata= {
      name,region,country,localtime,temp_c,text,icon,pressure_in,humidity,wind_kph,tz_id
     }
     setdata(newdata)
     console.log(data)
 } 
  useEffect(() => {
  SearchData();
 }, [])
  return (
    <>
    <div className='box'>
    <div className='main'>
        <div className='search-box'><input className='search-input' onChange={(e)=>setSearch(e.target.value)} type='search'/>
        <button className='btn' onClick={SearchData}>Search</button>
        </div>
            <h2 className='name'>{data.name}</h2>
            <div className='country'>
                <p>{data.region}</p><p>{data.country}</p>
            </div>
        <div className='weather-report'>
            <h1>{data.temp_c}C</h1>
            <img src={data.icon} alt=''/>
        </div> <p className='weather-text'>{data.text}</p>
        <div className='weather-components'>
          <div className='humiditiy'>
        <img className='logo' src={Humidity} alt='hymidity'/>
        <p>{data.humidity}</p></div>
        <div className='pressure'>
          <img className='logo' src={Pressure} alt=''/>
          <p>{data.pressure_in}</p>
        </div>
        <div className='wind'>
          <img className='logo' src={Wind} alt=''/>
          <p>{data.wind_kph}</p>
        </div>
        </div>  
        <div className='date'>
          <p>{data.tz_id}</p>
          <p>{data.localtime}</p>
        </div>
    </div>
    </div>
    </>
  )
}
