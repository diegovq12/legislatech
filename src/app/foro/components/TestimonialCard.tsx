"use client"

import Link from "next/link"
import { MessageCircle, ThumbsUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Testimonial {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  tags: {
    state: string
    municipality: string
    year: string
    module: string
  }
  comments: number
  supportCount: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Link href={`/testimonial/${testimonial.id}`}>
      <Card className="hover:bg-pink-50 transition-colors">
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-pink-600">{testimonial.title}</h3>
              <p className="text-gray-600 mt-2">{testimonial.excerpt}</p>
              <div className="mt-4 flex gap-2">
                <Badge variant="secondary">{testimonial.tags.state}</Badge>
                <Badge variant="secondary">{testimonial.tags.module}</Badge>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{testimonial.date}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{testimonial.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{testimonial.supportCount}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}