import React, {useState, useEffect} from "react"
import "../styles/components/Main.scss"
import ResultContainer from "./ResultContainer"
import person from "../assets/image/person.svg"

const Main = () => {
  const [ResetButton, setResetButton] = useState(false)
  const [Data, setData] = useState({
    bill: "",
    people: "",
    porcent: ""
  })
  const [Result, setResult] = useState({
    total: 0,
    Person: 0
  })

  useEffect(() => {
    if(Data.bill !== "" && Data.people !== "" && Data.porcent !== ""){
      MathResult()
    }
  }, [Data])

  useEffect(() => {
    if(ResetButton){
      setData({
      bill: "",
      people: "",
      porcent: ""
      })
      setResult({
       total: 0,
       Person: 0
      })
    }
  }, [ResetButton])

  const MathResult = () => {
    let division = ((Number(Data.bill) / 100) * Number(Data.porcent)) + Number(Data.bill)
    setResult({
      total: division * Number(Data.people),
      Person: division 
    })
  }



  const ChangeData = (e) =>{
    setData({
      ...Data,
      [e.target.name]: e.target.value
    })
  } 
  return(
    <>
      <h2>Spli tter</h2>
      <section>
        <div>
          <form>
            <label>Bill</label>
            <div>
              <p>$</p>
              <input
              type="number"
              name="bill"
              value={Data.bill}
              onChange={(e)=>ChangeData(e)}
              placeholder="0.00"
              />
            </div>
          </form>
          <div class="ButtonsContainer">
            <h3>Select Tip %</h3>
            <div>
            <button
            name="porcent"
            value="5"
            onClick={(e)=>ChangeData(e)}
            >5%</button>
            <button
            name="porcent"
            value="10"
            onClick={(e)=>ChangeData(e)}
            >10%</button>
            <button
            name="porcent"
            value="15"
            onClick={(e)=>ChangeData(e)}
            >15%</button>
            <button
            name="porcent"
            value="25"
            onClick={(e)=>ChangeData(e)}
            >25%</button>
            <button
            name="porcent"
            value="50"
            onClick={(e)=>ChangeData(e)}
            >50%</button>
            <input
            type="number"
            placeholder="Custom"
            name="porcent"
            value={Data.porcent}
            onChange={(e)=>ChangeData(e)}
            />
            </div>
          </div>
          <form>
            <label>Number of People</label>
            <div>
              <img src={person} alt="Person Icon"/>
              <input
              type="number"
              name="people"
              value={Data.people}
              onChange={(e)=>ChangeData(e)}
              placeholder="0.00"
              />
            </div>
          </form>
        </div>
        <ResultContainer 
        Result={Result}
        setResetButton={setResetButton}
        />
      </section>
    </>
  )
}
export default Main