import { Twitter, Youtube, Facebook } from "lucide-react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <Container>
        {/* Top Navigation */}
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Apps</a>
          <a className="link link-hover">Installations Apps</a>
        </nav>

        {/* Social Icons */}
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-primary transition-colors duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-primary transition-colors duration-300"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary transition-colors duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </nav>

        {/* Copyright Section */}
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} — All rights reserved by{" "}
            <span className="font-semibold">HERO Apps Ltd.</span>
          </p>
        </aside>
      </Container>
    </footer>
  );
};

export default Footer;
