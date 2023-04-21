import classes from './Dropdown.module.css';
import { useState } from "react";

function Dropdown() {
  const [selectedValues, setSelectedValues] = useState([]);

  const data = [{
    label: "H1"
  }, {
    label: "H2"
  }, {
    label: "H3"
  }]

  const values = [
    {
      value: "d1",
      title: "D1"
  }, {
      value: "d2",
      title: "D2"
  }, {
      value: "d3",
      title: "D3"
  }]

  const handleDropdownChange = (label, value) => {
    setSelectedValues((prevSelectedValues) => {
      const newSelectedValues = [...prevSelectedValues];
      const index = newSelectedValues.findIndex(
        (selectedValue) => selectedValue.label === label
      );
      if (index !== -1) {
        newSelectedValues[index].value = value;
      } else {
        newSelectedValues.push({ label, value });
      }
      return newSelectedValues;
    });
  }

  const isOptionDisabled = (label, value) => {
    return selectedValues.some(
      (selectedValue) =>
        selectedValue.label !== label && selectedValue.value === value
    );
  }

  return (
    <div className={classes.dropdown}>
      {data.map((item) => (
        <div key={item.label}>
          <label>{item.label}</label>
          <select
            value={selectedValues.find((selectedValue) => selectedValue.label === item.label ) ?.value || ""}
            onChange={(event) => handleDropdownChange(item.label, event.target.value)
            }
          >
            {values.map((innterItem) => (
              <option
                key={innterItem.value}
                value={innterItem.value}
                disabled={isOptionDisabled(values.title, innterItem.value)}
              >
                {innterItem.title}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
