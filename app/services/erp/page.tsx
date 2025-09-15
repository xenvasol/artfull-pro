import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicePageTemplate from "@/components/service-page-template"
import { Settings } from "lucide-react"

const projects = [
  {
    title: "Manufacturing ERP System",
    description:
      "Comprehensive ERP solution for a manufacturing company with inventory, production, and financial modules.",
    image: "/manufacturing-erp-dashboard.png",
    technologies: ["SAP", "Oracle", "Custom Development", "SQL Server"],
    link: "#",
  },
  {
    title: "Retail Management System",
    description: "Integrated retail management system with POS, inventory, and customer relationship management.",
    image: "/retail-management-system-interface.png",
    technologies: ["Microsoft Dynamics", "Power BI", "Azure", "SQL"],
    link: "#",
  },
  {
    title: "Healthcare ERP Solution",
    description: "HIPAA-compliant ERP system for healthcare providers with patient management and billing integration.",
    image: "/healthcare-erp-system.jpg",
    technologies: ["Custom Solution", "PostgreSQL", "React", "Node.js"],
    link: "#",
  },
]

const reviews = [
  {
    name: "Michael Chen",
    company: "RetailMax",
    role: "Operations Director",
    content:
      "The ERP solution they implemented streamlined our entire operation. We've seen a 40% increase in efficiency since deployment.",
    rating: 5,
    avatar: "/professional-man-operations-director.jpg",
  },
  {
    name: "James Wilson",
    company: "Manufacturing Corp",
    role: "IT Director",
    content:
      "Their comprehensive approach to our digital transformation was impressive. Every aspect was handled professionally.",
    rating: 5,
    avatar: "/it-director-man.jpg",
  },
  {
    name: "Rachel Green",
    company: "Healthcare Solutions",
    role: "COO",
    content:
      "The ERP system transformed our operations. Patient management is now seamless and our staff productivity has doubled.",
    rating: 5,
    avatar: "/professional-healthcare-executive.jpg",
  },
]

export default function ERPPage() {
  return (
    <div>
      <Navbar />
      <ServicePageTemplate
        title="ERP Solutions"
        description="Comprehensive enterprise resource planning systems to streamline your business operations. We implement and customize ERP solutions that grow with your business."
        icon={Settings}
        category="Enterprise Solutions"
        technologies={[
          "SAP",
          "Oracle ERP",
          "Microsoft Dynamics",
          "NetSuite",
          "Odoo",
          "Custom Solutions",
          "SQL Server",
          "PostgreSQL",
          "Power BI",
          "Tableau",
          "Azure",
          "AWS",
        ]}
        features={[
          "Business process analysis and optimization",
          "ERP system selection and implementation",
          "Custom module development",
          "Data migration and integration",
          "Training and change management",
          "Ongoing support and maintenance",
          "Business intelligence and reporting",
          "Cloud deployment and hosting",
        ]}
        projects={projects}
        reviews={reviews}
        ctaText="Start Your ERP Project"
      />
      <Footer />
    </div>
  )
}
