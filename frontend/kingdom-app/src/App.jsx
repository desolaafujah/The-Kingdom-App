import Header from './Header.jsx'
// import Food from './Info.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'


// NOTE: React component names must always start with a capital letter, 
// while HTML tags must be lowercase.


function MyButton() {
  return(
    <button>Join the Kingdom App!</button>
  );
}


export default function App() {
  
  return(
    <>
    {/* this is the MyButton component nested in the App component */}
    <Header/>
    <Card/>
    <Footer/>
    <div>
      <h1>This is button</h1>
      <MyButton/>
    </div>
    </>
  );
}


