import { options } from 'numeral';
import React from 'react';
import Select from 'react-select';
import FormField from './FormField';
// import 'react-select/dist/react-select.css';


const CustomOption = ({ data, innerRef, innerProps }) => (
  <div ref={innerRef} {...innerProps} className="flex items-center" style={{ marginLeft: "10px", marginRight: "5px",marginBottom: "30px", }}>
    {data.label}
  </div>
);
  const ReactSelect= ({ value, setFieldValue, options, name, id, selectLabel}) => {
    const handleChange = (selectedOption) => {
        setFieldValue(name, selectedOption.value);
    };

   
  
    return (
        <div>
      <label>{selectLabel}</label>
        <Select
          options={options}
          value={options.find((option) => option.name)}
          onChange={handleChange}
          isSearchable
          components={{ Option: CustomOption }}
          id={id}
        />
        </div>
     
    );
  };
  
  export default ReactSelect;
 
  
  
  