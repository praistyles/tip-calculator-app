import './Tip.css'

export function Tip({ amount }) {
    return(
        <div className="tip-amount-js">
            <div>
                <h3>Tip Amount</h3>
                <p>/ person</p>
            </div>
            <p>${amount.toFixed(2)}</p>
            
        </div>
        

    );
}