import { useReducer } from 'react'
import './App.css'

// 요리사
const reducer = (state, action) => {
  if (action.type === 'Plus' && !action.error) {
    return state + 2
  }
  if (action.type === 'Plus' && action.error) {
    return state + 1
  }
  if (action.type === 'Minus') {
    return state - 1
  } else {
    return state
  }
}
// 경우의 수
// 메뉴에 따른 조리 법

function App() {
  const [number, dispatch] = useReducer(reducer, 0)
  // dispatch: 종업원
  // action: 메뉴

  //손님(함수)
  const onIncrease = () => {
    // setNumber((prev) => prev + 1)
    dispatch({ type: 'Plus', error: false })
    // 종업원(dispatch)에게 메뉴(action) 전달
  }

  const onDecrease = () => {
    // setNumber((prev) => prev - 1)
    dispatch({ type: 'Minus', error: true })
  }

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default App
