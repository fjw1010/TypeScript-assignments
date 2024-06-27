import React from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";

const CountryList: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);

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
  console.log(countries);
  return <></>;
};

export default CountryList;
