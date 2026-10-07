import './TipPercent.css';

function TipPercentButton({ text, selected, onSelect }) {
    return (
        <button 
            type="button"
            className={`tip-percent-btn${selected ? " selected" : ""}`}
            aria-pressed={selected}
            onClick={onSelect}
        >
            {text}
        </button>
    );
}

function CustomTipInput({ value, onChange }) {
    return (
        <input 
            type="number"
            min="0"
            step="1"
            aria-label="Custom tip percentage"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Custom"
        />
    );
}

export function TipPercent({ tipPercent, setTipPercent }) {
    const presets = [5, 10, 15, 25, 50];

    return (
        <div className="tip-percent">
            Select tip %
            <div className="tip-percent-btns">
                {presets.map((percent) => (
                    <TipPercentButton
                        key={percent}
                        text={`${percent}%`}
                        selected={tipPercent === String(percent)}
                        onSelect={() => setTipPercent(String(percent))}
                    />
                ))}
                <CustomTipInput
                    value={presets.includes(Number(tipPercent)) ? "" : tipPercent}
                    onChange={setTipPercent}
                />
            </div>
        </div>
    );
}





