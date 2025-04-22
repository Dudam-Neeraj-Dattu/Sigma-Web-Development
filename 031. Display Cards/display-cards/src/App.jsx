import { useState, useEffect} from 'react'

import './App.css'
import Card from './components/Card';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {   
    const fetchData = async () => {
      let a = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
      setData(a);    
    };
    fetchData();
  }, [])    

  return (
    <>
      <div className="container">
         {data.length && data.map(item => <Card key={item.id} userId={item.userId} id={item.id} title={item.title} body={item.body} />)}         
      </div>
    </>
  )
}

export default App
