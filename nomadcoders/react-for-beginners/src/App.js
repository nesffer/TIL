import { useState, useEffect } from 'react'

function App() {
  console.log('Call API')
  const [counter, setCounter] = useState(0)
  const [search, setSearch] = useState('')
  const onClick = () => setCounter((prev) => prev + 1)
  const onChange = (event) => setSearch(event.target.value)
  useEffect(() => {
    if (search && search.length > 5) {
      console.log('Searching: ', search)
    }
  }, [search])
  return (
    <div>
      <input type="text" placeholder="여기에 검색" onChange={onChange} value={search}></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default App
