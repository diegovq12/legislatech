"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import ForumSidebar from "./components/sidebar"
import TestimonialCard from "./components/TestimonialCard"

export default function CommunityForum() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  // Sample testimonial data (same as before)
  const testimonials =  [
    {
      id: 1,
      title: "My experience as a candidate in municipal elections",
      excerpt: "I faced constant harassment and threats during my campaign for city council...",
      author: "Anonymous",
      date: "2024-02-15",
      tags: {
        state: "Chihuahua",
        municipality: "Ciudad Juárez",
        year: "2023",
        module: "Electoral Process",
      },
      comments: 12,
      supportCount: 45,
    },
    {
      id: 2,
      title: "Discrimination in political party leadership",
      excerpt: "Despite my qualifications, I was repeatedly passed over for leadership positions within my party...",
      author: "M.G.",
      date: "2024-01-10",
      tags: {
        state: "Oaxaca",
        municipality: "Oaxaca de Juárez",
        year: "2022",
        module: "Political Parties",
      },
      comments: 8,
      supportCount: 32,
    }, ]

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const clearFilters = () => {
    setActiveFilters([])
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header component */}
      <header>...</header>

      <main className="flex-1 container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <ForumSidebar
              activeFilters={activeFilters}
              searchQuery={searchQuery}
              toggleFilter={toggleFilter}
              clearFilters={clearFilters}
              setSearchQuery={setSearchQuery}
            />
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="bg-pink-50">
                {/* Similar header content */}
              </CardHeader>
              <CardContent className="p-4">
                <Tabs defaultValue="all">
                  <TabsList className="mb-4">
                    {/* Tabs */}
                  </TabsList>

                  <TabsContent value="all" className="space-y-4">
                    {testimonials.map((testimonial) => (
                      <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                  </TabsContent>

                  {/* Other tab contents */}
                </Tabs>
              </CardContent>
              <CardFooter>
                {/* Pagination */}
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer component */}
      <footer>...</footer>
    </div>
  )
}