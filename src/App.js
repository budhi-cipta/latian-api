import React,{ useEffect,useState } from 'react';
import axios from 'axios'
import './App.css'

const App = () => {
    const [gipNews, setNews] = useState ([]);
    // const [news, setNews] = useState ([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();


  useEffect(() => {
    //ge api dipisahkan dengan ? trus query isi dengan api key
     const url = 'https://api.giphy.com/v1/gifs/search?q=spiderman&api_key=eSt3p8OHcGg9Cp4YKGIdLoojhIpUD4s3&limit=9';
    // const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&eSt3p8OHcGg9Cp4YKGIdLoojhIpUD4s3&limit=9";
    
    axios.get(url)
    .then(function(result) {
       console.log(result.data.data)
      // console.log(result.data.articles)
      setNews(result.data.data);
      setLoading(false)
    })
    .catch(function(error) {
      setError (true);
      console.log(error.Message)
      setErrorMessage(error.Message)
      setLoading(false)
    });
  },[]);


  return (
    <div className="App">
      <h2>Call API</h2>
      <div className="container">
      {loading ? (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      ) : (
        error ? (
        <div>{errorMessage}</div>
        ) : (
          gipNews.map((item) => (
            
            <ul className="foto">
              <li><img src={item.images.original.url} alt="giphy" /></li>
              <li>{item.title}</li>
              <li>{item.type}</li>
             
            </ul>
          ))
        )
      )
      } 
    </div>   
    </div>
  );
};

export default App;
