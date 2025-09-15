import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicePageTemplate from "@/components/service-page-template"
import { Palette } from "lucide-react"

const projects = [
  {
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, color palette, typography, and brand guidelines.",
    image: "/modern-brand-identity.png",
    technologies: ["Adobe Illustrator", "Figma", "Photoshop"],
    link: "#",
  },
  {
    title: "Mobile App UI/UX",
    description: "User interface and experience design for a fintech mobile application with intuitive navigation.",
    image: "/mobile-app-ui-design.png",
    technologies: ["Figma", "Sketch", "Principle", "InVision"],
    link: "#",
  },
  {
    title: "Website Redesign",
    description: "Complete website redesign focusing on user experience and conversion optimization.",
    image: "/website-redesign-mockup.png",
    technologies: ["Figma", "Adobe XD", "Photoshop"],
    link: "#",
  },
]

const reviews = [
  {
    name: "Emily Rodriguez",
    company: "Creative Agency",
    role: "Creative Director",
    content:
      "Their design team created a brand identity that perfectly captures our vision. The UI/UX work exceeded all expectations.",
    rating: 5,
    avatar: "/creative-director-woman.png",
  },
  {
    name: "Lisa Thompson",
    company: "E-commerce Plus",
    role: "Marketing Manager",
    content: "The website redesign they delivered was stunning. Our conversion rates improved by 45% after the launch.",
    rating: 5,
    avatar: "/marketing-manager-woman.jpg",
  },
  {
    name: "Alex Kim",
    company: "Fashion Brand",
    role: "Brand Manager",
    content:
      "Outstanding creative work. They understood our brand vision and translated it into beautiful, functional designs.",
    rating: 5,
    avatar: "/professional-woman-diverse.png",
  },
]

export default function DesignPage() {
  return (
    <div>
      <Navbar />
      <ServicePageTemplate
        title="Graphic Design"
        description="Brand identity, UI/UX design, marketing materials, and visual content that captivates your audience. We create designs that not only look great but also drive results."
        icon={Palette}
        category="Design Services"
        technologies={[
          "Adobe Creative Suite",
          "Figma",
          "Sketch",
          "Adobe XD",
          "Canva Pro",
          "InVision",
          "Principle",
          "After Effects",
          "Illustrator",
          "Photoshop",
          "InDesign",
          "Framer",
        ]}
        features={[
          "Brand identity and logo design",
          "UI/UX design for web and mobile",
          "Marketing materials and collateral",
          "Social media graphics and content",
          "Print design and layout",
          "Packaging and product design",
          "Website and landing page design",
          "Design system development",
        ]}
        projects={projects}
        reviews={reviews}
        ctaText="Start Your Design Project"
      />
      <Footer />
    </div>
  )
}
