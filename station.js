import React from 'react';

const About = () => {
  return (
    <div>
      <h1>Train Details</h1>
      <p>This is about Bagyanagar Express.</p>
      <p>The ticket booking starts 120 days in advance, so it is better to book at that time</p>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Station name</th>
            <th>Arrives</th>
            <th>Departs</th>
            <th>Stop Time</th>
            <th>Distance travelled</th>
            <th>Day</th>
            <th>Route</th>
          </tr>
          </thead>
          <tbody>
            <tr>
                <td>1</td>
                <td>Secunderabad Junction</td>
                <td>Starts</td>
                <td>15:25</td>
                <td>0</td>
                <td>0 km</td>
                <td>1</td>
                <td>1</td>
            </tr>
          </tbody>
          </table>
    </div>
  );
};

export default About;