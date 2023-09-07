import React from 'react'

const ColorButton = ({color, myColorName}) => {
  return (
    <button type='button' className='w-10 h-10 rounded-full border-2 border-white' style={{"backgroundColor":color}} onClick={myColorName}>
        <span className='hidden'>{color}</span>
    </button>
  )
}

export default ColorButton