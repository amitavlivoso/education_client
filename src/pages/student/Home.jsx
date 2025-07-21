import React from 'react';

import Navbar from '../../components/student/Navbar'
import Herosection from '../../components/student/HeroSection'
import Work from '../../components/student/Work'
import Course from '../../components/student/Course'
import Topcat from '../../components/student/Topcat'
import Testimonial from '../../components/student/Testimonial'
import Footer from '../../components/student/Footer'
function App() {
  return (
    <div className="font-sans">
     <Navbar/>
     <Herosection/>
     <Work/>
     <Course/>
     <Topcat/>
     <Testimonial/>
     <Footer/>
    </div>
  );
}

export default App;
