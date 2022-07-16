import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmMzYzI2Yjk3NzM1MzEyY2ZiM2MxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzg1NDExNywiZXhwIjoxNjU4Mjg2MTE3fQ.wAj0VwsMgS9iZxIKcHOF4pBwn_zKLSC8VQGe61gTO3g",
                    },
                });
                setNewUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getNewUsers();
    }, []);


  return (
      <div className="widgetSm">
          <span className="widgetSmTitle">New Join Members</span>
          <ul className="widgetSmList">
              {newUsers.map((user) => (
                  <li className="widgetSmListItem">
                      <img
                          src={
                              user.profilePic ||
                              "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                          }
                          alt=""
                          className="widgetSmImg"
                      />
                      <div className="widgetSmUser">
                          <span className="widgetSmUsername">{user.username}</span>
                      </div>
                      <button className="widgetSmButton">
                          <Visibility className="widgetSmIcon" />
                          Display
                      </button>
                  </li>
              ))}
          </ul>
      </div>
  );
}
