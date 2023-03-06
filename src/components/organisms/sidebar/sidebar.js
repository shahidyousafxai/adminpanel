import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "../../molecules/navbar/navbar";
import './sidebar.css';

const Sidebar = () => {

    //navigation function for sidebar
    const navigation = [
        { id: 1, name: 'Header', path: '/', iconURL: "images/sidebar/header.svg"},
        { id: 2, name: 'Kanban', path: '/kanban', iconURL: "images/sidebar/kanban.svg"},
        { id: 3, name: 'Inbox', path: '/user', iconURL: "images/sidebar/inbox.svg"},
        { id: 4, name: 'User', path: '', iconURL: "images/sidebar/user.svg"},
        { id: 5, name: 'Products', path: '', iconURL: "images/sidebar/product.svg"},
        { id: 6, name: 'Sign In', path: '', iconURL: "images/sidebar/sign-in.svg"},
        { id: 7, name: 'Sign Up', path: '', iconURL: "images/sidebar/sign-up.svg"},
    ];


    //open sidebar on button click
    const openSidebar = () => {
        const sidebar = document.getElementById('logo-sidebar');
        sidebar.classList.toggle('-translate-x-full');
        sidebar.classList.toggle('translate-x-0');
    }

    const navigationMarkup = navigation.map((item) => {
        return (
            <li>
                <NavLink to={item?.path} className={`flex items-center p-2 font-normal rounded-r-lg navbar`} id={item.id}>
                    {item.iconURL && <img src={item?.iconURL} alt="kanban" className='w-6 h-6 bg-grey-300' />}
                    <span className="ml-3 text-p-light-purple">{item?.name}</span>
                </NavLink>
            </li>
        )
    });

    return (
        <>
            <Navbar openSidebar={openSidebar} />
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-18 transition-transform -translate-x-full border-r border-gray-200 md:translate-x-0 " aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-p-blue">
                    <ul className="space-y-2">
                        {React.Children.toArray(navigationMarkup)}
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar