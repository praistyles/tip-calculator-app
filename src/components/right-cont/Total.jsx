import './Total.css'

export function Total({ amount }) {
    return(
        <div
            className="total-amount-js">
            <div>
                <h3>Total</h3>
                <p>/ person</p>
            </div>
            <p>${amount.toFixed(2)}</p>
            
        </div>

    );
}