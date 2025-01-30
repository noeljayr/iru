import "@/css/contact.css";

import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

function page() {
  return (
    <div className="contact mb-16 mx-auto w-full flex flex-col gap-4">
      <div className="flex flex-col gap-1 mb-4 items-center">
        <h1>Get in touch or visit us</h1>
        <p className="pr text-center">
          Connect with us your way—whether by email, phone, social media, or a
          quick direct message. We’re here to respond promptly and keep the
          conversation flowing.
        </p>
      </div>

      <div className="grid contact-options gap-16">
        <form className="flex flex-col gap-6 w-full" action="">
          <div className="input-group">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Full name" />
          </div>
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>
          <div className="input-group">
            <label htmlFor="">Phone</label>
            <input type="text" placeholder="+265 888 88 888" />
          </div>
          <div className="input-group">
            <label htmlFor="">Message</label>
            <textarea placeholder="Message" name="" id=""></textarea>
          </div>

          <div className="c-services flex flex-col gap-2">
            <div className="input-group">
              <label className="" htmlFor="">
                Services
              </label>
            </div>
            <div className="grid gap-4">
              <span className="flex gap-2 font-bold items-center cursor-pointer">
                <span className="check"></span>
                Fire Safety Response
              </span>

              <span className="flex gap-2 font-bold items-center cursor-pointer">
                <span className="check"></span>
                Crime Support
              </span>

              <span className="flex gap-2 font-bold items-center cursor-pointer">
                <span className="check"></span>
                Suspicious Activity Checks
              </span>

              <span className="flex gap-2 font-bold items-center cursor-pointer">
                <span className="check"></span>
                CCTV Monitoring
              </span>

              <span className="flex gap-2 font-bold items-center cursor-pointer">
                <span className="check"></span>
                Emergency Medical Assistance
              </span>

              <span className="flex gap-2 font-bold items-center cursor-pointer">
                <span className="check"></span>
                Other
              </span>
            </div>
          </div>

          <button className="cta">Send Message</button>
        </form>
        <div className="contact-info flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2>Talk to us</h2>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.link/3r51je"
              className="flex gap-2 items-center"
            >
              <IconBrandWhatsapp />
              WhatsApp chat
            </Link>

            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <IconBrandInstagram />
              Follow us on Instagram
            </Link>

            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <IconBrandLinkedin />
              Lets talk on LinkedIn
            </Link>

            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <IconBrandFacebook />
              Connect with us on Facebook
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h2>Call us</h2>

            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <IconPhone />
              +265 888 88 888  |  +265 999 99 999
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h2>Visit us</h2>

            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              Physical Office Address
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
