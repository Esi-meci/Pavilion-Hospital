
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import doctors from "../Images/stethoscope.png"
import patient from "../Images/happy.png"
import presense from "../Images/presense.png"
import experience from "../Images/experience.png"


// count functionality 
const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only count once
    threshold: 0.4,     // start counting when 40% of section is visible
  });

  return (

    // countup styling 

    <section className='bg mt-44 mb-44  '>

      <div className='text-center tracking-wide '>

        <h1 className='text-3xl font-semibold about capitalize'>our achievements</h1>
        <h1 className='text-5xl font-semibold capitalize'>why choose us</h1>
      </div>

      <div ref={ref} className="flex justify-center items-center gap-48 text-center py-10 bg-white flex-wrap">

        <div>
          <div className="text-4xl font-bold text-black  ">
            <img className='w-10  m-auto ' src={doctors} alt="" />
            {inView && <CountUp end={140} duration={2} />}+
          </div>

          <p className="count mt-2">Expert Doctors</p>

        </div>
        <div>
          <div className="text-4xl font-bold text-black">
            <img className='w-10   m-auto ' src={patient} alt="" />

            {inView && <CountUp end={990} duration={2} />}+
          </div>
          <p className="count mt-2">Happy Patients</p>
        </div>
        <div>

          <div className="text-4xl font-bold text-black">
            <img className='w-10   m-auto ' src={presense} alt="" />

            {inView && <CountUp end={6000} duration={2} separator="," />}+
          </div>
          <p className="count mt-2">Global Presence</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-black">
            <img className='w-10   m-auto ' src={experience} alt="" />

            {inView && <CountUp end={40} duration={2} />}+
          </div>
          <p className="count text-gray-600 mt-2">Years Of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
