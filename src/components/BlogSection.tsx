import { blogPosts, promoSections } from "@/data/blog-data";
import { PromoSection } from "@/components/PromoSection";
import { BlogPostCard } from "@/components/BlogPostCard";


export function BlogSection() {
  return (
    <section className="py-12 px-4">
      <div className="container space-y-12">
        <div className="grid md:grid-cols-2 gap-6">
          {promoSections.map((promo, index) => (
            <PromoSection
              key={index}
              title={promo.title}
              subtitle={promo.subtitle}
              buttonText={promo.buttonText}
            />
          ))}
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Our Blog Posts</h2>
          <p className="text-muted-foreground">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              title={post.title}
              description={post.description}
              date={post.date}
              readTime={post.readTime}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
