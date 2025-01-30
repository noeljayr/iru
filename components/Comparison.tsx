import no from "@/public/no.png";
import yes from "@/public/yes.png";
import Image from "next/image";

function Comparison() {
  return (
    <div id="reasons" className="what-m-difference w-full flex flex-col items-center gap-2">
      <h1>What Makes Us Different?</h1>
      <p className="mb-2">The difference you can trust in emergencies</p>

      <div className="comparison flex flex-col gap-2">
        <div className="header pb-2 grid w-full">
          <span></span>
          <span className="font-bold">Us</span>
          <span className="font-bold">Traditional Security Guards</span>
        </div>

        <div className="row p-2 grid">
          <span className="">Average Response Time</span>
          <span className="font-bold">Under 5 Minutes</span>
          <span className="">30–50 Minutes</span>
        </div>

        <div className="row p-2 grid">
          <span className="">Medical Assistance</span>
          <span className="font-bold">
            <Image src={yes} alt="Yes" />
          </span>
          <span className="">
            <Image src={no} alt="No" />
          </span>
        </div>

        <div className="row p-2 grid">
          <span className="">Suspicious Activity Handling</span>
          <span className="font-bold">
            <Image src={yes} alt="Yes" />
          </span>
          <span className="">
            <Image src={no} alt="No" />
          </span>
        </div>

        <div className="row p-2 grid">
          <span className="">Fire Support</span>
          <span className="font-bold">
            <Image src={yes} alt="Yes" />
          </span>
          <span className="">
            <Image src={no} alt="No" />
          </span>
        </div>

        <div className="row p-2 grid">
          <span className="">Proactive Measures</span>
          <span className="font-bold">
            <Image src={yes} alt="Yes" />
          </span>
          <span className="">Passive Observation</span>
        </div>
      </div>
    </div>
  );
}

export default Comparison;
