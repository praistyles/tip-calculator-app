import './RightCont.css'

import { ResetButton } from "./ResetButton";
import { Tip } from "./Tip";
import { Total } from "./Total";

export function RightCont({ tipPerPerson, totalPerPerson, onReset }) {
    return(
        <div className="right-cont-js">
            <Tip amount={tipPerPerson} />
            <Total amount={totalPerPerson} />
            <ResetButton onReset={onReset} />
        </div>
    );
}