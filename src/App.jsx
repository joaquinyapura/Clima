import { SearchBar } from "./Components/SearchBar";

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=bec1373e7f9bb7c9472b0c7266285c24`;

  return (
    <div className="w-full bg-slate-900 text-white bg-[url(assets/sunset.jpg)] bg-cover">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-between h-screen">
        <div className="top mt-40 p-10">
          <div className="location">
            <p className="text-5xl font-black">Dallas</p>
          </div>
          <div className="temp font-semibold text-2xl">
            <p>30°</p>
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
