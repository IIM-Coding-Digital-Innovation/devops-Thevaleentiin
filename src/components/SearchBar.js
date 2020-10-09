import React, { useState } from "react"

export function SearchBar(props) {
  const [city, setCity] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(` ${city}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Entrer une ville, un pays"
        />
      </label>
      <input type="submit"  value="Submit" />
    </form>
  );
}
export default SearchBar