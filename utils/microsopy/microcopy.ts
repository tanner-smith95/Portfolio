import microcopy from "./microcopy.json"

// A function to get microcopy values by key
export function getMicroCopy(copyKey: string) {
    return (microcopy as any)?.[copyKey] || "N/A"
}