/* eslint-disable react/prop-types */
import "./Countries.scss";

export default function CountriesList({ countries }) {
    return (
        <div className="countries-list">
            {Array.from(countries).map((el) => {
                const cObj = el.currencies;
                const [cProp] = Object.keys(cObj);
                const lObj = el.languages;
                const lArr = Object.values(lObj);

                return (
                    <div key={el.cca3} className="c-card">
                        <img className="c-flag" src={el.flags.png} alt={
                            el.flags.alt ? el.flags.alt : `${el.name} flag`
                        } />
                        <h3 className="c-name">{el.name.common}</h3>
                        <InfoTag
                            infoProp={"Capital"}
                            info={el.capital[0]}
                        />
                        <InfoTag
                            infoProp={"Languages"}
                            info={
                                lArr.length > 2 ?
                                    `${lArr.slice(0, 2).join(", ")}...` :
                                    lArr.join(", ")
                            }
                        />
                        <InfoTag
                            infoProp={"Population"}
                            info={el.population.toLocaleString()}
                        />
                        <InfoTag
                            infoProp={"Currency"}
                            info={cObj ? cObj[cProp]?.name : "N/A"}
                        />
                    </div>
                )
            })}
        </div>
    )
}

const InfoTag = ({ infoProp, info }) => (
    <div className="c-info">
        <p className="c-text"><span>{`${infoProp}: `}</span>{info}</p>
    </div>
)
