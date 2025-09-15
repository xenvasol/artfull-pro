import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

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
    role: "Operations Director",
    content:
      "The ERP solution they implemented streamlined our entire operation. We've seen a 40% increase in efficiency since deployment.",
    rating: 5,
    avatar: "/professional-man-operations-director.jpg",
  },
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
    name: "David Park",
    company: "AutoFlow Solutions",
    role: "CTO",
    content:
      "The AI automation they built using n8n and custom integrations saved us countless hours. ROI was achieved within 3 months.",
    rating: 5,
    avatar: "/tech-executive-man-cto.jpg",
  },
  {
    name: "Lisa Thompson",
    company: "E-commerce Plus",
    role: "Marketing Manager",
    content:
      "From concept to launch, their team delivered a beautiful, functional e-commerce platform that boosted our sales by 60%.",
    rating: 5,
    avatar: "/marketing-manager-woman.jpg",
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
]

export default function ReviewsSection() {
  return (
    <section className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our work.
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
                <blockquote className="text-sm text-muted-foreground mb-4">&quot;{review.content}&quot;</blockquote>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
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
