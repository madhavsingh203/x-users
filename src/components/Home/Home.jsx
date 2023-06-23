import React from "react";
import Login from "../Login/Login";
import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import Loading from "../Loading/Loading";
import { useSnackbar } from "notistack";

function Home({handleLogOut, authentication}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  
 


      useEffect(() => {
        setTimeout(async () => {
          try{

            const response = await axios.get(
              `https://randomuser.me/api/?results=10&page=${page}`
            );
      
            setData((prev) => {
              return [...prev, ...response.data.results];
            });
            setLoading(false);
          } catch(e){
            if(e.response && e.response.status === 400){
              enqueueSnackbar(e.response.data.message, {variant: "error"})
            }else
             enqueueSnackbar("Something went wrong.", {variant : "error"})
          }
          
       
       
        }, 1000);
      }, [page]);
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      const handleScroll = async () => {
        if (
          window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.scrollHeight
        ) {
          setLoading(true);
          setPage((prev) => prev + 1);
        }
      };
  

  return (
    <div>
      

      {authentication && (
        <>
        <button className="logout-button" onClick={handleLogOut}>
        Logout
      </button>
          <CardList data={data} />
          <Loading />
        </>
      )}
    </div>
  );
      }

export default Home;
