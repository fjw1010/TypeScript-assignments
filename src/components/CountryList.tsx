import React from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = React.useState<Country[]>(
    []
  );

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountries: Country) =>
          selectedCountries.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter((selectedCountries: Country) => {
          return selectedCountries.name.common !== country.name.common;
        })
      );
    }
  };

  console.log(countries);
  return (
    <div
      style={{
        maxWidth: "1200px",
        maxHeight: "auto",
        margin: "0 auto",
      }}
    >
      <div>
        <h1 style={{ fontSize: "30px", textAlign: "center", marginTop: "5px" }}>
          Favorite Countries
        </h1>
        <div>
          {selectedCountries.map((country: Country) => {
            return (
              <CountryCard
                key={country.name.common}
                country={country}
                handleSelectCountry={handleSelectCountry}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h1 style={{ fontSize: "30px", textAlign: "center", marginTop: "5px" }}>
          Countries
        </h1>
        <div>
          {countries.map((country: Country) => {
            return (
              <CountryCard
                key={country.name.common}
                country={country}
                handleSelectCountry={handleSelectCountry}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryList;
