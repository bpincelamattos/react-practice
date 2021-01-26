import React from 'react';
import '../components/Header.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Header extends React.Component {
    
    render () {
        return (
            <div id="header">
                <Router>
                    <h2>Header</h2>
                    <nav>
                        <Link to="/home" >home - </Link>
                        <Link to="/feed" >feed - </Link>
                        <Link to="/faq" >faq</Link>
                    </nav>
                </Router>
            </div>
        )
    }
}

export default Header;