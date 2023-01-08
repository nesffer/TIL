import Button from './Button'
import style from './App.module.css'

function App() {
  return (
    <div>
      <h1 className={style.title}>Hello World!</h1>
      <Button text={'Apply'} />
    </div>
  )
}

export default App
