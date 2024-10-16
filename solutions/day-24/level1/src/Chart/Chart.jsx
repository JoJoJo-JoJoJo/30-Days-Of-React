/* eslint-disable react/prop-types */
import "./Chart.scss";

export default function Chart({ children, chart, worldPop, countries }) {
    const totalPop = isNaN(worldPop) ? 8182088556 : worldPop 

    return (
        <div className="chart-div">
            <div className="btn-div">{children}</div>
            <p className="chart-text">Most {
                chart === "pop" ? "populated countries" : "languages spoken"
            } in the world</p>
            <div className="chart">
                {chart === "pop" && <Bar
                    name={"World"}
                    percent={100}
                    stat={totalPop.toLocaleString()}
                />}
                {countries.slice(0, 10).map(obj => (
                    <Bar
                        key={obj.name}
                        name={obj.name}
                        percent={chart === "pop" ?
                            (obj[chart] / totalPop) * 200 :
                            obj[chart]
                        }
                        stat={chart === "pop" ?
                            obj[chart].toLocaleString() :
                            obj[chart]
                        }
                    />
                ))}
            </div>
        </div>
    )
}

const Bar = ({ name = "", percent = 0, stat = "" }) => {
    return (
        <div className="bar-div">
            <p className="bar-name">{name}</p>
            <div className="max-bar">
                <div className="bar" style={{ width: `${percent}%` }}></div>
            </div>
            <p>{stat}</p>
        </div>
    )
}
