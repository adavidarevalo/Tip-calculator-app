import React from "react"
import "../styles/components/ResultContainer.scss"

const ResultContainer = ({Result, setResetButton}) =>{
  const {Person, total } = Result
  return(
    <div class="resultContainer">
      <div>
        <p>Tip Amount <span>/ person</span></p>
        <p class="resultValue"><span>$</span>{(Person === 0) ? "0.00" : Person}</p>
      </div>
      <div class="last-child">
        <p>Total <span>/ person</span></p>
        <p class="resultValue"><span>$</span>{(total === 0) ? "0.00" : total}</p>
      </div>
      <button
      onClick={()=> setResetButton(true)}
      >Reset</button>
    </div>
  )
}

export default ResultContainer
