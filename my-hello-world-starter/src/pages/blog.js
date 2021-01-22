import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogPageContent from "../components/BlogPageContent"

const BlogPage = () => (
    <HeaderFooterLayout activeTab="BLOG">
    <BlogPageContent />
    </HeaderFooterLayout>
)

export default BlogPage