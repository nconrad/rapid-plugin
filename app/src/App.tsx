import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState<string[]>()

  useEffect(() => {
    const query = {start: "-1m", filter: {vsn: "W097"}}
    fetch("https://data.sagecontinuum.org/api/v1/query", {
        method: 'POST',
        body: JSON.stringify(query)
    }).then(res => res.text())
      .then(text => setData(text.split('\n')))
  }, [])

  return (
    <ul>
      {data?.map(record => <li>{record}</li>)}
    </ul>
  )
}

export default App
