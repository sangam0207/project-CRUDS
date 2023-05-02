import React, { useState } from 'react';
import daata from './data.json';

function App() {
  const [JsonData,setJsonData]=useState(daata);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [rows, setRows] = useState([]);
 
  const handleSelectRow = (rowIndex) => {
    const newRows = [...rows];
    newRows[rowIndex].selected = !newRows[rowIndex].selected;
    setRows(newRows);
  };

  const handleDeleteRow = (rowIndex) => {
    const newRows = [...rows];
    newRows.splice(rowIndex, 1);
    setRows(newRows);
  };

  const handleUpdateRow = (rowIndex, updatedRow) => {
    const newRows = [...rows];
    newRows[rowIndex] = updatedRow;
    setRows(newRows);
  };

  const handleAddRow = () => {
    const newRows = [...rows];
    const newRow = { id: newRows.length + 1, name: '', phone: '', email: '', hobbies: '', selected: false };
    newRows.push(newRow);
    setRows(newRows);
  };

  const handleSaveChanges = () => {
    // Implement save functionality here
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleHobbiesChange = (e) => {
    setHobbies(e.target.value);
  };

  const handleSaveClick = () => {
    // Implement save functionality here
    fetch('t/src/data.json')
  .then(response => response.json())
  .then(data => setJsonData(data))
  .catch(error => console.error(error));
    console.log(JsonData);
  };
  

const datafil=(e)=>{
    
}

  return (
    <>
    <div>
      <form onSubmit={datafil}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Hobbies:
          <input type="text" value={hobbies} onChange={handleHobbiesChange} />
        </label>
        <br />
        <button type="button" onClick={handleSaveClick}>Save</button>
      </form>
    </div>
     <div>
     <table>
       <thead>
         <tr>
           <th>Select</th>
           <th>ID</th>
           <th>Name</th>
           <th>Phone Number</th>
           <th>Email</th>
           <th>Hobbies</th>
           <th>Update/Delete</th>
         </tr>
       </thead>
       <tbody>
         {JsonData.map((row, index) => (
           <tr key={index}>
             <td>
               <input type="checkbox" checked={row.selected} onChange={() => handleSelectRow(index)} />
             </td>
             <td>{row.id}</td>
             <td>
               <input
                 type="text"
                 value={row.name}
                 onChange={(e) => handleUpdateRow(index, { ...row, name: e.target.value })}
               />
             </td>
             <td>
               <input
                 type="text"
                 value={row.phone}
                 onChange={(e) => handleUpdateRow(index, { ...row, phone: e.target.value })}
               />
             </td>
             <td>
               <input
                 type="text"
                 value={row.email}
                 onChange={(e) => handleUpdateRow(index, { ...row, email: e.target.value })}
               />
             </td>
             <td>
               <input
                 type="text"
                 value={row.hobbies}
                 onChange={(e) => handleUpdateRow(index, { ...row, hobbies: e.target.value })}
               />
             </td>
             <td>
               <button type="button" onClick={() => handleDeleteRow(index)}>Delete</button>
             </td>
           </tr>
         ))}
       </tbody>
     </table>
     <button type="button" onClick={handleAddRow}>Add</button>
     <button type="button" onClick={handleSaveChanges}>Save Changes</button>
      
   </div>
   </>
  );
}

export default App;

