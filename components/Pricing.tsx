import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import star from "@/public/Star.svg";
import Image from "next/image";
import yes from "@/public/yes.png";

function Pricing() {
  return (
    <div
      className="pricing flex flex-col items-center mx-auto gap-2"
      id="pricing"
    >
      <h1>Pricing</h1>
      <p className="mb-4">Affordable Plans for Your Safety</p>

      <div className="prices w-full grid gap-4 ">
        <div className="price flex flex-col gap-2 items-center relative p-4 pt-12">
          <div className="flex flex-col items-center">
            <h2>Basic</h2>
            <p>
              Individuals or small households looking for essential protection
              and immediate assistance for emergencies.
            </p>
          </div>
          <div className="number flex items-center justify-center gap-2">
            <h2>$99</h2>
            <span className="opacity-70 mb-2">/ Month</span>
          </div>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.link/3r51je"
            className="cta-2"
          >
            Get Started
            <IconChevronRight />
          </Link>

          <div className="features flex flex-col gap-2 w-full">
            <span className="flex gap-2 w-full items-center">
              <Image src={yes} alt="yes" />
              <span className="opacity-70 font-medium">
                Emergency medical response assistance
              </span>
            </span>

            <span className="flex gap-2 w-full items-center">
              <Image src={yes} alt="yes" />
              <span className="opacity-70 font-medium">
                Fire incident support
              </span>
            </span>

            <span className="flex gap-2 w-full items-center">
              <Image src={yes} alt="yes" />
              <span className="opacity-70 font-medium">
                Crime support: assistance after robbery or theft
              </span>
            </span>

            <span className="flex gap-2 w-full items-center">
              <Image src={yes} alt="yes" />
              <span className="opacity-70 font-medium">
                Basic property patrols (1–2 per week)
              </span>
            </span>
          </div>
        </div>
        <div className="price flex flex-col gap-2 items-center relative p-4 pt-12">
          <div className="most-popular items-center absolute top-4 flex">
            <Image src={star} alt="most popular" />
            Most popular
          </div>
          <div className="flex flex-col items-center">
            <h2>Standard</h2>
            <p>
              Families or small businesses that want a more robust layer of
              safety and monitoring for their home or property.
            </p>
          </div>
          <div className="number flex items-center justify-center gap-2">
            <h2>$199</h2>
            <span className="opacity-70 mb-2">/ Month</span>
          </div>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.link/3r51je"
            className="cta"
          >
            Get Started
            <IconChevronRight />
          </Link>

          <div className="features flex flex-col gap-2 w-full">
            <span className="flex gap-2 w-full items-center">
              <Image src={yes} alt="yes" />
              <span className="font-medium">
                All features in the Basic Plan
              </span>
            </span>

            <span className="flex gap-2 w-full items-center">
              <Image src={yes} alt="yes" />
              <span className="opacity-70 font-medium">
                Advanced fire assistance
              </span>
            </span>

            <span className="flex gap-2 w-full items-center">
              <Image src={yes} alt="yes" />
              <span className="opacity-70 font-medium">
                Regular property patrols (2–4 per week)
              </span>
            </span>

            <span className="flex gap-2 w-full items-center">
              <Image src={yes} alt="yes" />
              <span className="opacity-70 font-medium">
                Integrated CCTV monitoring
              </span>
            </span>
          </div>
        </div>
        <div className="price flex flex-col gap-2 items-center relative p-4 pt-12">
          <div className="flex flex-col items-center">
            <h2>Premium</h2>
            <p>
              Larger households, high-profile individuals, or businesses with
              higher security or emergency needs.
            </p>
          </div>
          <div className="number flex items-center justify-center gap-2">
            <h2>$249</h2>
            <span className="opacity-70 mb-2">/ Month</span>
          </div>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.link/3r51je"
            className="cta-2"
          >
            Get Started
            <IconChevronRight />
          </Link>

          <div className="features flex flex-col gap-2 w-full">
            <span className="flex gap-2 w-full items-center">
              <Image src={yes} alt="yes" />
              <span className="font-medium">
                All features in the Standard Plan
              </span>
            </span>

            <span className="flex gap-2 w-full items-center">
              <Image src={yes} alt="yes" />
              <span className="opacity-70 font-medium">Priority response</span>
            </span>

            <span className="flex gap-2 w-full items-center">
              <Image src={yes} alt="yes" />
              <span className="opacity-70 font-medium">
                Daily property patrols
              </span>
            </span>

            <span className="flex gap-2 w-full items-center">
              <Image src={yes} alt="yes" />
              <span className="opacity-70 font-medium">
                Proactive crime prevention
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
