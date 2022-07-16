import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";

export default function Featured({ type , setGenre }) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token:
                            "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmMzYzI2Yjk3NzM1MzEyY2ZiM2MxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzgxNTU5MiwiZXhwIjoxNjU4MjQ3NTkyfQ.wB5T_oQ3yEiPyH7f_I_2WQisJq6tacoQBnH2GEET2LU",
                    },
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomContent();
    }, [type]);

    console.log(content);
  return (
    <div className='featured'>
        { type && (
            <div className="category">
                <span>{type ==="movie" ? "Movies" : "Series" }</span>
                  <select
                      name="genre"
                      id="genre"
                      onChange={(e) => setGenre(e.target.value)}
                  >
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="horror">Horror</option>
                    <option value="crime">Crime</option>
                    <option value="historical">Historical</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="drama">Drama</option>
                    <option value="animation">Animation</option>
                    <option value="genre">Genre</option>
                    <option value="western">Western</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
          <img src={content.img} alt="" />
          <div className="info">
              <img src={content.imgTitle} alt="" />
              <span className="desc">{content.desc}</span>

            <div className='buttons'>
                <button className='play'>
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>

        </div>

    </div>

  )
}