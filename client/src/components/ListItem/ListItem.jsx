import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index , item}) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token:
                            "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmMzYzI2Yjk3NzM1MzEyY2ZiM2MxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzgxNTU5MiwiZXhwIjoxNjU4MjQ3NTkyfQ.wB5T_oQ3yEiPyH7f_I_2WQisJq6tacoQBnH2GEET2LU",
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [item]);


  return (
      <Link to={{ pathname: "/watch", movie: movie }}>
          <div
              className="listItem"
              style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
          >
              <img src={movie?.imgSm} alt="" />
              {isHovered && (
                  <>
                      <video src={movie.trailer} autoPlay={true} loop />
                      <div className="itemInfo">
                          <div className="icons">
                              <PlayArrow className="icon" />
                              <Add className="icon" />
                              <ThumbUpAltOutlined className="icon" />
                              <ThumbDownOutlined className="icon" />
                          </div>
                          <div className="itemInfoTop">
                              <span>{movie.duration}</span>
                              <span className="limit">+{movie.limit}</span>
                              <span>{movie.year}</span>
                          </div>
                          <div className="desc">{movie.desc}</div>
                          <div className="genre">{movie.genre}</div>
                      </div>
                  </>
              )}
          </div>
      </Link>
  );
}