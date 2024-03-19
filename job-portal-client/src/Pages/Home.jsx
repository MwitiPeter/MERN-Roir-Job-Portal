import {useEffect, useState}from 'react'
import Banner from '../components/Banner'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const[jobs, setJobs] = useState([]);

  useEffect(() =>{
    fetch("jobs.json").then(res => res.json()).then(data =>{
      
      setJobs(data)
    })
  },[])

  // console.log(jobs)
  //handle input change
  const [query, setQuery] = useState("");
    const handleInputChange = (event) =>{
        setQuery(event.target.value)
    }

    //filter jobs by title
    const filteredItems= jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    console.log(filteredItems)

    
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>
    </div>
  )
}

export default Home