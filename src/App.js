import ListItem from "./components/ListItem";
import Counter from "./components/Counter";
import Reddit from "./components/Reddit";

function App() {

    const list =["Toggle", "Click me", "Change", "changeroo"]

  return (
    <div className="App">
        {list.map((itm,idx)=>
                <ListItem name={itm} mess={"Hooray"} key={idx}/>
        )}
        <Counter/>
        <Reddit/>
    </div>
  );
}

export default App;
