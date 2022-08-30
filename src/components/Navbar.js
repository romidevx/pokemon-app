import '../sass/Navbar.scss';


const Navbar = () => {
  return (
    <section className='navbar'>
        <div className="container">
            <nav>
                <img className='logo' src="/images/pokemon-api-logo.png" alt="" />
            </nav>
        </div>
    </section>
  )
}

export default Navbar;