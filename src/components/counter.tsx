import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [countUpdate, setCountUpdate] = useState(count);
  console.log('count update ' + countUpdate);

  useEffect(() => {
    setCountUpdate(count); // Update the input field value when the count changes
  }, [count]);

  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount((prevCount) => Math.max(prevCount - 1, 0))}
        >
          ➖ Decrement
        </button>
        <button>🔁 Reset</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCount(countUpdate);
          }}
        >
          <input
            type="number"
            value={countUpdate}
            onChange={(e) => setCountUpdate(Number(e.target.value))}
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
