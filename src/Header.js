export default function Header(booger) {
  console.log(booger);
  const displayText = booger.text ? booger.text : 'Hello World';
  return <h1>{displayText}</h1>;
}
