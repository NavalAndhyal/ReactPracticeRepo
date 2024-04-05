
function MyComponent(props) {
const handleClick = () => {props.clickFunction(props.increment)};
   return (
      <div>
         <button onClick={handleClick}>{props.increment}</button>
      </div>
   );
}

export default MyComponent;
