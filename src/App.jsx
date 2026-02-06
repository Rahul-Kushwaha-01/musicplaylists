import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

const App = () => {

  const data = [
    {image:"https://images.unsplash.com/photo-1654231958997-9ffe658362f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29uZyUyMGRpc3BsYXklMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",name:"Sanam Re..",artist:"Arjit Singh",added:false},
    {image:"https://images.unsplash.com/photo-1679562177780-fa6b4f3d314c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmclMjBkaXNwbGF5JTIwaW1hZ2VzfGVufDB8fDB8fHww",name:"To Chale..",artist:"Sonu Nigam",added:false},
    {image:"https://plus.unsplash.com/premium_photo-1753545378108-377883381e8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvbmclMjBkaXNwbGF5JTIwaW1hZ2VzfGVufDB8fDB8fHww",name:"Sandeshe Ate hai..",artist:"Rahat Fateh Ali ",added:false},
    {image:"https://images.unsplash.com/photo-1609065846451-1843819f4660?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbmclMjBkaXNwbGF5JTIwaW1hZ2VzfGVufDB8fDB8fHww",name:"Dhekhte Dekhte...",artist:"Akshay Kumar",added:false},
    {image:"https://media.istockphoto.com/id/1388587630/photo/professional-studio-microphone-for-voice-and-music-recording-against-blurred-synthesizer.jpg?s=612x612&w=0&k=20&c=LAygMY-hn3kRGzQdkoIIHfBemdlaGplSDvNmhNxYuKA=",name:"Sawan Ayaa hai..",artist:"Sanjay Datt",added:false},
    {image:"https://media.istockphoto.com/id/1195459757/photo/one-microphone-on-the-piano-keyboard.jpg?s=612x612&w=0&k=20&c=UhfzQbZmJPeaQcqHesbc7pyx8S8gmaGxhnvblwjYInQ=",name:"Marize ishq hu mai..",artist:"Tiger Shroff",added:false},
    
  ];

  const [songData,setSongData] = useState(data);

  const handleClick = function(idx){
    setSongData((prev)=>{
      return prev.map((item,itemindex)=>{
        if(itemindex === idx) return {...item, added:!item.added}
        return item;
      })
    })

  };




  return (
    <>
      <div className='w-full h-screen bg-zinc-300 '>
        <Navbar data={songData} />
        <div className='px-20 flex gap-10 flex-wrap mt-10 '>
            {songData.map((obj,idx)=>(
              <Card img={obj.image} name={obj.name} artist={obj.artist} added={obj.added} handleclick={handleClick} index={idx} />
            ))}

        </div>
        

      </div>
    </>
  )
}

export default App
