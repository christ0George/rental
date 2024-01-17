import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const Cars = () => {
  const [inputs, setInputs] = useState({
    carid: "",
    company: "",
    model: "",
    no: "",
    color: "",
    fuel: "",
    description: "",
    photo: "",
    RC: ""
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handlePhotoChange = (e, photoname) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setInputs((prevData) => ({
        ...prevData,
        [photoname]: reader.result,
      }));
      alert(`${photoname} uploaded successfully!`);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Perform validation before submitting
    if (
      !inputs.fuel ||
      !inputs.carid ||
      !inputs.no ||
      !inputs.color ||
      !inputs.description ||
      !inputs.RC ||
      !inputs.photo
    ) {
      alert('Please fill in all fields.');
    } else {
      alert('Form submitted successfully!');
      // If all fields are filled, proceed with form submission logic
      axios.post("http://localhost:3005/newcar", inputs)
        .then((response) => {
          // Handle the response after a successful submission
        
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <center>
        <h1>Car Registration</h1>

        <TextField
          name='carid'
          id="outlined-password-input"
          label="Car ID"
          type="string"
          value={inputs.carid}
          onChange={inputHandler}
        />
        <br />
        <br />

        <TextField
          name="company"
          id="outlined-password-input"
          label="Company Name"
          type="string"
          value={inputs.company}
          onChange={inputHandler}
        />
        <br />
        <br />

        <TextField
          name='model'
          id="outlined-password-input"
          label="Model Name"
          type="string"
          value={inputs.model}
          onChange={inputHandler}
        />
        <br />
        <br />

        <TextField
          name='no'
          id="outlined-password-input"
          label="Vehicle No"
          type="string"
          value={inputs.no}
          onChange={inputHandler}
        />
        <br />
        <br />

        <TextField
          name='color'
          id="outlined-password-input"
          label="Color"
          type="string"
          value={inputs.color}
          onChange={inputHandler}
        />
        <br />
        <br />

        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-label">Fuel</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="fuel"
            value={inputs.fuel}
            label="Fuel Type"
            onChange={inputHandler}>
            <MenuItem value="Petrol">Petrol</MenuItem>
            <MenuItem value="Diseal">Diseal</MenuItem>
            <MenuItem value="Electric">Electric</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />

        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          name="description"
          multiline
          maxRows={6}
          value={inputs.description}
          onChange={inputHandler}
        />
        <br />
        <br />

        <label>
          Car Photo:
          <input
            type="file"
            name="carphoto"
            onChange={(e) => handlePhotoChange(e, "photo")}
            accept="image/*" />
          <br />
          <br />
        </label>

        <label>
          RC Photo:
          <input
            type="file"
            name="RC"
            onChange={(e) => handlePhotoChange(e, "RC")}
            accept="image/*"
          />
        </label>
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </center>
    </div>
  );
};

export default Cars;
