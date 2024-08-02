import React, { useState } from 'react';
import '../Styles/CSS/expirationTracker.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const ExpirationTracker = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleAddFoodItem = () => {
    if (foodName && foodType && expirationDate) {
      const newFoodItem = {
        name: foodName,
        type: foodType,
        expirationDate: new Date(expirationDate),
      };
      setFoodItems([...foodItems, newFoodItem]);
      setFoodName('');
      setFoodType('');
      setExpirationDate('');
    }else{
      alert('Empty')
    }
  };

  const getStatus = (expirationDate) => {
    const currentDate = new Date();
    const dateDiff = (expirationDate - currentDate) / (1000 * 60 * 60 * 24);

    if (dateDiff < 0) {
      return 'Expired';
    } else if (dateDiff <= 3) {
      return 'Expiring Soon';
    } else {
      return 'Fresh';
    }
  };

  return (
    <div className='expirationTrackerContainer'>
      <div className="navContainer">
        <NavBar />
      </div>
      <div className="expirationTrackerMainContainer">
        <h1 className="expirationTrackerTitle">Expiration Tracker</h1>
        <div className="formContainer">
          <input
            type="text"
            placeholder="Food Name"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            className="inputField"
          />
          <input
            type="text"
            placeholder="Food Type"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            className="inputField"
          />
          <input
            type="date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            className="inputField"
          />
          <button onClick={handleAddFoodItem} className="addButton">Add Food Item</button>
        </div>
        <table className="foodTable">
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Food Type</th>
              <th>Expiration Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.expirationDate.toDateString()}</td>
                <td className={getStatus(item.expirationDate).replace(' ', '').toLowerCase()}>{getStatus(item.expirationDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default ExpirationTracker;
