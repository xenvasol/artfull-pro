import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

interface Review {
  name: string
  company: string
  role: string
  content: string
  rating: number
  avatar: string
  service: string
  projectValue?: string
  completionTime?: string
}

const detailedReviews: Review[] = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "Artful Pro transformed our outdated website into a modern, high-performing platform. Their development team's expertise in React and Next.js is outstanding. The project was delivered on time and exceeded our expectations.",
    rating: 5,
    avatar: "/professional-woman-ceo.png",
    service: "Web Development",
    projectValue: "$25,000",
    completionTime: "6 weeks",
  },
  {
    name: "Michael Chen",
    company: "RetailMax",
    role: "Operations Director",
    content:
      "The ERP solution they implemented streamlined our entire operation. We've seen a 40% increase in efficiency since deployment. Their team provided excellent training and ongoing support.",
    rating: 5,
    avatar: "/professional-man-operations-director.jpg",
    service: "ERP Solutions",
    projectValue: "$75,000",
    completionTime: "12 weeks",
  },
  {
    name: "Emily Rodriguez",
    company: "Creative Agency",
    role: "Creative Director",
    content:
      "Their design team created a brand identity that perfectly captures our vision. The UI/UX work exceeded all expectations. Our client satisfaction has increased significantly since the rebrand.",
    rating: 5,
    avatar: "/creative-director-woman.png",
    service: "Graphic Design",
    projectValue: "$15,000",
    completionTime: "4 weeks",
  },
  {
    name: "David Park",
    company: "AutoFlow Solutions",
    role: "CTO",
    content:
      "The AI automation they built using n8n and custom integrations saved us countless hours. ROI was achieved within 3 months. The system handles 80% of our customer inquiries automatically.",
    rating: 5,
    avatar: "/tech-executive-man-cto.jpg",
    service: "AI Automation",
    projectValue: "$35,000",
    completionTime: "8 weeks",
  },
  {
    name: "Lisa Thompson",
    company: "E-commerce Plus",
    role: "Marketing Manager",
    content:
      "From concept to launch, their team delivered a beautiful, functional e-commerce platform that boosted our sales by 60%. The attention to detail and user experience is remarkable.",
    rating: 5,
    avatar: "/marketing-manager-woman.jpg",
    service: "Web Development",
    projectValue: "$40,000",
    completionTime: "10 weeks",
  },
  {
    name: "James Wilson",
    company: "Manufacturing Corp",
    role: "IT Director",
    content:
      "Their comprehensive approach to our digital transformation was impressive. Every aspect was handled professionally. The new ERP system has revolutionized our operations.",
    rating: 5,
    avatar: "/it-director-man.jpg",
    service: "ERP Solutions",
    projectValue: "$120,000",
    completionTime: "16 weeks",
  },
]

interface EnhancedReviewsProps {
  title?: string
  description?: string
  showProjectDetails?: boolean
}

export default function EnhancedReviews({
  title = "What Our Clients Say",
  description = "Don't just take our word for it. Here's what our satisfied clients have to say about our work.",
}: EnhancedReviewsProps) {
  return (
    <section className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">{title}</h2>
          <p className="mt-4 text-lg text-gray-500 text-pretty">{description}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {detailedReviews.map((review, index) => (
            <Card key={index} className="bg-background relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-8 w-8 text-secondary" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-blue-700 text-blue-700" />
                    ))}
                  </div>
                  <Badge className="text-xs bg-blue-700">
                    {review.service}
                  </Badge>
                </div>

                <blockquote className="text-sm text-gray-800 mb-6 leading-relaxed">
                  &quot;{review.content}&quot;
                </blockquote>

                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                    <AvatarFallback>
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{review.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {review.role}, {review.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
