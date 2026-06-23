import "./App.css";

function App() {
  function checkLetter() {
    let ch = document.getElementById("letter").value.toLowerCase();

    if (ch === "a" ||ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      document.getElementById("result").innerHTML = "Vowel";
    } else {
      document.getElementById("result").innerHTML = "Consonant";
    }
  }

  return (
    <div class="container">
      <h2>Vowel or Consonant Checker</h2>

      <input
        type="text" id="letter"  maxLength="1" placeholder="Enter a letter" />

      <button onClick={checkLetter}>Check</button>

      <h3 id="result"></h3>
    </div>
  );
}

export default App;