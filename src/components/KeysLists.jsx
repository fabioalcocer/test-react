const fruits = ["orange", "strawberry", "apple", "lemon"];

function KeysLists() {
  return (
    <>
      <h2>KeysLists</h2>
      <ul>
        {fruits.map((item) => (
          <li key={Math.random() * 10}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default KeysLists;
