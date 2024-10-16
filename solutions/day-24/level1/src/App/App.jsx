import { useState, useEffect, useMemo } from 'react';
import useSortCountries from '../useSortCountries.js';
import './App.scss';
import barChart from '../1stAssets/bar-chart.png';
import upArrow from '../1stAssets/up-arrow.png';
import TitleBox from '../TitleBox/TitleBox.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { IconButton, TextButton } from '../Buttons/Buttons.jsx';
import CountriesList from '../Countries/CountriesList.jsx';
import Chart from '../Chart/Chart.jsx';

const countriesAPI = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,languages,population,currencies,cca3';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [chart, setChart] = useState('pop');

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch(countriesAPI);
        const data = await res.json();

        if (!data) throw new Error('Error: data is null')
        setCountries(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchAPI();
  }, []);

  const filteredCountries = useMemo(() => {
    let re = new RegExp(String.raw`\s?${query}\s?`, "gi");
    // Creates a dynamic regex variable to filter countries with.
    const worldPop = countries.reduce((a, b) => a.population + b.population, 0);

    const filtered = countries.filter(country => {
      if (re.test(country.name.common)) return true
      if (re.test(country.capital["0"])) return true
      Object.values(country.languages).forEach(lang => {
        if (re.test(lang)) return true
      })
      if (query === '') return true
      return false
    })

    return {
      filtered: filtered,
      worldPop: worldPop
    }
  }, [countries, query]);

  const popChartCountries = filteredCountries.filtered.map(
    country => ({
      name: country.name.common,
      pop: country.population
    })
  ).sort((a, b) => b.pop - a.pop)

  const langChartCountries = useSortCountries(filteredCountries.filtered, 'languages');

  const handleChange = e => setQuery(e.target.value);

  const toTop = () => {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const toBottom = () => {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  const showPop = () => {
    setChart('pop');
  }

  const showLang = () => {
    setChart('lang');
  }

  return (
    <>
      <TitleBox
        total={countries.length}
        hasContent={query != ''}
        content={filteredCountries.filtered.length}
      />
      <div className='search-align'>
        <SearchBar handleChange={handleChange} text={query} />
        <IconButton img={barChart} onClick={toBottom} />
      </div>
      <CountriesList countries={filteredCountries.filtered} />
      <div className='chart-align'>
        <Chart chart={chart} worldPop={filteredCountries.worldPop} countries={
          chart === 'pop' ? popChartCountries : langChartCountries
        }>
          <TextButton text={'Population'} onClick={showPop} />
          <TextButton text={'Languages'} onClick={showLang} />
        </Chart>
        <IconButton img={upArrow} onClick={toTop} />
      </div>
    </>
  )
}
