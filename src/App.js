import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/ProfileFn';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import UserContext from './utils/userContext';
import UserContextSecond from './utils/userContextSecond';
import { Provider } from 'react-redux';
import Cart from './components/cart';
import store from './utils/store';

const Instamart = lazy(() => import('./components/Instamart'));
// use of lazy loading
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const AppLayout = () => {
    const [user, setUser] = useState({
        name: 'akshay',
        email: 'support@kundan.com',
    });
    return (
        <Provider store={store}>
            <UserContextSecond.Provider
             value={{user: user, setUser: setUser}}
            >
                <Header />
                <Outlet/>
                <Footer />
            </UserContextSecond.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu/>
            },
            {
                path: '/instamart',
                element: (
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Instamart />
                    </Suspense>)
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);