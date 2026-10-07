import './LeftCont.css'

import { BiInput } from "./BiInput";
import { PeopleAmount } from "./PeopleAmount";
import { TipPercent } from "./TipPercent";

export function LeftCont({ bill, setBill, tipPercent, setTipPercent, people, setPeople }) {
    return(
        <div className="left-cont-js">
            <BiInput inputValue={bill} setInputValue={setBill} />
            <TipPercent tipPercent={tipPercent} setTipPercent={setTipPercent} />
            <PeopleAmount people={people} setPeople={setPeople} />
        </div>
    );
}