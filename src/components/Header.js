import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className='title'>
            <Link to="/">Portfolio</Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>

                <li>
                    <Link to="/career">Career</Link>
                </li>

                <li>
                    <Link to="/achivement">Achievements</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;