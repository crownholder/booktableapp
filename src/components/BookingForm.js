import React, { useState } from 'react';

const BookingForm1 = () => {
  const [selectedTable, setSelectedTable] = useState('');
  const [chosen,setChosen] = useState(false)

  const selectedValue = document.querySelector('input[name="tableGroup"]:checked')

  let radioValues = []


  const handleRadioChange = (event) => {
    setSelectedTable(event.target.value);
    setChosen(true)
    if(setChosen === true){
      radioValues.push(selectedValue.value);
    }  else{
      console.log('error')
    }
  };


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '17:00',
    numberOfGuests: 1,
    occasion: 'Birthday',
    selectedTable: selectedValue
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true); 
   
  };

  return (
    <div style={{marginTop:'5px',background:'#dfe3ee',padding:'2px'}}>
      {isSubmitted ? (
        <div style={{ margin: '25px' }}>
          <h2>Thank You for Your Booking!</h2>
          <p>
            Name: {formData.firstName} {formData.lastName}
          </p>
          <p>Date: {formData.date}</p>
          <p>Time: {formData.time}</p>
          <p>Number of Guests: {formData.numberOfGuests}</p>
          <p>Occasion: {formData.occasion}</p>
          <p>The table you selected:{formData.selectedTable}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ margin: '25px',marginTop:'100px' }}>
         
         <div>
      <div style={{ display: 'flex', flexDirection: 'column', background:'#dfe3ee',marginTop:'75px'}}>
       
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
          <label htmlFor="res-fname">First Name</label>
          <br />
          <input
            id="res-fname"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="res-lname">Last Name</label>
          <br />
          <input
            id="res-lname"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="res-date">Choose A Date</label>
          <br />
          <input
            id="res-date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <br />
          <label>Choose Time</label><br />
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select><br />
          <label htmlFor="occasion">Occasion</label><br />
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select><br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default BookingForm1;
