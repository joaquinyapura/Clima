import { SearchBar } from "./Components/SearchBar";

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=bec1373e7f9bb7c9472b0c7266285c24`;

  return (
    <div className="w-full h-screen bg-black text-white">
      <SearchBar />
    </div>
  );
}

export default App;
