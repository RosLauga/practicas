import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BreakingBad from './components/BreakingBad';
import CardPersonaje from './components/cardpersonaje'
function App() {
  const [detail, setDetail] = useState()
  const [ID, setID] = useState(1)

  useEffect(() => {

    fetch(`https://www.breakingbadapi.com/api/characters/${ID}`)
      .then(data => data.json())
      .then(info => setDetail(info))

  }, [ID])

  console.log("ID", ID)

  const handleChange = (id) => {
    setID(id)
  }

  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<BreakingBad onDetails={handleChange} />} />
          <Route path="/:id" element={<CardPersonaje detail={detail} />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
