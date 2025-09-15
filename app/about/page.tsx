import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Users, Target, Award, TrendingUp, ArrowRight, Globe, Zap, Shield, Heart } from "lucide-react"

const stats = [
  { name: "Projects Completed", value: "500+", icon: Target },
  { name: "Happy Clients", value: "200+", icon: Users },
  { name: "Years Experience", value: "8+", icon: Award },
  { name: "Team Members", value: "25+", icon: TrendingUp },
]

const values = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "We serve clients worldwide, bringing diverse perspectives to every project.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every project undergoes rigorous testing and quality control processes.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships with our clients.",
  },
]

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "/professional-man.png",
    description: "Visionary leader with 10+ years in tech industry",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "/tech-executive-woman.png",
    description: "Technical expert specializing in scalable architectures",
  },
  {
    name: "Michael Rodriguez",
    role: "Creative Director",
    image: "/creative-director-man.png",
    description: "Award-winning designer with eye for detail",
  },
  {
    name: "Emily Foster",
    role: "Project Manager",
    image: "/project-manager-woman.png",
    description: "Ensures seamless project delivery and client satisfaction",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              About Artful Pro
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-muted-foreground text-pretty">
              We&apos;re a passionate team of developers, designers, and innovators dedicated to transforming your digital
              vision into reality.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto">
                <Link href="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <Card key={stat.name} className="text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="rounded-full bg-secondary/10 p-3">
                      <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center mb-8 sm:mb-12">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Founded in 2016, Artful Pro began as a small team of passionate developers and designers who believed
                that technology should be both powerful and beautiful. What started as a vision to create exceptional
                digital experiences has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                Over the years, we&apos;ve evolved from a startup to a trusted partner for businesses of all sizes. Our
                journey has been marked by continuous learning, adaptation to new technologies, and an unwavering
                commitment to delivering excellence in every project we undertake.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Today, we&apos;re proud to be at the forefront of digital innovation, helping businesses transform their
                ideas into successful digital products that make a real impact in their industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
              Our Values
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center h-full">
                <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-secondary/10 p-3">
                      <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
              Meet Our Team
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty">
              The talented individuals behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="aspect-square overflow-hidden rounded-full mx-auto mb-4 w-20 h-20 sm:w-24 sm:h-24">
                    <img
                      src={member.image || "/placeholder.svg?height=100&width=100"}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-secondary font-medium mb-2">{member.role}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
              Ready to Work Together?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty">
              Let&apos;s discuss how we can help bring your digital vision to life.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="/projects">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
