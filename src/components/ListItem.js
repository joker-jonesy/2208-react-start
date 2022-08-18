import React from "react";

function ListItem(props){
    const [check, setCheck]= React.useState(false);

    // React.useEffect(()=>{
    //     document.title= "You clicked me!"
    // })

    return(
        <div>
            <button onClick={()=>setCheck(!check)}>{props.name}</button>
            <h3>{check ? props.mess:"Not Completed"}</h3>
        </div>
    )
}

export  default ListItem;

