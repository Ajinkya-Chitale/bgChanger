import { useState } from 'react'
import './App.css'
import ColorButton from './components/ColorButton';

function App() {
  const [bgColor, setBgColor] = useState('#317a5f');

  const myColorName = (e) => {
    navigator.clipboard.writeText(e.currentTarget.querySelector('span').innerText);
    setBgColor(e.currentTarget.querySelector('span').innerText);
  }

  return (
    <>
      <div className='h-screen' style={{"backgroundColor":bgColor}}>
        <div className='pt-5 w-full flex flex-wrap justify-center gap-4'>
          <ColorButton color="#1c1c9d" myColorName={myColorName} />
          <ColorButton color="#b72942" myColorName={myColorName} />
          <ColorButton color="#008000" myColorName={myColorName} />
          <ColorButton color="#dbdb5a" myColorName={myColorName} />
          <ColorButton color="#47afe1" myColorName={myColorName} />
          <ColorButton color="#9f48a1" myColorName={myColorName} />
          <ColorButton color="#83421c" myColorName={myColorName} />
          <ColorButton color="#562c47" myColorName={myColorName} />
          <ColorButton color="#2c5656d9" myColorName={myColorName} />
          <ColorButton color="#3df50f" myColorName={myColorName} />
          <ColorButton color="#317a5f" myColorName={myColorName} />
          <ColorButton color="#484818" myColorName={myColorName} />
        </div>
      </div>
    </>
  )
}

export default App
