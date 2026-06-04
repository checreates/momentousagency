import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export function LegalPageLayout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 lg:pt-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground mb-2">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            {" / "}
            <span className="text-foreground">{title}</span>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-8">
            {title}
          </h1>
          <article className="space-y-6 text-muted-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:hover:underline [&_strong]:text-foreground">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
