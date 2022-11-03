import React, { useState, useEffect } from "react";
import "./Index.css";
export default function Index() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [num, setNum] = useState(10);
  //dijalankan 1 kali
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //dijalankan terus setiap ada perubahan count
  useEffect(() => {
    if (count > 0) {
      alert("component will update & count ${count}");
    }
  }, [count]);

  //dijalankan terus menerus
  useEffect(() => {
    console.log("spam console kuy");
  });

  useEffect(() => {
    setNum(0);
  });

  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  const getInput = () => {
    setInput(document.getElementById("input_form").value);
  };
  return (
    <div className="Main">
      <p className="Text"> Learn useEffect</p>
      <p>KELOMPOK17</p>
      <ul>
        {data.slice(0, 10).map((value) => (
          <li key={value.id}>{value.title}</li>
        ))}
      </ul>
      <p className="Text">{count}</p>
      <div className="ViewButton">
        <div className="ViewButton2">
          <button className="Button" onClick={countUp}>
            Naik
          </button>
        </div>
        <div className="ViewButton1">
          <button className="Button" onClick={countDown}>
            Down
          </button>
        </div>
      </div>
      <div className="tugas1">
        <h1 className="output">{input}</h1>
        <input id="input_form" type="text" />
        <button className="Button" onClick={getInput}>
          submit
        </button>
      </div>
      <div className="tugas2">
        <h1 className="output">{num}</h1>
      </div>
    </div>
  );
}
