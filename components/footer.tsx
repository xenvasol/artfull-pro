import { CompleteLogo } from "@/assets";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 text-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Company Info */}
          <div className="space-y-8">
            <div>
              <div className="flex w-full items-center mb-3">
                <Image src={CompleteLogo} alt="Logo" width={50} height={30} />
                <h3 className="text-3xl font-bold">Artful Pro</h3>
              </div>
              <p className="text-lg text-gray-500 mb-6">
                Transforming businesses through innovative development, stunning
                design, robust ERP solutions, and intelligent automation.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-black">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>artfulpro@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>+92 326 8631095</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div> */}
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-xl font-semibold text-black mb-4">
                Our Services
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/services/development"
                  className="hover:text-black text-gray-700 transition-colors"
                >
                  Web Development
                </Link>
                <Link
                  href="/services/design"
                  className="hover:text-black text-gray-700 transition-colors"
                >
                  Graphic Design
                </Link>
                <Link
                  href="/services/erp"
                  className="hover:text-black text-gray-700 transition-colors"
                >
                  ERP Solutions
                </Link>
                <Link
                  href="/services/ai-automation"
                  className="hover:text-black text-gray-700 transition-colors"
                >
                  AI Automation
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-800 hover:text-blue-500"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-800 hover:text-blue-500"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-800 hover:text-blue-500"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex">
              <Image src={CompleteLogo} alt="Logo" width={20} height={20} />
              <p className="text-primary-foreground/60">
                © 2025 Artful Pro. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link
                href="/privacy"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
