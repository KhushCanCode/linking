# react-router-dom

## Check out on netifly
https://task23-linking.netlify.app/

## Header component

here i used Link from react-roter-dom which acts like anchor tag in html.


        function Header() {

        return (
            <div 
            className="header bg-white  m-2 rounded-xl 
            flex items-center justify-between px-11 shadow-md">
                <div className="logo text-4xl font-bold text-cyan-800 ml-16">LOGO</div>

                <div className="nav flex items-center gap-11 text-2xl font-semibold text-cyan-600 ">
                <Link to="/" className="home  hover:underline active:text-red-500">Home</Link>
                <Link to="/dashboard" className="dashboard hover:underline active:text-red-500">Dashboard</Link>
                <Link to="/signin" className="signin hover:underline cursor-pointer active:text-red-500" >Sign In</Link>
                <Link to="/signup" className="signup  hover:underline cursor-pointer  active:text-red-500">Sign Up</Link>
                </div>
            
                
            </div>
        )
        }

then i made all the other components that will be needed such as dashboard, home, sign in and sign up.

Then i connected the links in App.jsx

## App.jsx

        import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

        import Header from './components/Header';
        import Home from './components/Home';
        import Dashboard from './components/Dashboard';
        import Signin from './components/Signin';
        import Signup from './components/Signup';

        function App() {

        return (
            <>
            <Router>
                <Header/>
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/dashboard" element={<Dashboard/>}/>
                <Route path = "/signin" element={<Signin/>}/>
                <Route path = "/signup" element={<Signup/>}/>
            </Routes>
            </Router>
            </>
        )
        }

        export default App