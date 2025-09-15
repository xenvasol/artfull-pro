import {
  AppDevelopment,
  CustomSoftwareDevelopment,
  XenaraAI
} from "@/assets";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const featuredProjects: Project[] = [
  {
    title: "Xenara AI",
    description:
      "The AI-driven customer service platform for commerce, merging human empathy with AI to handle over 90% of daily inquiries and resolve issues 98% faster.",
    image: XenaraAI,
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Stripe", "NestJs", "Material UI"],
    liveUrl: "https://www.xenara.ai",
    // githubUrl: "#",
    featured: true,
  },
  {
    title: "Pink Elephants",
    description:
      "Your Productivity and Mental Wellness App. Empowering Personal Growth and Mindfulness.Leaders and Enterpreneurs.",
    image: AppDevelopment,
    category: "Mobile App Development",
    technologies: ["Flutter", "Dart", "Firebase", "Node.js"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.pinkelephants.amberx",
    featured: true,
  },
  // {
  //   title: "Manufacturing ERP System",
  //   description:
  //     "Enterprise resource planning system for manufacturing operations with real-time inventory tracking, production scheduling, and financial reporting.",
  //   image: "/manufacturing-erp-dashboard.png",
  //   category: "ERP Solutions",
  //   technologies: ["SAP", "Oracle", "Power BI", "SQL Server"],
  //   liveUrl: "#",
  //   featured: true,
  // },
  {
    title: "Custom Software Development",
    description:
      "End-to-end software solutions built specifically for your business processes and goals",
    image: CustomSoftwareDevelopment,
    category: "Custom Software",
    technologies: ["Typescript", "Java", "Flutter", "Figma", "ElectronJs"],
    liveUrl: "#",
    featured: true,
  },
];

const allProjects: Project[] = [
  ...featuredProjects,
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics dashboard with custom visualizations and reporting capabilities.",
    image: "/saas-analytics-dashboard.png",
    category: "Web Development",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    liveUrl: "#",
  },
  {
    title: "Mobile App UI Design",
    description:
      "Complete UI/UX design for a fintech mobile application with focus on user experience.",
    image: "/mobile-app-ui-design.png",
    category: "Graphic Design",
    technologies: ["Figma", "Sketch", "Principle"],
    liveUrl: "#",
  },
  {
    title: "Healthcare ERP Solution",
    description:
      "HIPAA-compliant ERP system for healthcare providers with patient management integration.",
    image: "/healthcare-erp-system.jpg",
    category: "ERP Solutions",
    technologies: ["Custom Solution", "PostgreSQL", "React"],
    liveUrl: "#",
  },
  {
    title: "Sales Automation Pipeline",
    description:
      "Complete sales process automation with lead scoring and CRM integration.",
    image: "/sales-automation-dashboard.jpg",
    category: "AI Automation",
    technologies: ["Make", "Salesforce", "Python"],
    liveUrl: "#",
  },
];

interface ProjectShowcaseProps {
  showAll?: boolean;
  title?: string;
  description?: string;
}

export default function ProjectShowcase({
  showAll = false,
  title = "Featured Projects",
  description = "Explore our latest work across development, design, ERP, and AI automation.",
}: ProjectShowcaseProps) {
  const projects = showAll ? allProjects : featuredProjects;

  return (
    <section className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-500 text-pretty">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative aspect-video h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Header */}
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="text-xs bg-blue-700">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge
                      variant="outline"
                      className="text-xs border-blue-700 text-blue-700"
                    >
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-blue-700 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-700">
                  {project.description}
                </CardDescription>
              </CardHeader>

              {/* Content (technologies) */}
              <CardContent className="space-y-4 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardContent>

              {/* Footer pinned at bottom */}
              <div className="p-6 pt-0 mt-auto">
                <div className="flex space-x-2">
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 bg-transparent"
                    >
                      <Link href={project.liveUrl}>
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Live
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 bg-transparent"
                    >
                      <Link href={project.githubUrl}>
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
