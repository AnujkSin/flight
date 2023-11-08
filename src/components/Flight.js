import Navbar from "./Navbar";
import Booking from "./Booking";
import wall from './images/wall.png'
export default function Flights() {
 
  return (
    <div>
      <div className="relative">
        {/* <h1 className="text-6xl py-20 font-bold text-white text-center absolute w-full z-30" style={{ marginTop: '0' }}>Flights</h1> */}
        <div className="h-16 bg-gray-900 z-20">
          <Navbar />
        </div>
        <div>
          <img src={wall} alt="Airplane" style={{ marginTop: '0', width: '100%', height: 'auto' }} className="mr-2" />
        </div>
        <div className="mt-4 z-30">
          <Booking />
        </div>
      </div>
    </div>
  );
}
