import React, { useState } from 'react'; 

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    area: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic if needed
  };

  return (
    <div className="App">
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <br />
        <label>
          Area:
          <input type="text" name="area" value={formData.area} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {formData.name && (
        <div>
          <h2>Submitted Information</h2>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
          <p>Area: {formData.area}</p>
        </div>
      )}
    </div>
  );
}

export default App;
