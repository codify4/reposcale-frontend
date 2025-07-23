import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Navigation } from "@/components/sections/navigation"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/constants/blogs"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found."
    }
  }

  return {
    title: `${post.title} | reposcale blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div> */}
        
        <div className="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/blog">
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground hover:bg-transparent hover:text-white transition-colors p-0 h-auto"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  back to articles
                </Button>
              </Link>
            </div>

            <div className="space-y-6 mb-12">
              <div className="space-y-4">
                <Badge className="bg-white text-black text-xs font-bold rounded-none px-3 py-1">
                  {post.category.toLowerCase()}
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight lowercase">
                  {post.title.toLowerCase()}
                </h1>
                <p className="text-base lg:text-lg text-muted-foreground font-medium leading-relaxed lowercase">
                  {post.excerpt.toLowerCase()}
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="lowercase">{post.author.toLowerCase()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="lowercase">{post.readTime.toLowerCase()}</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden mb-12 rounded-none">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <h2 className="text-2xl font-bold text-white lowercase mt-12 mb-6">
                  getting started
                </h2>
                
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <h2 className="text-2xl font-bold text-white lowercase mt-12 mb-6">
                  implementation
                </h2>
                
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                
                <h2 className="text-2xl font-bold text-white lowercase mt-12 mb-6">
                  best practices
                </h2>
                
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                
                <h2 className="text-2xl font-bold text-white lowercase mt-12 mb-6">
                  conclusion
                </h2>
                
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/20">
              <h3 className="text-2xl font-bold text-white lowercase mb-8">
                related articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(relatedPost => relatedPost.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                      <div className="group cursor-pointer">
                        <div className="relative aspect-video overflow-hidden mb-4">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-white group-hover:text-white/80 transition-colors lowercase mb-2">
                          {relatedPost.title.toLowerCase()}
                        </h4>
                        <p className="text-sm text-muted-foreground lowercase">
                          {relatedPost.excerpt.toLowerCase().slice(0, 80)}...
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 