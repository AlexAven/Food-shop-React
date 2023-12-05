import { Link } from 'react-router-dom';

function Header() {
    return <nav className='black'>
    <div className='nav-wrapper'>
      <Link to='/' className='brand-logo logo'>Food shop</Link>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li><a href='https://github.com/AlexAven/' target='_blank' rel='noreferrer'>My Repository</a></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  </nav>
};

export {Header};