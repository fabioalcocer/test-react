function CondicionalRendering() {
  const user = true;
  
  const Greeting = () => (
    <h2>{user ? "Welcome!" : "Goodbye!"}</h2>
  )

  return (
    <>
      <div>CondicionalRendering</div>
      <Greeting />
    </>
  );
}

export default CondicionalRendering;
