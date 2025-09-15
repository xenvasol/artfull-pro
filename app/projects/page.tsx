import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectShowcase from "@/components/project-showcase"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
                Our Project Portfolio
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                Discover the innovative solutions we've created for businesses across various industries. From web
                development to AI automation, each project showcases our commitment to excellence.
              </p>
            </div>
          </div>
        </section>
        <ProjectShowcase
          showAll={true}
          title="All Projects"
          description="Browse through our complete portfolio of successful projects across all service categories."
        />
      </main>
      <Footer />
    </div>
  )
}
