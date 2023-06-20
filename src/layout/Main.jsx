import { Outlet } from 'react-router-dom';
import Header from "../components/header/Header"
import Footer from '../components/footer/Footer';
import { useEffect, useState } from 'react';
import { Cube } from "react-preloaders";

export default function Main() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  },[])
  return (
    <>
      {loading ? (
        <div>
          <Cube color={"#FE5D26"} />
        </div>
      ) : (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}
