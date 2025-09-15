import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicePageTemplate from "@/components/service-page-template"
import { Bot } from "lucide-react"

const projects = [
  {
    title: "Customer Service Automation",
    description:
      "AI-powered chatbot and workflow automation system that handles 80% of customer inquiries automatically.",
    image: "/ai-chatbot-customer-service.png",
    technologies: ["n8n", "OpenAI", "Zapier", "Slack API"],
    link: "#",
  },
  {
    title: "Sales Process Automation",
    description: "Complete sales funnel automation with lead scoring, email sequences, and CRM integration.",
    image: "/sales-automation-dashboard.jpg",
    technologies: ["Make", "HubSpot", "Salesforce", "Python"],
    link: "#",
  },
  {
    title: "Data Processing Pipeline",
    description: "Automated data collection, processing, and reporting system for business intelligence.",
    image: "/data-processing-automation.png",
    technologies: ["Python", "Apache Airflow", "AWS", "Power BI"],
    link: "#",
  },
]

const reviews = [
  {
    name: "David Park",
    company: "AutoFlow Solutions",
    role: "CTO",
    content:
      "The AI automation they built using n8n and custom integrations saved us countless hours. ROI was achieved within 3 months.",
    rating: 5,
    avatar: "/tech-executive-man-cto.jpg",
  },
  {
    name: "Jennifer Adams",
    company: "SalesForce Pro",
    role: "VP of Operations",
    content:
      "Their automation solutions transformed our sales process. We're now processing 3x more leads with the same team size.",
    rating: 5,
    avatar: "/professional-business-woman.png",
  },
  {
    name: "Robert Martinez",
    company: "DataFlow Inc",
    role: "Data Director",
    content:
      "The automated reporting system they built saves us 20 hours per week. The insights we get are invaluable for decision making.",
    rating: 5,
    avatar: "/professional-data-executive.jpg",
  },
]

export default function AIAutomationPage() {
  return (
    <div>
      <Navbar />
      <ServicePageTemplate
        title="AI Automation"
        description="Intelligent automation solutions using n8n, Make, Zapier, and custom AI implementations. We help businesses automate repetitive tasks and make smarter decisions with AI."
        icon={Bot}
        category="AI & Automation Services"
        technologies={[
          "n8n",
          "Make (Integromat)",
          "Zapier",
          "OpenAI",
          "Python",
          "TensorFlow",
          "Langchain",
          "Hugging Face",
          "AWS Lambda",
          "Google Cloud",
          "Webhook APIs",
          "REST APIs",
        ]}
        features={[
          "Workflow automation and optimization",
          "AI chatbot development and deployment",
          "Custom AI model development",
          "API integrations and data synchronization",
          "Business process automation",
          "Intelligent document processing",
          "Predictive analytics and insights",
          "24/7 monitoring and maintenance",
        ]}
        projects={projects}
        reviews={reviews}
        ctaText="Start Your Automation Project"
      />
      <Footer />
    </div>
  )
}
