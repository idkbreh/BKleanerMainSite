import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/NavigatorBar/Navigator';
import '../index.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { isAuthTokenValid } from '../constant/isAuthenCheck';
import NavbarLogin from '../components/NavigatorBar/Navigators';

function App() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const countRef = useRef(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!isCounting) {
        setIsCounting(true);
        startCounting();
        startCounting2(true)
        startCounting2()
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCounting]);
  const startCounting2 = () => {
    const start = countRef.current;
    const end = 5800000;
    const duration = 8000; // 3 seconds
    const startTime = performance.now();

    const animateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);

      setCount2(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  };
  const startCounting = () => {
    const start = countRef.current;
    const end = 387261;
    const duration = 3000; // 3 seconds
    const startTime = performance.now();

    const animateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);

      setCount(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  };
  return (
    <>
      <Navbar />
      <div className="content bottom">
        <h1 className="title">
          <span className="green">BKLeaner</span>หุ่นยนต์ลอกท่อจาก E-WASTE
        </h1>
           {/* <div className="counter">
          {count.toLocaleString()} ล้าน
        </div> */}
        <br></br>
        <br></br>
        <h1>อะไรคือ <span className='green'>BKLeaner</span></h1>
        <hr></hr>
        <h3> &nbsp; &nbsp; <span className='green'>BKleaner</span> คือ innovation หุ่นยนต์ลอกท่อเพื่อชีวิตของคนในกรุงเทพฯที่ถูกสรรค์สร้างโดย E-waste และถูกพัฒนาโดยเด็กไทยที่มีใจรักทางด้าน IOT ( Internet of things )</h3>
        <br/>
        <h2 className='title'>ทำไมจึงคิดค้น<span className='red2'>ไอเดีย</span>นี้ขึ้น</h2>
        
        <h3>&nbsp; &nbsp; จากการสำรวจปัญหาภายในกรุงเทพมหานครนั้นเราได้พบว่าปัญหาทางจราจรเป็นปัญหาที่ยังแก้ไม่หายไปเสียที เราจึงเริ่มจับต้นตอของปัญหาทางจราจรมา จึงได้พบว่าในช่วงฤดูฝนนั้นเกิดเหตุการณ์น้ำท่วม น้ำระบายไม่ทัน สาเหตุมาจากท่ออุดตันไม่สามารถระบายน้ำได้  </h3>
        <br/>
        <h2 className='title2 red2'>แล้วทำไมท่อจึงอุดตันล่ะ</h2>
        <center><h3>ตามสถิติย้อนหลังพบว่ากรุงเทพมีขยะภายในท่อถึง <div className="counter red">
          {count.toLocaleString()} ตัน
        </div></h3></center>
        <h2 className='title2'>และคุณรู้หรือไม่ว่าพนักงานลงไปปฏิบัติการลอกท่อนั้นต้องรับมือกับ<span className='red2'>ความเสี่ยง</span>อะไรบ้าง</h2>
        
        <h3>- สัตว์ที่อาศัยในท่อไม่ว่าจะเป็น <span className='red'>งู ตัวเงินตัวทอง และอื่นๆอีกมากมาย</span></h3>
        <h3>- <span className='red'>กลิ่นตัว</span>หลังจากขึ้นมาจากการเปิดท่อ</h3>
        <h3>- ความเสี่ยงพื้นฐานในการลงไปในท่อเช่นการจมน้ำ ติดเชื้อ</h3>
        <br/>
        <h2 className='title2 '>แต่ถ้าใช้<span className='green'>BKleaner</span> ?</h2>
        <center><h3>ประชากรมากกว่า<div className="counter red">
          {count2.toLocaleString()} ชีวิต
        </div> จะปลอดภัยจากความเสี่ยงจากการปฏิบัติการเปิดท่อ</h3></center>
        <br></br>
        <h3 className='title2'>ให้ชีวิตของคุณปลอดภัยด้วย<br></br><span className='green'>BKleaner</span></h3>
      </div>
      <br/><br/>
      <br/><br/><br/><br/>
      <center><p>copyright@2024 BY GUKBO !</p></center>
      <br/><br/><br/>
    </>
  );

}

export default App;
