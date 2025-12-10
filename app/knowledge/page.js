"use client";
import { useState, useEffect, useMemo } from "react";
import Button from "../../components/Button";

export default function KnowledgePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [showTestimonials, setShowTestimonials] = useState(true);

  const categories = ["All", "Services", "Web Development", "Cloud & DevOps", "AI & Automation", "Cybersecurity", "Consulting", "Managed Services"];

  const testimonials = [
    {
      id: 1,
      name: "Emily Chen",
      location: "Sydney, Australia",
      date: "09, Feb 2024",
      text: "CoreMentors exceeded my expectations with their attention to detail and creativity. I'm thrilled with the solution they built for my business.",
      avatar: "EC",
      gradient: "from-[#EA7AF4] to-[#B43E8F]"
    },
    {
      id: 2,
      name: "Carlos Rodriguez",
      location: "Madrid, Spain",
      date: "19, Nov 2023",
      text: "CoreMentors is a true professional. They understood my vision and executed it flawlessly, resulting in outstanding results.",
      avatar: "CR",
      gradient: "from-[#6200B3] to-[#4056F4]"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      location: "London, UK",
      date: "05, Jan 2024",
      text: "The team's expertise in cloud infrastructure helped us scale our operations seamlessly. Highly recommended!",
      avatar: "SJ",
      gradient: "from-[#ec4899] to-[#6200B3]"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Professional Logo Design: Complete Guide to Brand Identity",
      category: "Services",
      excerpt: "Discover how a professional logo design can transform your business identity, build trust, and create instant brand recognition. Learn about our comprehensive logo designing process and what makes a logo truly effective.",
      date: "2024-02-20",
      author: "CoreMentors Team",
      image: "/api/placeholder/400/250",
      readTime: "12 min read",
      tags: ["Logo Design", "Brand Identity", "Graphic Design", "Branding"],
      views: 2150,
      likes: 156,
      featured: true,
      slug: "logo-designing"
    },
    {
      id: 2,
      title: "Social Media Management: Complete Guide to Digital Growth",
      category: "Services",
      excerpt: "Discover how professional social media management can transform your brand presence, increase engagement, and generate more leads. Learn about our comprehensive 5-phase process and proven strategies.",
      date: "2024-02-18",
      author: "CoreMentors Team",
      image: "/api/placeholder/400/250",
      readTime: "15 min read",
      tags: ["Social Media", "Marketing", "Content Strategy", "Brand Growth"],
      views: 1890,
      likes: 134,
      featured: true,
      slug: "social-media-management"
    },
    {
      id: 3,
      title: "GST Registration: Complete Guide to Legal Business Identity",
      category: "Services",
      excerpt: "Get your legal business identity under the Indian taxation system. Learn how GST registration enables you to sell legally, claim tax benefits, and expand your business nationwide without penalties or compliance issues.",
      date: "2024-02-16",
      author: "CoreMentors Team",
      image: "/api/placeholder/400/250",
      readTime: "14 min read",
      tags: ["GST", "Tax Registration", "Business Compliance", "Legal Identity"],
      views: 1650,
      likes: 98,
      featured: true,
      slug: "gst-registration"
    },
    {
      id: 4,
      title: "Branding & Identity: Complete Guide to Building Your Business Personality",
      category: "Services",
      excerpt: "Create the personality of your business that customers see, remember, and relate to. Learn how strategic branding builds authority, trust, and loyalty while making your business memorable and premium.",
      date: "2024-02-14",
      author: "CoreMentors Team",
      image: "/api/placeholder/400/250",
      readTime: "16 min read",
      tags: ["Branding", "Identity Design", "Corporate Identity", "Brand Strategy"],
      views: 1920,
      likes: 142,
      featured: true,
      slug: "branding-identity"
    },
    {
      id: 5,
      title: "App Development: Complete Guide to Mobile Business Solutions",
      category: "Services",
      excerpt: "Build fast, secure, attractive, and scalable mobile applications tailored to your business requirements. Turn your business into a mobile-friendly digital platform that customers visit again and again.",
      date: "2024-02-12",
      author: "CoreMentors Team",
      image: "/api/placeholder/400/250",
      readTime: "18 min read",
      tags: ["App Development", "Mobile Apps", "iOS", "Android", "Business Automation"],
      views: 1780,
      likes: 128,
      featured: true,
      slug: "app-development"
    },
    {
      id: 6,
      title: "Digital Strategy: Complete Guide to Online Business Growth",
      category: "Services",
      excerpt: "Build a complete digital roadmap that connects all channels and turns audiences into paying customers. Learn how strategic planning helps you achieve predictable business growth and maximum ROI.",
      date: "2024-02-10",
      author: "CoreMentors Team",
      image: "/api/placeholder/400/250",
      readTime: "17 min read",
      tags: ["Digital Strategy", "Marketing Strategy", "Business Growth", "Online Marketing"],
      views: 1650,
      likes: 115,
      featured: true,
      slug: "digital-strategy"
    },
    {
      id: 7,
      title: "Advertisement & Promotions: Complete Guide to Converting Campaigns",
      category: "Services",
      excerpt: "Reach the right customers at the right moment with campaigns that convert, not just create views. Learn how professional advertising generates continuous leads, sales, and enquiries for your business.",
      date: "2024-02-08",
      author: "CoreMentors Team",
      image: "/api/placeholder/400/250",
      readTime: "15 min read",
      tags: ["Advertising", "Digital Marketing", "Campaigns", "Promotions", "Lead Generation"],
      views: 1520,
      likes: 98,
      featured: true,
      slug: "advertisement-promotions"
    },
    {
      id: 8,
      title: "Why Every Business Needs Proper Accounting & Bookkeeping in 2026",
      category: "Services",
      excerpt: "Running a business is not just about selling—it is about managing money the right way. Learn how systematic accounting and bookkeeping provide real financial clarity and help your business grow confidently.",
      date: "2024-02-06",
      author: "CoreMentors Team",
      image: "/api/placeholder/400/250",
      readTime: "14 min read",
      tags: ["Accounting", "Bookkeeping", "Financial Management", "Business Finance", "Tax Compliance"],
      views: 1420,
      likes: 87,
      featured: true,
      slug: "accounting-bookkeeping"
    },
    {
      id: 9,
      title: "Why Filing the Right ITR Matters for Every Business and Individual",
      category: "Services",
      excerpt: "A business may earn well, sell well, or even expand—but until its tax records are clear, the growth is always uncertain. Learn why ITR is not just a document but your financial qualification.",
      date: "2024-02-04",
      author: "CoreMentors Team",
      image: "/api/placeholder/400/250",
      readTime: "16 min read",
      tags: ["ITR Filing", "Income Tax", "Tax Compliance", "Financial Planning", "Tax Returns"],
      views: 1350,
      likes: 92,
      featured: true,
      slug: "itr-filing"
    },
    {
      id: 10,
      title: "Why Every Business Needs Proper Legal Registrations & Certifications Before Starting Operations",
      category: "Services",
      excerpt: "Legal documents are not formality—they are legal identity, compliance shield, and protection against disputes. Learn why proper legal registrations are mandatory for every business.",
      date: "2024-02-02",
      author: "CoreMentors Team",
      image: "/api/placeholder/400/250",
      readTime: "15 min read",
      tags: ["Legal Registration", "Business Licenses", "Compliance", "Legal Documentation", "Business Certifications"],
      views: 1280,
      likes: 78,
      featured: true,
      slug: "legal-registrations-certifications"
    }
  ];

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = selectedCategory === "All" 
      ? blogPosts 
      : blogPosts.filter(post => post.category === selectedCategory);

    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    switch(sortBy) {
      case "recent":
        return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "popular":
        return filtered.sort((a, b) => b.views - a.views);
      case "likes":
        return filtered.sort((a, b) => b.likes - a.likes);
      case "readTime":
        return filtered.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
      default:
        return filtered;
    }
  }, [selectedCategory, searchQuery, sortBy]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3);

  const toggleBookmark = (postId) => {
    setBookmarkedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  useEffect(() => {
    const saved = localStorage.getItem("bookmarkedPosts");
    if (saved) {
      setBookmarkedPosts(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarkedPosts", JSON.stringify(bookmarkedPosts));
  }, [bookmarkedPosts]);

  const sharePost = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href + `/${post.id}`
      });
    } else {
      navigator.clipboard.writeText(window.location.href + `/${post.id}`);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <section className="bg-gradient-to-br from-[#ec4899] via-[#B43E8F] to-[#6200B3] text-white">
        <div className="container-px mx-auto py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Knowledge Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Explore comprehensive guides, tutorials, and insights on all our services
            </p>
            
            {/* Advanced Search */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-2">
                <svg className="w-5 h-5 ml-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles, tags, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/60 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mr-2 p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-white text-[#ec4899] shadow-lg scale-105"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Controls Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-50">
        <div className="container-px mx-auto py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {filteredAndSortedPosts.length} {filteredAndSortedPosts.length === 1 ? 'article' : 'articles'}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ec4899]"
              >
                <option value="recent">Sort by: Recent</option>
                <option value="popular">Sort by: Popular</option>
                <option value="likes">Sort by: Most Liked</option>
                <option value="readTime">Sort by: Reading Time</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-[#ec4899] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-[#ec4899] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container-px mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className={`${viewMode === "grid" ? "lg:col-span-3" : "lg:col-span-3"}`}>
            {/* Featured Posts */}
            {selectedCategory === "All" && !searchQuery && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#ec4899] rounded"></span>
                  Featured Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all group"
                    >
                      <div className="aspect-video bg-gradient-to-br from-[#ec4899] to-[#6200B3] relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:scale-110 transition-transform">
                          <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 text-[#ec4899] text-xs font-bold rounded-full">
                            FEATURED
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2 py-1 bg-[#ec4899]/10 text-[#ec4899] text-xs font-medium rounded">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">{post.readTime}</span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">{post.views} views</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#ec4899] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                              <Button as="a" href={post.slug ? `/knowledge/${post.slug}` : `/knowledge/${post.id}`} variant="primary" className="text-sm">
                                Read →
                              </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#ec4899] rounded"></span>
                {searchQuery ? `Search Results for "${searchQuery}"` : selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
              </h2>
              
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAndSortedPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
                    >
                      <div className="aspect-video bg-gray-200 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <button
                          onClick={() => toggleBookmark(post.id)}
                          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
                          <svg className={`w-4 h-4 ${bookmarkedPosts.includes(post.id) ? 'fill-[#ec4899] text-[#ec4899]' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="px-2 py-1 bg-[#ec4899]/10 text-[#ec4899] text-xs font-medium rounded">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">{post.date}</span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ec4899] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>{post.author}</span>
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              {post.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                              {post.likes}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => sharePost(post)}
                            className="p-1.5 text-gray-400 hover:text-[#ec4899] transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                          </button>
                        </div>
                        <Button as="a" href={post.slug ? `/knowledge/${post.slug}` : `/knowledge/${post.id}`} variant="outline" className="w-full mt-3 text-sm">
                          Read More
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredAndSortedPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all group"
                    >
                      <div className="flex gap-6">
                        <div className="w-48 h-32 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="px-2 py-1 bg-[#ec4899]/10 text-[#ec4899] text-xs font-medium rounded">
                                {post.category}
                              </span>
                              <span className="text-xs text-gray-500">{post.date}</span>
                              <span className="text-xs text-gray-500">•</span>
                              <span className="text-xs text-gray-500">{post.readTime}</span>
                            </div>
                            <button
                              onClick={() => toggleBookmark(post.id)}
                              className="p-1.5 text-gray-400 hover:text-[#ec4899] transition-colors"
                            >
                              <svg className={`w-5 h-5 ${bookmarkedPosts.includes(post.id) ? 'fill-[#ec4899] text-[#ec4899]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                              </svg>
                            </button>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#ec4899] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>{post.author}</span>
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                {post.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                {post.likes}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex gap-1">
                                {post.tags.slice(0, 3).map((tag) => (
                                  <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              <Button as="a" href={post.slug ? `/knowledge/${post.slug}` : `/knowledge/${post.id}`} variant="primary" className="text-sm">
                                Read →
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {filteredAndSortedPosts.length === 0 && (
                <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-600 text-lg mb-2">No articles found</p>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Testimonials Section */}
            {showTestimonials && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900">Testimonials</h3>
                </div>
                <div className="space-y-4">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
                            <span className="text-xs text-gray-500">{testimonial.date}</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{testimonial.location}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{testimonial.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Posts */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Popular Posts
              </h3>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <a
                    key={post.id}
                    href={post.slug ? `/knowledge/${post.slug}` : `/knowledge/${post.id}`}
                    className="flex gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ec4899]/10 text-[#ec4899] text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#ec4899] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <span>{post.views} views</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Bookmarked Posts */}
            {bookmarkedPosts.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Saved ({bookmarkedPosts.length})
                </h3>
                <div className="space-y-3">
                  {blogPosts
                    .filter(post => bookmarkedPosts.includes(post.id))
                    .slice(0, 5)
                    .map((post) => (
                      <a
                        key={post.id}
                        href={post.slug ? `/knowledge/${post.slug}` : `/knowledge/${post.id}`}
                        className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                      >
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#ec4899] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
                      </a>
                    ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
