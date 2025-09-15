import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { servicesOverview } from "@/lib/services-data";

export default function ServicesOverview() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
            Our Expert Services
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty">
            From concept to deployment, we provide comprehensive solutions
            tailored to your business needs.
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {servicesOverview.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2">
                  <div className="rounded-lg bg-secondary/10 p-2 sm:p-3 bg-blue-50">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-lg sm:text-xl leading-tight">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-sm sm:text-base leading-relaxed mt-3">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6 flex-grow">
                {/* Technologies */}
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="text-xs px-2 py-0.5 bg-gray-50 text-blue-900 hover:bg-gray-100"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 text-secondary flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>

              {/* Learn More pinned at bottom */}
              <div className="px-6 py-3 mt-auto">
                <Button
                  asChild
                  className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors"
                >
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
