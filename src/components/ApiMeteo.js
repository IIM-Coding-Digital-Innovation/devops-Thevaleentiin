import React, {useEffect, useState} from 'react';
import {getData} from './getData'
import SearchBar from './SearchBar'
import loader from '../img/loader.gif'

function ApiMeteo () {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(null);
    // const [valueInput, SetValue] = useState('');
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric'
    const API_KEY  = '&appid=be724fe74c0763368fc2501fa7398520'
  
    useEffect(() => {
        getData(`${BASE_URL+API_KEY}`)
          .then(res => {
            setData(res);
            setLoad(true)
        }).catch(err => {
                setError(err);
                setLoad(true);
            }
        );
    }, []);



    if (load) {
        return (
                <>
                    <SearchBar />
                    {
                        error 
                        ? <li>{error.message}</li>
                        : [data].map((GetData, index) =>
                            <div key={index}>
                                <p>Température : {Math.round(GetData.main.temp) + " °c "}</p>
                                <p>Humidité : {Math.round(GetData.main.humidity) + " % "}</p>
                            </div>)
                            
                    }
                </>
        );
    } 
    
    else {
        return (
            <>
                <img src={loader} alt="loader" className="loader-page" /> 
            </>
        );
    }
};

export default ApiMeteo;