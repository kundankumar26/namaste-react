import { useEffect, useState } from "react";

const Profile = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('react is good');
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    console.log('render');
    
    return <>
        <h2>Profile details</h2>
        <h3>Name: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Update count</button>
    </>;
}

export default Profile;