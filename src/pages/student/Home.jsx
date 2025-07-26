import React from 'react';

import Navbar from '../../components/student/Navbar'
import Herosection from '../../components/student/HeroSection'
import Work from '../../components/student/Work'
import Course from '../../components/student/Course'
import Price from '../../components/student/Price'
import Topcat from '../../components/student/Topcat'
import Testimonial from '../../components/student/Testimonial'
import Footer from '../../components/student/Footer'
function App() {
  return (
    <div className="font-sans">

     <Herosection/>
     <Work/>
     <Course/>
     <Price/>
     <Topcat/>
     <Testimonial/>
   
    </div>
  );
}

export default App;
