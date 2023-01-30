import { useState } from 'react'

function App() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])

  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo === '') return
    setToDos((currentToDos) => [...currentToDos, toDo])
    setToDo('')
  }

  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="할 일을 작성해주세요." value={toDo} onChange={onChange}></input>
        <button>할 일 추가</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
