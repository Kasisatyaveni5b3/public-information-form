import './App.css';
import './index.css';
import { useState, useEffect } from 'react';

function App() {
  const today = new Date().toISOString().split("T")[0]
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || ""
  });
  const [signature, setSignature] = useState(() => {
    return localStorage.getItem("signature") || ""
  });
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("email") || ""
  });
  const [number, setPhoneNumber] = useState(() => {
    return localStorage.getItem("number") || ""
  });
  const [gender, setGender] = useState(() => {
    return localStorage.getItem("gender") || ""
  });
  const [date, setDate] = useState(() => {
    console.log(today)
    return localStorage.getItem("date") || today
  });
  const [submitted, setSubmitted] = useState(false);
  const [error,setError] = useState(false);

  useEffect(() => {
    localStorage.setItem("name", name)
  }, [name]);
  useEffect(() => {
    localStorage.setItem("signature", name)
  }, [name]);
  useEffect(() => {
    localStorage.setItem("email", email)
  }, [email]);
  useEffect(() => {
    localStorage.setItem("number", number)
  }, [number]);
  useEffect(() => {
    localStorage.setItem("gender", gender)
  }, [gender]);

  function handleName(event) {
    setName(event.target.value)
  }

  function handlingDate(e) {
   const newDate = e.target.value;
   console.log(newDate)
   debugger;
   if(newDate !== today ) {
    setError('Please select todays date')
   } else {
    setError('');
    setDate(newDate);
  }
   setDate(newDate)
  }


  function submit(event) {
    event.preventDefault();
    setSubmitted(true);
    localStorage.clear()
  }
  function print() {
    window.print()
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Public Information Form</h2>

        {submitted ? (
          <><p className="text-lg">Name: {name}</p>
            <p className="text-lg">Email: {email}</p>
            <p className="text-lg">Phone number: {number}</p>
            <p className="text-lg">Gender: {gender}</p>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              onClick={print}
            >
              Print
            </button>
          </>
        ) : (
          <form onSubmit={submit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                required
                type="text"
                value={name}
                onChange={handleName}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                required
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Phone number</label>
              <input
                required
                type="text"
                value={number}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Gender</label>
              <label className="flex items-center gap-2">
                <input
                  required
                  type="radio"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  required
                  type="radio"
                  value="female"
                  checked={gender === 'female'} onChange={(e) => setGender(e.target.value)}
                  className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                Female
              </label>
              <label className="flex items-center gap-2">
                <input
                  required
                  type="radio"
                  value="None"
                  checked={gender === 'None'}
                  onChange={(e) => setGender(e.target.value)}
                  className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                None
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Signature</label>
              <input
                required
                type="text"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                placeholder="Enter your signature"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Signature</label>
              <input
                required
                type="date"
                value={date}
                onChange={handlingDate}
                placeholder="Enter your signature"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

}

export default App;
