import './App.css';
import { observer } from "mobx-react-lite"

function App({myStore}) {

  let counter = 1;
  const buttonOnClickHandler = () => {
    
    setInterval(function() {
      counter++;
      myStore.updateUserName('kunal' + counter);
    }, 1000);
  }
  return (
    <div>
     <p>Mobx</p>
     <p>{myStore.userInfo.name}</p>
     <button onClick={buttonOnClickHandler}>Update user Name</button>
    </div>
  );
}

export default observer(App);
