import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "http://20.244.56.144/evaluation-service";

const Average = () => {
  const [numberId, setNumberId] = useState("p");
  const [result, setResult] = useState(null);

  const fetchNumbers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${numberId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setResult(response.data);
    } catch (err) {
      alert("Failed to fetch data");
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>

      <select value={numberId} onChange={(e) => setNumberId(e.target.value)}>
        <option value="primes">Prime (p)</option>
        <option value="fibo">Fibonacci (f)</option>
        <option value="even">Even (e)</option>
        <option value="rand">Random (r)</option>
      </select>

      <button onClick={fetchNumbers}>Get Numbers</button>

      {result && (
        <div>
          <p>
            <strong>Window Previous State:</strong>{" "}
            {JSON.stringify(result.windowPrevState)}
          </p>
          <p>
            <strong>Window Current State:</strong>{" "}
            {JSON.stringify(result.windowCurrState)}
          </p>
          <p>
            <strong>Numbers Fetched:</strong> {JSON.stringify(result.numbers)}
          </p>
          <p>
            <strong>Average:</strong> {result.avg.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Average;