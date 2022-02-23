const Counter = ({ reset, counter, setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Increment {counter}
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        Decrement {counter}
      </button>
      <button onClick={() => reset()}>Reset {counter}</button>
    </div>
  );
};

export default Counter;
