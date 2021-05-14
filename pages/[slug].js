import AuthorSection from "../components/AuthorSection";
import ContentTag from "../components/ContentTag";
import PostMetadata from "../components/PostMetadata";
import { ghostAPI } from "../models/Ghost";
import styles from "../styles/pages/BlogDetailPage.module.scss";
import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/components/prism-swift";
import Head from "next/head";

export async function getStaticPaths() {
    const posts = await ghostAPI.getBlogPosts();
    const paths = posts.map((post) => {
        return {
            params: {
                slug: post.slug,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = await ghostAPI.getBlogPost(params.slug);

    return {
        props: {
            post,
        },
    };
}

export default function BlogDetailPage({ post }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className={styles.blogDetailContainer}>
            <Head>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@polcodes" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content={post.feature_image} />
                <title>{post.title}</title>
            </Head>
            <div className={styles.body}>
                <div className={styles.blogHeading}>
                    <h1>{post.title}</h1>
                    <div className={styles.tags}>
                        {post.tags.map((tag) => (
                            <ContentTag
                                title={tag.name}
                                color={tag.accent_color}
                                key={tag.name}
                            />
                        ))}
                    </div>
                    <AuthorSection author={post.primary_author} followButton />
                    <PostMetadata post={post} />
                </div>
                <div
                    className={styles.ghostContent}
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </div>
    );
}
