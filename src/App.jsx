import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {data} from "./data/data"
import Card from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";


function App() {
  const [filter, setFilter] = useState('');

  const [perPage, setPerPage] = useState(12)

  const [currentPage, setCurrentPage] = useState(1)
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = data.filter(
    ({ keywords, title }) =>
      keywords.includes(filter.toLowerCase()) ||
      title.toLowerCase().includes(filter.toLowerCase())
  );
  const pages = Math.ceil(filteredData.length / perPage)

  const lastIndex = currentPage * perPage
  const firstIndex = lastIndex - perPage

  return (
    <>
       <Header onFilterChange={handleFilterChange} />
      <Main>
        <Card data={filteredData} firstIndex={firstIndex} lastIndex={lastIndex} />
      </Main>
      <Footer setPerPage={setPerPage} pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}

export default App;
