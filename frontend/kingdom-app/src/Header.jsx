function Header() {

    // inside this, i can write pure html
    return(
        <header>
            <h1>Welcome to The Kingdom App</h1>
            <nav>
                <ul>
                    <li><a href = "#">Create an Account</a></li>
                    <li><a href = "#">About</a></li>
                    <li><a href = "#">Contact</a></li>
                </ul>
            </nav>
            {/* adds a line under the list */}
            <hr></hr> 
        </header>
    );
}

export default Header;