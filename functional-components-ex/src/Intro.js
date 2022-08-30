// Impure function: Constant Change - API, Database.
const impure = () => new Date().toLocaleString();
console.log(impure());

// Pure function: Never changes the output value - fixed value.
const MyComponent = ({ myProp }) => {
  return <div>Nombre: {myProp}</div>;
};

const App = () => {
  return <MyComponent myProp={"chanchito feliz"} />;
};

export default App;
