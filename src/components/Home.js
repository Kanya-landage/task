import React,{useState,useRef,useEffect} from "react";
import { Container } from "react-bootstrap";
import { useIdleTimer } from "react-idle-timer";
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const [time,setTime] = useState(null)
    const navigate = useNavigate();
    const idleTimeRef = useRef(null);
    const onIdle = () => {
      localStorage.clear("currentUser")
      navigate("/signup")
    };
    const {idleTimer,getRemainingTime} = useIdleTimer({
      crossTab: true,
      ref: idleTimeRef,
      timeout: 60 * 1 * 1000,
      onIdle: onIdle,
    });
    
    useEffect(() => {
          const interval = setInterval(() => {
            setTime(Math.floor(getRemainingTime()));
          }, 1000);       
        }, []);
  
    return(
        <div idleTimer={idleTimer}>
          <Container className="d-flex flex-column w-100 justify-content-center align-items-center">
           <h2>You are logged in</h2>
                 <p>Your session will expire after {Math.floor(time)}</p>
                 </Container>
         </div>
       
    )
}
export default Home;