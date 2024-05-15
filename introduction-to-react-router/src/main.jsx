import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/Users/User/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import Post from './components/Posts/Post/Post.jsx';
import PostDetails from './components/PostDrtails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
