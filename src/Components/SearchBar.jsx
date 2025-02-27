import React, { useState } from "react";

export const SearchBar = () => {
  const [location, setLocation] = useState("");

  const handleImput = (e) => {
    setLocation(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex justify-center py-6">
      <form action="" onSubmit={handlesubmit}>
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
