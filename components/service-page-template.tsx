import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ArrowRight, CheckCircle } from "lucide-react"
import type { Service } from "@/lib/services-data"

interface ServicePageProps {
  service: Service
}

export default function ServicePageTemplate({ service }: ServicePageProps) {
  console.log("Rendering service template for:", service.title)

  const {
    title,
    description,
    detailedDescription,
    icon: Icon,
    category,
    technologies,
    features,
    keyBenefits,
    projects,
    reviews,
    ctaText = "Start Your Project",
  } = service

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-8">
              <div className="rounded-full bg-secondary/10 p-6">
                <Icon className="h-12 w-12 text-secondary" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4">
              {category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">{description}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link href="#contact">
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{detailedDescription}</p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Technologies We Use</CardTitle>
                <CardDescription>
                  We leverage the latest and most reliable technologies to deliver exceptional results.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="justify-center py-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">What You Get</CardTitle>
                <CardDescription>
                  Comprehensive solutions designed to meet your specific business needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {feature.icon && <feature.icon className="h-5 w-5 text-secondary" />}
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Benefits */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">Key Benefits</CardTitle>
                <CardDescription>Value you get from our service</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="projects" className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Recent Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Take a look at some of our latest work in {title.toLowerCase()}.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg?height=200&width=300"}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.link}>
                        View Project
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Client Reviews
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              What our clients say about our {title.toLowerCase()} services.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                    &quot;{review.comment}&quot;
                  </blockquote>
                  <div className="flex items-center space-x-3 mt-auto">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={review.image || "/placeholder.svg"} alt={review.name} />
                      <AvatarFallback>
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{review.name}</div>
                      <div className="text-xs text-muted-foreground">{review.company}</div>
                      <div className="text-xs text-muted-foreground">Project: {review.project}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Let&apos;s discuss your {title.toLowerCase()} project and bring your vision to life.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link href="/contact">
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
