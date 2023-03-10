import { createContext } from "react"

const UserContext = createContext({
    user: {
        name: 'Kundan',
        email: 'kundan@gmail.com'
    }
});

UserContext.displayName = 'UserContext';

export default UserContext;