import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import About from "./components/About";
import Ciudad from "./components/Ciudad";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [cities, setCities] = useState([]);

  function handleAddCity(city) {
    setCities((prevCities) => {
      return [city, ...prevCities]; //* Queremos que retorne la ciudad que agregamos, y las anteriores.  */
    });
  }

  function handleRemoveCity(cityId) {
    setCities((prevCities) => {
      return prevCities.filter((city) => {
        return cityId !== city.id; //!Devolvemos todas las ciudades, que el ID sea distinto al del argumento. Osea el que borramos.
      });
    });
  }

  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          handleAddCity(ciudad);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <div className="App">
      <Route path="/">
        <Nav onSearch={onSearch} />
      </Route>
      <div>
        <Route path="/" exact>
          <Cards cities={cities} onRemove={handleRemoveCity} />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route
          path="/ciudad/:id"
          exact
          render={({ match }) => {
            const city = cities.find(
              (city) => city.id === Number(match.params.id)
            );
            return <Ciudad city={city} />;
          }}
        ></Route>
      </div>
      <hr />
    </div>
  );
}

export default App;
