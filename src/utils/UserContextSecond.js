import { createContext } from "react"

const UserContextSecond = createContext({
    user: {
        name: 'Akshay',
        email: 'akshay@gmail.com'
    }
});

UserContextSecond.displayName = 'UserContext';

export default UserContextSecond;