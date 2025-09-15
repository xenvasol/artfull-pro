import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicePageTemplate from "@/components/service-page-template"
import { Code } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/modern-ecommerce-website.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for a SaaS platform with real-time data visualization and user management.",
    image: "/saas-analytics-dashboard.png",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    link: "#",
  },
  {
    title: "Corporate Website",
    description: "Responsive corporate website with CMS integration and SEO optimization.",
    image: "/professional-corporate-website.png",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    link: "#",
  },
]

const reviews = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "Artful Pro transformed our outdated website into a modern, high-performing platform. Their development team's expertise in React and Next.js is outstanding.",
    rating: 5,
    avatar: "/professional-woman-ceo.png",
  },
  {
    name: "Michael Chen",
    company: "RetailMax",
    role: "CTO",
    content:
      "The e-commerce platform they built exceeded our expectations. Performance is excellent and the code quality is top-notch.",
    rating: 5,
    avatar: "/professional-man.png",
  },
  {
    name: "David Park",
    company: "StartupFlow",
    role: "Founder",
    content:
      "From concept to deployment, their development process was smooth and professional. Highly recommend their services.",
    rating: 5,
    avatar: "/tech-executive-man-cto.jpg",
  },
]

export default function DevelopmentPage() {
  return (
    <div>
      <Navbar />
      <ServicePageTemplate
        title="Web Development"
        description="Custom web applications, e-commerce platforms, and responsive websites built with cutting-edge technologies. We create scalable, performant solutions that drive business growth."
        icon={Code}
        category="Development Services"
        technologies={[
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Python",
          "PostgreSQL",
          "MongoDB",
          "AWS",
          "Vercel",
          "Docker",
          "GraphQL",
          "REST APIs",
        ]}
        features={[
          "Responsive web design for all devices",
          "Custom web application development",
          "E-commerce platform development",
          "API development and integration",
          "Database design and optimization",
          "Performance optimization and SEO",
          "Cloud deployment and hosting",
          "Ongoing maintenance and support",
        ]}
        projects={projects}
        reviews={reviews}
        ctaText="Start Your Development Project"
      />
      <Footer />
    </div>
  )
}
