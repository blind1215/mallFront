import React, { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const Loding = <div>Loading...</div>
const TodoList = lazy(() => import("../pages/todo/ListPage"));
const TodoRead = lazy(() => import("../pages/todo/ReadPage"));


const todoRouter = () => {
    return [
        {
            path: "list",
            element: <Suspense fallback={Loding}><TodoList /></Suspense>
        },
        {
            path: "",
            element: <Navigate replace={true} to={'list'} />
        },
        {
            path: "read/:tno",
            element: <Suspense fallback={Loding}><TodoRead /></Suspense>
        },


    ]
};

export default todoRouter;