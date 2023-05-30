// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
// import Joke from './components/Joke'
// import jokesData from "./components/jokesData"
import data from './components/data'

function App() {
  // const jokeElements = jokesData.map(joke =>{
  //   return <Joke {...joke}/>
  // })
  const dataElements = data.map(d =>{
    return <Card
      key={d.id}
      // item={d}
      {...d}
    />
  })
  return (
    <div>
      <Navbar />
      <section className='App'>
      <Hero />
      <section className='cards-list'>{dataElements}</section>
      </section>
    </div>
  );
}

export default App;
// {
  /* <Joke  
        setup='What did one tonsil say to the other?'
        punchline='You ngaai my ngaai'
      />
      <Joke  
        setup='How did the hacker escape the police'
        punchline='He just ransomware'
        isPun={true}
        comments={[{author: ""}]}
        upvotes={3}
      />
      <Joke  
        setup='Why do Java programmers wear glasses?'
        punchline="They can't C"
      />
      <Joke  
        setup='What do you call a computer that can sing'
        punchline='A Dell'
      />
      <Joke  
        punchline="There are 10 types of people:Those who understand binary and those who don't" 
      /> */
    // }