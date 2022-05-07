import {useState,useEffect } from 'react'
import Edit from "./components/Edit"
import List from "./components/List"
import Footer from "./components/Footer"
import axios from 'axios'
import './index.css'

const Home = () => {
    const [data, setData] = useState([])
    //get request
    useEffect(async () => {
      const result = await 
      axios.get(
        'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=6',
      );
      setData(result.data);
    }
    );
    //post request 
    const newPost = {
      userId: 1,
      title: 'A new post',
      body: 'This is the body of the new post'
  };
    const sendPostRequest = async () => {
      try {
          const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
          console.log(resp.data);
      } catch (err) {
          console.error(err);
      }
  };
  sendPostRequest();
   //put request 
  const updatedPost = {
    id: 1,
    userId: 1,
    title: 'A new title',
    body: 'Update this post'
};

const sendPutRequest = async () => {
    try {
        const resp = await axios.put('https://jsonplaceholder.typicode.com/posts', updatedPost);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};

sendPutRequest();

//delete request
const sendDeleteRequest = async () => {
  try {
      const resp = await axios.delete('https://jsonplaceholder.typicode.com/posts ')
      console.log(resp.data);
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};

sendDeleteRequest();
    
    return ( <div className="app">
        <Edit add={setData}  />
        <List listData = {data} deleteData ={setData} />
        <div>
        <Footer/>
        </div>
    </div>
    )
    
}
export default Home