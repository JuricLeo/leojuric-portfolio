export default function jsonLdGenerator({ type, article, url }) {
    if (type === "article" && article) {
        const imageUrl = `https://leopold-juric.com/assets/images/blog/${article.id}/header.webp`;
        return `
            <script type="application/ld+json">
                {
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "${url}"
                    },
                    "headline": "${article.title}",
                    "description": "${article.description}",
                    "image": "${imageUrl}",
                    "author": {
                        "@type": "Person",
                        "name": "${article.author}",
                        "url": "https://leopold-juric.com"
                    },
                    "publisher": {
                        "@type": "Person",
                        "name": "Leopold Jurić",
                        "url": "https://leopold-juric.com",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://leopold-juric.com/metadata/og.png"
                        }
                    },
                    "articleSection": "${article.category || ""}",
                    "datePublished": "${article.date}"
                }
            </script>
        `;
    }
    return "";
}
