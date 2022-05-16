
import './header.css';

const Header = () => {
    return(
      <>
  <div className="header">
    <h1 id='h'>RESTy</h1>
  </div>
  <nav className='nav'>
            <ul className='ul'> 
            <li><a className='li' href="/">Home</a></li>
            <li><a className='li' href="/History">History</a></li>
            <li><a className='li' href="/Help">Help</a></li>
            </ul>
        </nav>
  </>
    )
}
export default Header;