import React from "react";

function Counter(){
    const [count, setCount]=React.useState(0);
    const [toggle, setToggle]=React.useState(false);

    React.useEffect(()=>{
        document.title=`${toggle}`
    }, [toggle])

    React.useEffect(()=>{
        document.title=`Clicked ${count}`
    }, [count])

    return(
        <>
            <div className={"button"} onClick={()=>setCount(count+1)}>
                Click Me
            </div>
            <div className={"button"} onClick={()=>setToggle(!toggle)}>
                Toggle Me
            </div>
        </>

    )
}

export default Counter