import axios from "axios";
import { useState } from "react";

function App() {
  const [datos, setDatos] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bec1373e7f9bb7c9472b0c7266285c24`;

  const searchLocation = (e) => {
    e.preventDefault();
    axios.get(url).then((response) => {
      setDatos(response.data);
      console.log(datos.main);
    });
  };

  return (
    <div className="w-full bg-slate-900 text-white bg-[url(assets/sunset.jpg)] bg-cover">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-between h-screen">
        <div className="w-full flex justify-center py-6">
          <form action="" onSubmit={searchLocation}>
            <input
              type="text"
              placeholder="Enter location"
              className=" rounded-full px-6 py-2 text-black "
              onChange={(e) => setLocation(e.target.value)}
            />
          </form>
        </div>
        <div className="top  p-10">
          <div className="location">
            {datos.name ? (
              <p className="text-5xl font-black">{datos.name}</p>
            ) : (
              <p className="text-5xl font-black">Ciudad</p>
            )}
          </div>
          <div className="temp font-semibold text-2xl">
            {datos?.main?.temp !== undefined ? (
              <p>{(datos.main.temp - 273.15).toFixed(1)}</p>
            ) : (
              <p>Sin data</p>
            )}
          </div>
          <div className="description">nubladisimo kpo</div>
        </div>
        <div className="mb-10 p-10 g-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 font-bold text-lg flex justify-between items-center">
          <div className="termica">
            <h2>Sensación termica</h2>
            <p>40°</p>
          </div>
          <div className="humedad">
            <h2>Humedad</h2>
            <p>41</p>
          </div>
          <div className="viento">
            <h2>vientos</h2>
            <p>230kph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
