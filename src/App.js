import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState(5)
  const [datas, setDatas] = useState([])
  const number = 1

  const handleInput = e => {
    setData(e.target.value)
  }

  const handleSubmit =async() => {
    
    var myArray = Array(data).fill(Array(data).fill(number))
    setDatas(myArray)
  }
  return (
    <div className='App'>
      <div>masukan nilai n</div>
      <input type='number' onChange={e => handleInput(e)} value={data} />
      <button type='button' onClick={() => handleSubmit()}>
        submit
      </button>
      <center>
      <div style={{ width: '70%' }}>
        <div>
          {datas.map((items, index) => {
            return (
              <td>
                {items.map((subItems, sIndex) => {
                  return (
                    <tr>
                      <div
                        style={{
                          width:50,
                          height:50,
                          borderStyle: 'solid',
                          borderWidth: 1,
                          borderColor: 'black'
                        }}
                      >
                        {subItems}
                      </div>
                    </tr>
                  )
                })}
              </td>
            )
          })}
        </div>
      </div>
      </center>
    </div>
  )
}

export default App
