
function MyComponent(props) {


const getGitHubData = () =>
{
   fetch("https://api.github.com").then(resp =>{
      resp.json().then(data => {
         console.log(data);
      })
   })
}

const getGitHubDataAsync = async() =>
{
   var resp = await fetch("https://api.github.com");

   var data = await resp.json();
   console.log(data);
}

const handleClick = () => { getGitHubDataAsync(); props.clickFunction(props.increment); getGitHubData();};
   return (
      <div>
         <button onClick={handleClick}>{props.increment}</button>
      </div>
   );
}

export default MyComponent;
