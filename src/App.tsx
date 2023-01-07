import './App.css'

function App() {
  const date = new Date();

  return (
    <div className="App">
      <div className="clock">
        {date.getHours()}:{date.getMinutes().toString().padStart(2, "0")}:{date.getSeconds().toString().padStart(2, "0")}
      </div>
      <div className='not-clock'>
        <div className='buttons'>
          <button>Reset</button>
          <button>Pause</button>
          <button>Options</button>
        </div>
        <div className="options">
          <div className="option">Some option with text</div>
          <div className="option inactive">Some option</div>
          <div className="option ">Some option & text</div>
          <div className="option">Some opt.</div>
        </div>
      </div>
    </div>
  )
}

export default App
