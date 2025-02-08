import { useState, useEffect } from "react";


export const useSticky = () => {
    const [sticky, setSticky] = useState<boolean>(false)

    function getStickyHeader() {
        if(window.scrollY > 80) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', getStickyHeader);
        return () => window.removeEventListener('scroll', getStickyHeader)
    }, [])

    return {
        sticky
    }
}


