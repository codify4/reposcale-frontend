"use client"

import { useState } from "react"
import { Navigation } from "@/components/sections/navigation"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/constants/blogs"

const categories = ["all", "security", "development", "workflow", "collaboration"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory)
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight lowercase">
                reposcale <span className="underline decoration-4 underline-offset-8">articles</span>
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed lowercase">
                insights, tutorials, and best practices for secure repository sharing and development workflows.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 pt-8">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === selectedCategory ? "secondary" : "default"}
                  className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors rounded-none ${category === selectedCategory ? "hover:bg-white/90" : "hover:bg-neutral-800"}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.toLowerCase()}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16">
        <div className="container mx-auto px-5 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-black border border-white/20 hover:border-white/40 transition-all duration-300 group rounded-none p-0">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-black text-xs font-bold rounded-none">
                        {post.category.toLowerCase()}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-4">
                    <CardTitle className="text-lg font-bold leading-tight text-white  group-hover:text-white/80 transition-colors lowercase">
                      {post.title.toLowerCase()}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed lowercase text-sm">
                      {post.excerpt.toLowerCase().slice(0, 100)}...
                    </CardDescription>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span className="lowercase">{post.author.toLowerCase()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span className="lowercase">{post.readTime.toLowerCase()}</span>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Button 
                      variant="ghost" 
                      className="w-full bg-white text-black hover:bg-white/90 group-hover:bg-white group-hover:text-black transition-all duration-300 rounded-none py-2"
                    >
                      read more
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-none">
              load more posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}