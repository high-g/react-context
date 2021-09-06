import { useContext } from 'react'
import { FruitContext } from './index'

const App = () => {
  const { fruits } = useContext(FruitContext)
  console.log('fruits', fruits)
  return (
    <>
      {fruits.map((val, index) => (
        <p key={index}>{val}</p>
      ))}
    </>
  )
}

export default App
