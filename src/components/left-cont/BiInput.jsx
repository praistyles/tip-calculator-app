import './BiInput.css';
import React from "react";

export function BiInput({ inputValue, setInputValue }) {
    function handleChange(e) {
        setInputValue(e.target.value);
    }

    return (
        <div className="bi-input">
            <p>Bill</p>

            <div className="inner-input-js">
                <span className='dollar-js'>$</span>
                <input 
                    type="number"
                    min="0"
                    step="0.01"
                    aria-label="Bill amount"
                    placeholder="0.00"
                    value={inputValue} 
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
