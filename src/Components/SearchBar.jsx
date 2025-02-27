import React, { useState } from "react";

export const SearchBar = () => {
  const [location, setLocation] = useState("");

  const handleImput = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="w-full flex justify-center py-6">
      <form action="">
        <input
          type="text"
          placeholder="Enter location"
          className=" rounded-full px-6 py-2 text-black "
          onChange={handleImput}
        />
      </form>
    </div>
  );
};
