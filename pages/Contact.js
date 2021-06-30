// import React, { useEffect, useState } from 'react';
import myData from "../data/FakeData";
const Contact = () => {
    // const [post, setPost] = useState([])

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json())
    //         .then(data => setPost(data))
    // }, [])

    return (
        <div>
            {/* <h2>{post.length}</h2> */}
            <h2>{myData.length}</h2>
            {
                myData.map(post => <div key={post.id}>
                    <h2>{post.title} </h2>
                  </div> )
            }
        </div>
    );
};

export default Contact;