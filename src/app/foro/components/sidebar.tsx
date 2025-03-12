"use client"

import { useState } from "react"
import { MapPin, Calendar, Grid3X3, Search, Filter } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

interface ForumSidebarProps {
  activeFilters: string[]
  searchQuery: string
  toggleFilter: (filter: string) => void
  clearFilters: () => void
  setSearchQuery: (query: string) => void
}

export default function ForumSidebar({
  activeFilters,
  searchQuery,
  toggleFilter,
  clearFilters,
  setSearchQuery
}: ForumSidebarProps) {
  return (
    <Card>
      <CardHeader className="bg-pink-50">
        <CardTitle className="text-pink-600 flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {/* Similar content to the original sidebar */}
        {/* Implement the search, state, municipality, year, and module filters */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Search</h3>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search testimonials..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Add other filter sections similar to the original code */}
          
          <Button
            variant="outline"
            className="w-full border-pink-200 text-pink-600 hover:bg-pink-50"
            onClick={clearFilters}
          >
            Clear All Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}