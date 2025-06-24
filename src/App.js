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
  const [org, setOrg] = useState('');
  const [orgName, setOrgName] = useState('');
  const [error, setError] = useState(false);
  const [showOrg, setShowOrg] = useState(false);

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

  function submit(event) {
    event.preventDefault();
    let tempErros = {};
    if (name.trim() === '') {
      tempErros.name = 'Please enter name';
    }
    if (date !== today) {
      tempErros.date = 'Please select todays date';
    }
    if (email === '' || !email.includes('@')) tempErros.email = 'Please enter valid email id';
    if (signature === '') tempErros.signature = 'Please enter signature';
    if (signature === '') tempErros.signature = 'Please enter signature';
    if (Object.keys(tempErros).length > 0) {
      setError(tempErros);
      return
    } else {
      setError({});
      setSubmitted(true);
      localStorage.clear()
    }
  }

  function organization(e) {
    const value = e.target.value.toLowerCase();
    debugger;
    if (value === 'yes') {
      setShowOrg(true);
    } else {
      setShowOrg(false);
    }
    setOrg(value)
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
              onClick={() => window.print()}
            >
              Print
            </button>
          </>
        ) : (
          <form onSubmit={submit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error.name && <p className="text-red-500 mt-2">{error.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error.email && <p className="text-red-500 mt-2">{error.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Phone number</label>
              <input
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
                  type="radio"
                  value="female"
                  checked={gender === 'female'} onChange={(e) => setGender(e.target.value)}
                  className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                Female
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Are You Currently Employed?</label>
              <input
                type="text"
                value={org}
                onChange={organization}
                placeholder="Enter your signature"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {showOrg && <div className="mb-4">
              <label className="block text-sm font-medium mb-1">if yes please mention organization name</label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Enter your signature"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Signature</label>
              <input
                type="text"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                placeholder="Enter your signature"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error.signature && <p className="text-red-500 mt-2">{error.signature}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Enter your signature"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error.date && <p className="text-red-500 mt-2">{error.date}</p>}
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
