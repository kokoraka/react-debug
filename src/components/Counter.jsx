import * as React from "react"

export default function Counter () {
  const [state, setState] = React.useState(0)
  
  const handleIncrease = () => {
    setState((prevState) => {
      return prevState++
    })
  }

  return (
    <>
      <div>
        Current: {state}
      </div>
      <div>
        <button onClick={handleIncrease}>
          Increase
        </button>
      </div>
    </>
  )
}
