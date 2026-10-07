import './AppCont.css'
import { useState } from "react";

import { LeftCont } from "./left-cont/LeftCont";
import { RightCont } from "./right-cont/RightCont";

export function AppCont() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [people, setPeople] = useState("");

  const billAmount = Math.max(Number(bill) || 0, 0);
  const tipRate = Math.max(Number(tipPercent) || 0, 0);
  const peopleCount = Number(people);
  const validPeopleCount = Number.isFinite(peopleCount) && peopleCount > 0;
  const tipPerPerson = validPeopleCount
    ? (billAmount * tipRate) / 100 / peopleCount
    : 0;
  const totalPerPerson = validPeopleCount
    ? (billAmount * (1 + tipRate / 100)) / peopleCount
    : 0;

  function resetCalculator() {
    setBill("");
    setTipPercent("");
    setPeople("");
  }

  return (
    <div className="main-cont-js">
      <LeftCont
        bill={bill}
        setBill={setBill}
        tipPercent={tipPercent}
        setTipPercent={setTipPercent}
        people={people}
        setPeople={setPeople}
      />
      <RightCont
        tipPerPerson={tipPerPerson}
        totalPerPerson={totalPerPerson}
        onReset={resetCalculator}
      />
    </div>
  )
}