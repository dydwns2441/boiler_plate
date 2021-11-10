import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { RootReducerType } from './store/store'
import { fetchData } from './actions/actions'

function App() {
  const [name, setName] = useState('')
  const state = useSelector((state: RootReducerType) => state.reducer)
  const dispatch = useDispatch()

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)
  const HandleSearch = () => {
    dispatch(fetchData(name))
  }

  return (
    <div>
      <h1>boiler-plate</h1>
      <input value={name} onChange={handleName} />
      <button type="button" onClick={HandleSearch}>
        찾기
      </button>
      <h3>보유 능력</h3>
      {state.success && (
        <div>
          {state.items?.abilities.map((item, idx) => {
            return (
              <div className="ability" key={item.ability.name}>
                <p>
                  {idx + 1}-{item.ability.name}
                </p>
                <p>{item.slot}</p>
              </div>
            )
          })}
          <img src={state.items?.sprites.front_default} alt="아이템" />
        </div>
      )}
    </div>
  )
}

export default App
