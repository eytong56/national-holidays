import { useState, useEffect } from "react";
import List from "./List.jsx";

const COUNTRIES_URL =
  "https://openholidaysapi.org/Countries?languageIsoCode=en";

function Dropdown() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetch(COUNTRIES_URL)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setSelectedCountry("NL");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const countryList = countries.map((country) => {
    return (
      <option key={country.isoCode} value={country.isoCode}>
        {country.name[0].text}
      </option>
    );
  });

  function handleChange(e) {
    setSelectedCountry(e.target.value);
  }

  return (
    <>
      <div class="py-3 font-semibold tracking-tight">
        {countries.length == 0 ? (
          "Loading..."
        ) : (
          <select
            name="country"
            id="country"
            value={selectedCountry}
            onChange={handleChange}
            class="px-3 py-2 rounded-md shadow-xs ring-inset ring-1 ring-gray-300 hover:bg-gray-100"
          >
            {countryList}
          </select>
        )}
      </div>
      <List country={selectedCountry} />
    </>
  );
}

export default Dropdown;
