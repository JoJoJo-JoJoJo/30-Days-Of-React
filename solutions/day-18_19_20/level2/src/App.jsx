import { useState, useEffect, useCallback, useMemo } from 'react'
import './App.css'


export default function App() {
  const [info, setInfo] = useState({
    averageWeight: 0,
    averageLifeSpan: 0,
    countriesWithBreeds: 0,
    countryWithMostBreeds: "",
  })

  const catAPI = "https://api.thecatapi.com/v1/breeds";

  const fetchData = useCallback(async (API) => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      return data
    } catch (err) {
      console.log(err);
    }
  }, []);

  const data = useMemo(() => {
    fetchData(catAPI);
  }, [fetchData]);



  useEffect(() => {
    // let highestCount = { origin: null, count: 0 };
    const originsArr = [];

    data.forEach((item) => {
      const origin = item.origin;
      !originsArr.includes(origin) ?
        originsArr.push({
          origin: origin,
          count: 1,
        }) :
        //* I don't like this 2nd part yet...
        originsArr[origin].count++
    }, 0);

    // originsArr.forEach((obj) => {
    //   if (obj.count > highestCount.count) highestCount = obj;
    // });

    //* The country with the highest count could also be found by a sort by asc. order...

    originsArr.sort((a, b) => a.count - b.count);

    setInfo({
      ...info,
      countriesWithBreeds: originsArr.length,
      countryWithMostBreeds: originsArr[-1].origin,
    });
  }, [data, info]);



  const averagedData = () => {
    try {
      const lifeSpans = [];
      //* Contains multiple objects, each with a life_span and count property.

      let countIndex;
      const modeLifeSpan = lifeSpans[countIndex].life_span;

      data.map((el) => {
        let life_span = el.life_span;

        //* Check if current life_span already exists as a property on an object.

        if (lifeSpans.includes({
          life_span: life_span
        })) {
          lifeSpans[{ life_span: life_span }].count++
        } else {
          lifeSpans.push({
            life_span: life_span,
            count: 1,
          });
        }
      });

      //* Check each object to see which life_span has the highest 'count' property.

      lifeSpans.forEach((item, i) => {
        if (item.count > countIndex) countIndex = i
      });

      setInfo({
        ...info,
        averageWeight: data.reduce((prevEl, currEl) => {
          prevEl + parseInt(currEl.weight.metric[-1]) - parseInt(currEl.weight.metric[0])
        }, 0) / data.length,
        averageLifeSpan: modeLifeSpan,
      });

    } catch (err) {
      console.log(err);
    }
  }



  return (
    <div className='app'>
      <h1>Find the averages of Cat Data (very fun, trust me)!</h1>
      <div className='main-div'>
        <p className='text'>{`
        Average Min. Cat Weight: ${info.averageWeight}
        Average Min. Cat Life Span: ${info.averageLifeSpan}
        Countries with breeds: ${info.countriesWithBreeds}
        Country with most breeds: ${info.countryWithMostBreeds}
        `}</p>
        <button className='btn fetch-btn' onClick={averagedData}>Fetch Data</button>
      </div>
    </div>
  )
}
