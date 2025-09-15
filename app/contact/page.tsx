import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    details: ["123 Business District", "Tech City, TC 12345", "United States"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["hello@artfulpro.com", "support@artfulpro.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              Get In Touch
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-muted-foreground text-pretty">
              Ready to start your next project? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon
              as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6 sm:mb-8">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Contact Information</h2>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info) => (
                  <Card key={info.title}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start space-x-4">
                        <div className="rounded-lg bg-secondary/10 p-2 sm:p-3">
                          <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, index) => (
                              <p key={index} className="text-sm sm:text-base text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
              Visit Our Office
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty">
              We&apos;re located in the heart of the tech district
            </p>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Map integration would be implemented here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
