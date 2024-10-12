/* eslint-disable react/prop-types */
import "./Countries.scss";

export default function CountriesList({ countries }) {
    return (
        <div className="countries-list">
            {countries.map((el) => (
                <div key={el.name}>
                    <img className="flag-img" src={el.flags.png} alt={
                        el.flags.alt ? el.flags.alt : `${el.name} flag`
                    } />
                    <h3>{el.name}</h3>
                    <InfoTag
                        classWord={"capital"}
                        infoProp={"Capital"}
                        info={el.capital[0]}
                    />
                    <InfoTag
                        classWord={"languages"}
                        infoProp={"Languages"}
                        info={Array.from(el.languages).join(", ")}
                    />
                    <InfoTag
                        classWord={"population"}
                        infoProp={"Population"}
                        info={el.population.toString()}
                    />
                    <InfoTag
                        classWord={"currency"}
                        infoProp={"Currency"}
                        info={el.currencies ? el.currencies[0][0] : "N/A"}
                    />
                </div>
            ))}
        </div>
    )
}

const InfoTag = ({ classWord, infoProp, info }) => (
    <div className={classWord}>
        <p className="bold">{infoProp}</p>
        <p>{info}</p>
    </div>
)
