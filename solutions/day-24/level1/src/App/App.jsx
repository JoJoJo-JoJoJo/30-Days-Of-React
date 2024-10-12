import { useState, useEffect, useReducer, useCallback, useMemo } from 'react'
import './App.scss'
import barChart from 'bar-chart.png';
import upArrow from 'up-arrow.png';
import TitleBox from '../TitleBox/TitleBox.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { IconButton, TextButton } from '../Buttons/Buttons.jsx';
import CountriesList from '../Countries/CountriesList.jsx';
import Chart from '../Chart/Chart.jsx';

const chartPNG = barChart;
const upArrowPNG = upArrow;

const countriesAPI = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,languages,population,currencies';

export default function App() {
  // The countries that are currently relevant to the search bar text.
  const [currCountries, dispatch] = useReducer(reducer, null);
  const [searchTxt, setSearchTxt] = useState('');


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
    fetchData(countriesAPI);
  }, [fetchData]);

  useEffect(() => {
    // Here is where the currently relevant countries should be determined (maybe).
  }, [searchTxt]);

  const reducer = (action) => {
    switch (action.type) {
      case 'UPDATE':
        return currCountries
      default:
        return currCountries
    }
  }

  const handleChange = (stateFor, actionType) => {
    if (stateFor.toUpperCase() === 'SEARCHTXT') {
      setSearchTxt(searchTxt);
      dispatch({ type: `${actionType.toUpperCase()}` });
      return
    }
    dispatch({ type: `${actionType.toUpperCase()}` });
  }

  const toTop = () => {
    // Go to the search bar (near top of app).
  }

  const toChart = () => {
    // Go to the chart (at bottom of app).
  }

  const showPop = () => {
    // Show population chart.
  }

  const showLang = () => {
    // Show languages chart.
  }

  return (
    <>
      <TitleBox
        total={data.length}
        hasContent={searchTxt != ''}
        content={currCountries.length}
      />
      <div className='search-div'>
        <SearchBar handleChange={handleChange} text={searchTxt} />
        <IconButton img={chartPNG} onClick={toChart} />
      </div>
      <CountriesList countries={currCountries} />
      <div className='chart-div'>
        <Chart>
          <TextButton text={'Population'} onClick={showPop} />
          <TextButton text={'Languages'} onClick={showLang} />
        </Chart>
        <IconButton img={upArrowPNG} onClick={toTop} />
      </div>
    </>
  )
}
