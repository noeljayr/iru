import fiveStars from "@/public/5.png";
import fourStars from "@/public/4.png";
import Image from "next/image";

function Testimonials() {
  return (
    <div id="testimonials" className="testimonials flex flex-col gap-4 items-center w-full">
      <h1>What Our Clients Say</h1>

      <div className="testimonial-container grid gap-4">
        <div className="testimonial p-4 flex flex-col gap-2">
          <span className="rating flex gap-2 font-bold items-center">
            <Image src={fiveStars} alt="5.0 stars" />
            5.0
          </span>
          <p>
            I had a medical emergency at home, and their team arrived within
            minutes. They stayed with me, kept me calm, and provided first aid
            until the ambulance arrived. I’m so grateful for their quick
            response—it could have saved my life!
          </p>
          <span className="name font-bold"> — Sarah T</span>
        </div>

        <div className="testimonial p-4 flex flex-col gap-2">
          <span className="rating flex gap-2 font-bold items-center">
            <Image src={fourStars} alt="4.5 stars" />
            4.5
          </span>
          <p>
            I came home to find my house had been broken into. The team not only
            secured the property but also helped collect first evidence and
            stayed with me until the police arrived. They turned a terrifying
            experience into one where I felt supported and protected.
          </p>
          <span className="name font-bold">— James K</span>
        </div>

        <div className="testimonial p-4 flex flex-col gap-2">
          <span className="rating flex gap-2 font-bold items-center">
            <Image src={fiveStars} alt="5.0 stars" />
            5.0
          </span>
          <p>
            Our store experienced a security breach during off-hours. The
            response team was on-site within minutes, handled the situation, and
            coordinated with the authorities. Their service is absolutely
            essential for any business owner.
          </p>
          <span className="name font-bold">— David R</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
