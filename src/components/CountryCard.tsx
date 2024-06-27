import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (Country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div
      onClick={() => handleSelectCountry(country)}
      style={{
        widows: "200px",
        height: "200px",
        border: "2px solid #000",
        borderRadius: "10px",
        display: "block",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "5px",
        padding: "10px",
      }}
    >
      <img
        src={country.flags.svg}
        alt="나라 국기 이미지"
        style={{
          widows: "100px",
          height: "100px",
        }}
      />
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default CountryCard;
