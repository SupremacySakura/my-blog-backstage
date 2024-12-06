import { createBrowserRouter, Navigate } from "react-router-dom"
import Main from "../views/Main/Main"
import Home from "../views/HomePage/Home"
import Share from "../views/SharePage/Share"
import Article from "../views/ArticlePage/Article"
import Message from "../views/MessagePage/Message"
import Friend from "../views/FriendPage/Friend"
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Navigate to='/home' replace />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'share',
                element: <Share />
            },
            {
                path: 'article',
                element: <Article />
            },
            {
                path: 'message',
                element: <Message />
            },
            {
                path: 'friend',
                element: <Friend />
            }
        ]
    }
])

export default router