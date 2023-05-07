import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollto = (id) => {
    const container = document.getElementById(id);
    if (container) {
        window.scroll(0, container.offsetTop - 40);
    }
}
export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            if (hash !== '') {
                scrollto(hash.slice(1, hash.length));
            } else {
                window.scrollTo(0, 0);
            }
        }, 200)
    }, [pathname, hash])

    return null
}