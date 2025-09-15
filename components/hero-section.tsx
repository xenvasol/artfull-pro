import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Settings, Bot } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-12 lg:py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
            Transform Your Business with{" "}
            <span className="text-muted-foreground">Artful Pro</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            We deliver cutting-edge web development, stunning graphic design,
            robust ERP solutions, and intelligent AI automation to help your
            business thrive in the digital age.
          </p>
          <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-x-6">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 w-full lg:w-fit"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full lg:w-fit mt-2 lg:mt-0"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="flex flex-col items-center text-center bg-gray-50 w-auto p-3 rounded-lg shadow-sm">
              <div className="rounded-full bg-secondary/10 p-4 mb-4">
                <Code className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                Development
              </h3>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 w-auto p-3 rounded-lg shadow-sm">
              <div className="rounded-full bg-secondary/10 p-4 mb-4">
                <Palette className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Design</h3>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 w-auto p-3 rounded-lg shadow-sm">
              <div className="rounded-full bg-secondary/10 p-4 mb-4">
                <Settings className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                ERP Solutions
              </h3>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 w-auto p-3 rounded-lg shadow-sm">
              <div className="rounded-full bg-secondary/10 p-4 mb-4">
                <Bot className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                AI Automation
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
