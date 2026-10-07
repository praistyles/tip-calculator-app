import './PeopleAmount.css'

export function PeopleAmount({ people, setPeople }) {
    const hasZeroPeople = people !== "" && Number(people) === 0;

    return (
        <div className="people-amount">
            <div className="people-label">
                <p>Number of People</p>
                {hasZeroPeople && <p className="people-error" role="alert">Can't be zero</p>}
            </div>

            <div className="ppl-inner-js">
                <span>ppl</span>
                <input 
                    type="number"
                    min="0"
                    step="1"
                    aria-label="Number of people"
                    aria-invalid={hasZeroPeople}
                    placeholder="0"
                    value={people}
                    onChange={(event) => setPeople(event.target.value)}
                />
            </div>
        </div>
    );
}