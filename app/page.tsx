import BecomeAnNFsTayAgent from './components/BecomeAnNFsTayAgent'
import PropertyOfTheDay from './components/PropertyOfTheDay'
import Payouts from './components/Payouts'
// import Hero from './components/Hero'

export default function Home() {
  return (
    <div className="bg-white h-full px-6 py-9 flex flex-col gap-10">
      {/* <Hero/> */}
      <Payouts/>
      {/* <PropertyOfTheDay/> */}
      <BecomeAnNFsTayAgent/>
    </div>
  );
}
