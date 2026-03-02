import microcopy from "./microcopy.json"

// A function to get microcopy values by key
export function getMicroCopy(copyKey: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (microcopy as any)?.[copyKey] || "N/A"
}