import { useEffect } from "react";

const useDebouncedSearch = (searchTerm: string, delay: number, callback: (term: string) => void) => {
    useEffect(() => {
        if (!searchTerm.trim()) return;

        const handler = setTimeout(() => {
            callback(searchTerm);
        }, delay);

        return () => clearTimeout(handler);
    }, [searchTerm, delay, callback]);
};

export default useDebouncedSearch;
