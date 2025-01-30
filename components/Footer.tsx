import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer flex gap-4 justify-between">
      <div className="info flex flex-col gap-4">
        <p>
          We provide fast, professional emergency response services to protect
          lives and property. From medical aid to fire and security support, our
          Immediate Response Unit is committed to keeping you safe, 24/7
        </p>

        <div className="follow flex gap-4">
          Follow us one:
          <IconBrandLinkedin />
          <IconBrandFacebook />
          <IconBrandInstagram />
        </div>
      </div>

      <div className="links flex flex-col gap-2">
        <Link href="/">Home</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#pricing">Pricing</Link>
      </div>

      <div className="links flex flex-col gap-2">
        <Link href="/contact">Contact</Link>
        <Link href="/#testimonials">Testimonials</Link>
        <Link href="/#reasons">Why IRU</Link>
      </div>

      <div className="links flex flex-col gap-2">
        <Link href="/terms">Terms of Service</Link>
      </div>
    </div>
  );
}

export default Footer;
