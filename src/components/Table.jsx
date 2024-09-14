import React from 'react';

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((satellite) => (
          <tr key={satellite.id}>
            <td>{satellite.name}</td>
            <td>{satellite.type}</td>
            <td>{satellite.launchDate}</td>
            <td>{satellite.operational ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
