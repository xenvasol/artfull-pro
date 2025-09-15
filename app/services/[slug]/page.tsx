import { notFound } from "next/navigation"
import { getServiceBySlug } from "@/lib/services-data"
import ServicePageTemplate from "@/components/service-page-template"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  console.log("[v0] Service page params:", params)
  const service = getServiceBySlug(params.slug)
  console.log("[v0] Found service:", service ? service.title : "Not found")

  if (!service) {
    console.log("[v0] Service not found, redirecting to 404")
    notFound()
  }

  return <ServicePageTemplate service={service} />
}

export async function generateStaticParams() {
  const { getAllServices } = await import("@/lib/services-data")
  const services = getAllServices()

  console.log(
    "[v0] Generating static params for services:",
    services.map((s) => s.slug),
  )

  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} - Artful Pro`,
    description: service.description,
  }
}
