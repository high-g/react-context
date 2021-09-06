import { FruitContext } from './index'

const App = () => {
  return (
    <FruitContext.Consumer>
      {(value) => {
        const { fruits } = value
        return fruits.map((val, index) => <p key={index}>{val}</p>)
      }}
    </FruitContext.Consumer>
  )
}

export default App
