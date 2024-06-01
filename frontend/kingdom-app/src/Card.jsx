function Card() {
    return(
        //the h2 tag will contain the name of the current user
        //the source for the image component will be uploaded by the user
        <div className="card">
            <img className="card-image" src = "https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg" alt="uploaded picture"></img>
            <h2 className="user">Desola Fujah</h2>
            <p>I am a Computer Engineer and I play the bass guitar.</p>
        </div>
    );
}






export default Card