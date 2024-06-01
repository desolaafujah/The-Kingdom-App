
function Footer() {

    //creates a copyright sign
    return(
        <footer className="footer">
            <p className="p">&copy; The Kingdom App {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer