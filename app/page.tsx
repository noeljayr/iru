import "@/css/index.css";
import { IconBolt, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import search from "@/public/search.png";
import firstAid from "@/public/first-aid-kit.png";
import shield from "@/public/shield.png";
import cctv from "@/public/cctv.png";
import fireEx from "@/public/fire-extinguisher.png";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-16 items-center w-full">
      <div className="hero relative flex flex-col gap-3 items-center justify-center mx-auto">
        <span className="sub-heading flex gap-2 font-bold items-center">
          <span>
            <IconBolt />
          </span>
          Immediate Response, When Every Second Counts.
        </span>

        <h1 className="text-center">
          Don’t Wait for Help Call Us, and We’ll Be There First
        </h1>
        <p className="text-center">
          Whether it’s a fire, medical need, or security issue, we ensure you’re
          never alone when it matters most.
        </p>

        <div className="cta-container grid gap-4 mt-2">
          <Link href="/contact" className="cta-2">
            Contact
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.link/3r51je"
            className="cta"
          >
            Get Started <IconChevronRight />
          </Link>
        </div>

        <div className="social-proof absolute grid justify-center items-center">
          <div>
            <span className="number opacity-70">120+</span>
            <span className="opacity-70 text-center">Properties Monitored 24/7</span>
          </div>
          <div>
            <span className="number opacity-70">98%</span>
            <span className="opacity-70 text-center">Customer Satisfaction Rate</span>
          </div>
          <div>
            <span className="number opacity-70">4.9/5</span>
            <span className="opacity-70 text-center">Rated by Our Clients</span>
          </div>
        </div>
      </div>

      <div
        className="services flex flex-col gap-4 items-center mx-auto"
        id="services"
      >
        <h1>Services</h1>

        <div className="services-container grid gap-2">
          <div className="top gap-2">
            <div className="service">
              <span className="flex items-center gap-2 font-bold">
                <span className="image">
                  <Image src={fireEx} alt="Fire Safety Response" />
                </span>
                Fire Safety Response
              </span>
              <p>
                First aid and support until professional emergency services
                arrive.
              </p>
            </div>
            <div className="service">
              <span className="flex items-center gap-2 font-bold">
                <span className="image">
                  <Image alt="CCTV Monitoring" src={cctv} />
                </span>
                CCTV Monitoring
              </span>
              <p>
                Active CCTV surveillance and one-click emergency dispatch
                options.
              </p>
            </div>
            <div className="service">
              <span className="flex items-center gap-2 font-bold">
                <span className="image">
                  <Image src={shield} alt="Crime Support" />
                </span>
                Crime Support
              </span>
              <p>
                Gather first evidence and provide safety until police arrive.
              </p>
            </div>
          </div>
          <div className="service">
            <span className="flex items-center gap-2 font-bold">
              <span className="image">
                <Image src={firstAid} alt="Emergency Medical Assistance" />
              </span>
              Emergency Medical Assistance
            </span>
            <p>
              First aid and support until professional emergency services arrive
            </p>
          </div>
          <div className="service">
            <span className="flex items-center gap-2 font-bold">
              <span className="image">
                <Image src={search} alt="Suspicious Activity Checks" />
              </span>
              Suspicious Activity Checks
            </span>
            <p>
              Respond to suspicious incidents and patrol your property for added
              security.
            </p>
          </div>
        </div>
      </div>

      <Pricing />

      <Comparison />

      <Testimonials />

      <div className="second-cta mx-auto flex flex-col items-center gap-4">
        <h1 className="text-center">
          Choose Us Today for <br /> Immediate , Reliable Protection.
        </h1>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.link/3r51je"
          className="cta"
        >
          Get Started <IconChevronRight />
        </Link>
      </div>
    </div>
  );
}
