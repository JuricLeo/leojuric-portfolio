// @ts-check

import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://leopold-juric.com",
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        sitemap({
            changefreq: "monthly",
            priority: 0.7,
            lastmod: new Date(),
        }),
        mdx(),
    ],
    trailingSlash: "never",
    build: { format: "file" },
    fonts: [
        {
            provider: fontProviders.local(),
            name: "Geist Mono",
            cssVariable: "--font-geist-mono",
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/GeistMono-VariableFont_wght.woff2"],
                        weight: "100 900",
                        style: "normal",
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: "Geist Pixel Square",
            cssVariable: "--font-geist-pixel-square",
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/GeistPixel-Square.woff2"],
                        weight: "100 900",
                        style: "normal",
                    },
                ],
            },
        },
    ],
});
