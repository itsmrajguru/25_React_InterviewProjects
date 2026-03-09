import Search from "../SearchComponent";
import { useEffect, useState } from "react";
function Weather() {
    const [cityName, setCityName] = useState("")

    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [weatherData, setWeatherData] = useState(null)

    //calling api with the data on change of the input

    async function fetchWeatherData(params) {
        try {
            setLoading(true)
            const apiRes = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${params}&units=metric&appid=0cbe4f6188d4e42f8e452d8745fb2684`
            )
            const apiResult = await apiRes.json()

            if (apiResult.cod === 200) {
                setWeatherData(apiResult)
                console.log("Data :", apiResult);
                setErrorMsg(null)
            } else {
                setWeatherData(null)
                setErrorMsg(apiResult.message)
            }
        } catch (e) {
            console.log("Error :", e);
            setErrorMsg(e.message)
        } finally {
            setLoading(false)
        }
    }

    function handleSearchInput() {
        fetchWeatherData(cityName)
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    //initial search
    useEffect(() => {
        fetchWeatherData("Pune")
    }, [])

    return (
        <div className="App">
            <Search cityName={cityName}
                setCityName={setCityName}
                handleSearchInput={handleSearchInput} />

            {loading && <h1 className="loading">Loading Data...Please wait !</h1>}
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

            {weatherData && (
                <div>
                    <div className="city-name">
                        <h2>{weatherData.name}, <span>{weatherData.sys?.country}</span></h2>
                    </div>
                    <div className="date">
                        <span>{getCurrentDate()}</span>
                    </div>
                    <div className="temp">
                        {Math.round(weatherData.main.temp)}°C
                    </div>
                    <p className="description">
                        {weatherData.weather[0].description}
                    </p>
                    <div className="weather-info">
                        <div className="column">
                            <div>
                                <p>Humidity</p>
                                <p>{weatherData.main.humidity}%</p>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <p>Wind Speed</p>
                                <p>{weatherData.wind.speed} m/s</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Weather;