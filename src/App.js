import ListItem from "./components/ListItem";

function App() {

    const list =["Toggle", "Click me", "Change", "changeroo"]

  return (
    <div className="App">
        {list.map((itm,idx)=>
                <ListItem name={itm} mess={"Hooray"} key={idx}/>
        )}
    </div>
  );
}

export default App;
