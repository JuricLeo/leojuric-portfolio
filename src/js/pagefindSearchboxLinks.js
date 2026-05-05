const normalizeUrl = (url) => {
    if (!url) return url;

    try {
        const parsed = new URL(url, window.location.origin);

        if (parsed.origin !== window.location.origin) {
            return url;
        }

        const path = parsed.pathname.length > 1 && parsed.pathname.endsWith("/") ? parsed.pathname.slice(0, -1) : parsed.pathname;

        return `${path}${parsed.search}${parsed.hash}`;
    } catch {
        return url;
    }
};

let searchboxObserver = null;
let activeSearchbox = null;

const normalizeSearchboxLinks = () => {
    document.querySelectorAll("pagefind-searchbox a[href]").forEach((link) => {
        const href = link.getAttribute("href");
        const normalizedHref = normalizeUrl(href);

        if (href !== normalizedHref) {
            link.setAttribute("href", normalizedHref);
        }
    });
};

const connectSearchboxLinkNormalizer = () => {
    searchboxObserver?.disconnect();

    const searchbox = document.querySelector("pagefind-searchbox");

    if (!searchbox) return;

    normalizeSearchboxLinks();

    searchboxObserver = new MutationObserver(normalizeSearchboxLinks);
    searchboxObserver.observe(searchbox, { childList: true, subtree: true, attributes: true, attributeFilter: ["href"] });

    if (activeSearchbox !== searchbox) {
        activeSearchbox = searchbox;
        searchbox.addEventListener("click", normalizeSearchboxLinks, { capture: true });
        searchbox.addEventListener(
            "keydown",
            (event) => {
                if (event.key === "Enter") {
                    normalizeSearchboxLinks();
                }
            },
            { capture: true }
        );
    }
};

export const initPagefindSearchboxLinkNormalizer = () => {
    document.addEventListener("astro:page-load", connectSearchboxLinkNormalizer);

    if (document.readyState !== "loading") {
        connectSearchboxLinkNormalizer();
    }

    document.addEventListener("astro:before-swap", () => {
        searchboxObserver?.disconnect();
        searchboxObserver = null;
        activeSearchbox = null;
    });
};
