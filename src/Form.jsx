import { useState } from 'react';

const Form = ({ counter }) => {
  const [name, setName] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  //   const change = (e) => {

  //     setName(e.target.value);
  //   };

  const submit = (e) => {
    e.preventDefault();
    setSubmittedValue(name);
    setName('');
  };

  return (
    <div>
      {name}
      <form>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter something'
        />
        <button onClick={submit}>submit</button>
      </form>
      {submittedValue}
      <h2>Data received from App but belongs to counter {counter}</h2>
    </div>
  );
};

export default Form;
