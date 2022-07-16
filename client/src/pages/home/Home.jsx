import React from 'react';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import List from '../../components/list/List';
import "./home.scss";
import { useState, useEffect } from "react";
import axios from "axios";


const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""
                    }`,
                    {
                        headers: {
                            token:
                                "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmMzYzI2Yjk3NzM1MzEyY2ZiM2MxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzgxNTU5MiwiZXhwIjoxNjU4MjQ3NTkyfQ.wB5T_oQ3yEiPyH7f_I_2WQisJq6tacoQBnH2GEET2LU",
                                //JSON.parse(localStorage.getItem("user")).accessToken,
                        },
                    }
                );
                //console.log(res);
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);


  return (
    <div className='home'>
        <Navbar/>
          <Featured type={type} setGenre={setGenre}/>
          {lists.map((list) => (
              <List list={list} />
          ))}
        
    </div>
    
  )
}

export default Home