import react from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json"

function CountriesList(props) {
    // props = { countries };

    return (
        <div>
            {countries.map(country => {
                return <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>{country.name.common} </Link>             
        })}
        </div>

    );
}

export default CountriesList;

