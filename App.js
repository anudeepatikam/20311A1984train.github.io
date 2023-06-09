import './App.css';
import React from 'react';
import About from './station.js';

function App() {
  return (
    <div className="App">
      
      <h1>Train Scheduler</h1> 
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Train Number</th>
            <th>Train Name</th>
            <th>Arraival Time</th>
            <th>Departure Time</th>
            <th>From</th>
            <th>To</th>
            <th>Sleeper Price</th>
            <th>AC Price</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>12345</td>
            <td>Narayanadri Express</td>
            <td>8:00 PM</td>
            <td>8:10 PM</td>
            <td>Secunderabad</td>
            <td>Tirupati</td>
            <td>450</td>
            <td>950</td>
          </tr>
          <tr>
          <td>2</td>
            <td>54321</td>
            <td>Charminar Express</td>
            <td>8:45 PM</td>
            <td>8:55 PM</td>
            <td> New Delhi</td>
            <td>Secunderabad</td>
            <td>450</td>
            <td>950</td>
          </tr>
          <tr>
          <td>3</td>
            <td>32415</td>
            <td>Grand Trunk Express</td>
            <td>9:30 PM</td>
            <td>9:10 PM</td>
            <td>Chennai</td>
            <td>New Delhi</td>
            <td>450</td>
            <td>950</td>
          </tr>
          <tr>
          <td>4</td>
            <td>45322</td>
            <td>Vishaka Express</td>
            <td>10:30 PM</td>
            <td>10:40 PM</td>
            <td>Vishakapatnam</td>
            <td>Mumbai</td>
            <td>450</td>
            <td>950</td>
          </tr>
          <tr>
          <td>5</td>
            <td>42315</td>
            <td>BagyaNagar Express</td>
            <td>11:30 PM</td>
            <td>11:40 PM</td>
            <td>Ballaharsha</td>
            <td>Secunderabad</td>
            <td>450</td>
            <td>950</td>
          </tr>
        </tbody>
      </table>
      <button id="bt"> Next Page</button>
    </div>
  );
}

export default App;