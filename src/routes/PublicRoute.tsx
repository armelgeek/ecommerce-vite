import React from "react";
import { Route, Redirect, Link } from "react-router-dom";

import { BsChat } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { useLocation } from "react-use";
import Header from "../components/Header";
// @ts-ignore
const PublicRoute = ({ component: Component, ...rest }) => {
    const location = useLocation();
    return (
        <>
         <Header/>
            <div className="mx-40 mt-8">
                <div className="gap-5 dark:bg-slate-800 grid grid-cols-9 max-[828px]:mx-20 max-[711px]:mx-10 max-[675px]:mx-20 max-[591px]:mx-16 max-[528px]:mx-4 max-[474px]:h-24 max-[474px]:pb-10">
                    <div className="col-span-6">
                        <Route
                            {...rest}
                            render={(props: any) => <Component {...props} />}
                        />
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default PublicRoute;
