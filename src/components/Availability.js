import React, { useState } from 'react';

function Availability(props) {
  const [selectedTable, setSelectedTable] = useState('');

  const handleRadioChange = (event) => {
    setSelectedTable(event.target.value);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', background:'#dfe3ee',marginTop:'75px'}}>
        <h3 style={{ margin: '25px' }}>{props.title}</h3>
        <div style={{ display: 'inline-flex', flexDirection: 'row' }}>
          <label htmlFor='radiobtn1'>Table 1</label>
          <input
            id='radiobtn1'
            type='radio'
            name='tableGroup'
            value='Table 1'
            onChange={handleRadioChange}
          /><br />
          <label htmlFor='radiobtn2'>Table 2</label>
          <input
            id='radiobtn2'
            type='radio'
            name='tableGroup'
            value='Table 2'
            onChange={handleRadioChange}
          /><br />
          <label htmlFor='radiobtn3'>Table 3</label>
          <input
            id='radiobtn3'
            type='radio'
            name='tableGroup'
            value='Table 3'
            onChange={handleRadioChange}
          /><br />
          <label htmlFor='radiobtn4'>Table 4</label>
          <input
            id='radiobtn4'
            type='radio'
            name='tableGroup'
            value='Table 4'
            onChange={handleRadioChange}
          /><br />
        </div>
        <div style={{ display: 'inline-flex', flexDirection: 'row' }}>
          <label htmlFor='radiobtn5'>Table 5</label>
          <input
            id='radiobtn5'
            type='radio'
            name='tableGroup'
            value='Table 5'
            onChange={handleRadioChange}
          /><br />
          <label htmlFor='radiobtn6'>Table 6</label>
          <input
            id='radiobtn6'
            type='radio'
            name='tableGroup'
            value='Table 6'
            onChange={handleRadioChange}
          /><br />
          <label htmlFor='radiobtn7'>Table 7</label>
          <input
            id='radiobtn7'
            type='radio'
            name='tableGroup'
            value='Table 7'
            onChange={handleRadioChange}
          /><br />
          <label htmlFor='radiobtn8'>Table 8</label>
          <input
            id='radiobtn8'
            type='radio'
            name='tableGroup'
            value='Table 8'
            onChange={handleRadioChange}
          /><br />
        </div>
      </div>
      <div >
        <p>Selected Table: {selectedTable}</p>
      </div>
    </div>
  );
}

export default Availability;
