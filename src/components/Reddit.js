import React from "react";


function Reddit(){
    const [posts, setPosts]= React.useState([]);

    React.useEffect( ()=>{

        async function getData(){

            let newArray= [];
            const res = await fetch("https://www.reddit.com/r/reactjs.json");

            //this is turning it into a real json array
            const json = await res.json();
            json.data.children.forEach(c=> newArray.push(c.data));

            //you will need to push a new array into setPosts

            setPosts(newArray);
        }

        getData();

    })

    return (
        <ul>
            {posts.map(post =>
                <li key={post.id}>{post.title}</li>
            )}
        </ul>
    )
}

export default Reddit