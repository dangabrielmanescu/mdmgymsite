import React, { useState } from "react";
import './CaloriesCalculator.css';

function CaloriesCalculator() {
    const [weight, setWeight] = useState('');
    const [selectedFrequency, setSelectedFrequency] = useState('');
    const [result, setResult] = useState('');

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const handleFrequencySelection = (e) => {
        setSelectedFrequency(e.target.value);
    };

    const calculateResult = () => {
        if (weight && selectedFrequency) {
            const weightInKg = parseFloat(weight);
            let value;
            switch (selectedFrequency) {
                case '1.1':
                    value = 1.1;
                    break;
                case '1.2':
                    value = 1.2;
                    break;
                case '1.3':
                    value = 1.3;
                    break;
                default:
                    value = 0;
            }
            const resultValue = weightInKg * 24 * value;
            setResult(resultValue.toFixed(2)); 
        } else {
            setResult('');
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="weight">Enter Your Weight (kg):</label>
                <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={handleWeightChange}
                    placeholder="Enter weight in kg"
                />
            </div>

            <div className="dropdown">
                <select value={selectedFrequency} onChange={handleFrequencySelection}>
                    <option value="">Select Frequency</option>
                    <option value="1.1">1.1 - Not working out at all</option>
                    <option value="1.2">1.2 - Workout 2 times a week</option>
                    <option value="1.3">1.3 - Workout 3 or more times per week</option>
                </select>
            </div>

            <button className="calculate-btn" onClick={calculateResult}>
                Calculate
            </button>

            {result && (
                <div className="result">
                    <p>Result: {result}</p>
                </div>
            )}
        </div>
    );
}
  
export default CaloriesCalculator;
