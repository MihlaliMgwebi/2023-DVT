// DOM Manipulation
import './style.css'
import { getAllFlightsInTimeInterval }  from './api.js'

const baseURL = "https://opensky-network.org/api/"
const getAllFlightsInTimeInterval_BaseUrl = 'flights/all?'
const getAllFlightsInTimeInterval_ReqParam_Begin = "begin="//Start of time interval to retrieve flights for as Unix time (seconds since epoch)
// 1517227200
const getAllFlightsInTimeInterval_ReqParam_End = "&end="//End of time interval to retrieve flights for as Unix time (seconds since epoch)
// 1517230800
getAllFlightsInTimeInterval(//https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800
    "get", 
    baseURL 
    + getAllFlightsInTimeInterval_BaseUrl
    + getAllFlightsInTimeInterval_ReqParam_Begin + "1517227200"
    + getAllFlightsInTimeInterval_ReqParam_End + "1517230800"
)

// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
