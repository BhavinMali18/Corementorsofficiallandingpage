"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import { CoreMentorsLogo } from "../../components/CoreMentorsLogo";

export default function StartProjectPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    requirements: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    // Simulate API call (replace with actual API)
    setTimeout(() => {
      // In production, send data to your backend API
      console.log("Project Inquiry:", formData);
      
      // Store in localStorage for demo (in production, send to server)
      const inquiries = JSON.parse(localStorage.getItem("projectInquiries") || "[]");
      inquiries.push({
        ...formData,
        id: Date.now(),
        date: new Date().toISOString(),
        status: "pending"
      });
      localStorage.setItem("projectInquiries", JSON.stringify(inquiries));

      setSuccess(true);
      setIsLoading(false);
      
      // Reset form after 3 seconds and redirect
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for your interest. Our team will review your project inquiry and get back to you within 24-48 hours.
            </p>
            <p className="text-sm text-gray-500">
              Redirecting to homepage...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CoreMentorsLogo 
              width={60} 
              height={60} 
              strokeWidth={1.5}
              color="#B43E8F"
              duration={2}
              animated={true}
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Start Your Project</h1>
          <p className="text-lg text-gray-600">
            Tell us about your project and we'll get back to you with a customized solution
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-6">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B43E8F] focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B43E8F] focus:border-transparent"
                placeholder="john@company.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B43E8F] focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B43E8F] focus:border-transparent"
                placeholder="Your Company"
              />
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B43E8F] focus:border-transparent"
              >
                <option value="">Select project type</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="cloud-devops">Cloud & DevOps</option>
                <option value="ai-ml">AI & Machine Learning</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="digital-strategy">Digital Strategy</option>
                <option value="branding">Branding & Identity</option>
                <option value="managed-services">Managed Services</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B43E8F] focus:border-transparent"
              >
                <option value="">Select budget range</option>
                <option value="under-10k">Under $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="over-250k">Over $250,000</option>
                <option value="discuss">Prefer to discuss</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                Expected Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B43E8F] focus:border-transparent"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP / Urgent</option>
                <option value="1-3months">1-3 months</option>
                <option value="3-6months">3-6 months</option>
                <option value="6-12months">6-12 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B43E8F] focus:border-transparent"
              placeholder="Tell us about your project goals, objectives, and what you're looking to achieve..."
            />
          </div>

          {/* Requirements */}
          <div className="mb-6">
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
              Specific Requirements or Features
            </label>
            <textarea
              id="requirements"
              name="requirements"
              rows={3}
              value={formData.requirements}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B43E8F] focus:border-transparent"
              placeholder="List any specific features, technologies, or requirements you have in mind..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <span className="text-red-500">*</span> Required fields
            </p>
            <Button
              type="submit"
              variant="primary"
              className="px-8 py-3"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Project Inquiry"}
            </Button>
          </div>
        </form>

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">1.</span>
              <div>
                <p className="font-medium mb-1">Review</p>
                <p>Our team reviews your inquiry within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">2.</span>
              <div>
                <p className="font-medium mb-1">Connect</p>
                <p>We'll reach out to discuss your project in detail</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">3.</span>
              <div>
                <p className="font-medium mb-1">Proposal</p>
                <p>Receive a customized proposal and timeline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



