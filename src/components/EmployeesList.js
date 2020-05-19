import React, { useState, useEffect } from "react";
import useEmployees from "../hooks/useEmployees";

const EmployeesList = props => {
  const [value, setValue] = useState('');
  const { filtered, filter } = useEmployees();

  useEffect(() => {
    filter(value);
  }, [ value ]);

  return (
    <React.Fragment>
      <div className="controls">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="filter-input"
          data-testid="filter-input" />
      </div>
      <ul className="employees-list">
        { filtered.map(employee => (
          <li key={employee.name} data-testid="employee">{employee.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default EmployeesList;