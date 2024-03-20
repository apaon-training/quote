import logo from './logo.svg';
import './App.css';
//This will importe json content into 'quote'
import quote from './json-files/JSON exercise.json'

function App() {
  return (
    <div className="App">
      {/* <p>this is apaon</p> */}
      {/* JSON.stringy is a fucntion which converts json object to string */}

      <h1> { quote['Flight']['Numbers_of_passengers']} </h1>
      <h3> { quote['Flight']['Reward'] } </h3>
      <h2> { quote['Flight']['Return']} </h2>
      <h4> { quote['Flight']['class']} </h4>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to apaon</h1>
        <p>google</p>
        <pre>
          Johny, Johny!
Yes, Papa
Eating sugar?
No, Papa
Telling lies?
No, Papa
Open your mouth!
Ha! Ha! Ha!
Ha! Ha! Ha!
</pre>
        <h2><b>Interesting Day</b></h2>
        <p>"All our dreams can come true, if we have the courage to pursue them." — Walt Disney.</p>
        <p>Some men see things as they are and say why. 234</p>
        <h6><u>fun Afternoon</u></h6>
     
        <h2>HTML Image</h2>
        <p>html</p>
        <p>css</p>
        <p>java</p>
        <p1>"Make it <b>work</b>, make it <b>right</b>, make it <b>fast</b>."</p1>
        <p> SHAIK KHAJA MOINUDDIN-V N V PRANAVI- SAI VARA PRASAD-VISHNU-RAMAKRISHNA-SAI PRANAV-SAI-APAON TECHNOLOGIES
          Edit <code>src/App.js</code> and save to reload.
        </p> from kurnool-Apaon sandeep
        <p>"Don't wait. The time will never be just right." — Napoleon Hill 894 </p>
        <p>sandeep149</p>
        <p>sai</p>
        <p>apaon technologies</p>
        <p>Try and Try until you reach the <strong>Goal.</strong></p>
        <p>apaon technologies 1999</p>
        <p>nani</p>
 main
        <p>new task 654 152</p>
        <h3>Welcome to day 6</h3>
        <h1>This is a apaon this </h1>
        <h1>My First Heading in Progress</h1>
        <p>This is testing branch changes 123</p>
        <p>This is PR testing branch changes 786</p>
        <h3>"Empower Tomorrow, Today!"</h3>
        <p> <mark> Day start with new task</mark></p>
        <button>Sales qoute 354 986</button>
        <h>"Unite, Innovate, Thrive: Together, Anything is Possible!"</h>
        <b>apaon</b>
        <strong>"Failure is success in progress</strong>
        <button>task new</button>
        <p>Steps to follow merge and creating branches testing in prog res</p>
        <p>"Unite for Progress, Inspire in  Change."</p>
        <pre>
Text in a pre element
is displayed in a fixed-width
font, and it preserves
both      spaces and
line breaks
Done.. testing pr
</pre>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>GOOD AFTERNOON.</p>
          <p>GOOD EVENING</p>
          <p>Hope your day is bright and super</p>
          <p>THIS IS APAON TECHNOLOGIES KURNOOL.</p>
          <p>Day is always productive with best time to learn.</p>
          Learn React let's start
          <p>Revising PR concepts and practising it test review1~</p>
        </a>
      </header> */}
    </div>
  );
}

export default App;
