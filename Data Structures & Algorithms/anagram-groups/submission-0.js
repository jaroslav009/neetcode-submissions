class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const cache = new Map()

        for (let i = 0; i <= strs.length - 1; i++) {
            const anagram = strs[i].split("").sort().join("")
            console.log("anagram", anagram)
            if (!cache.has(anagram)) {
                cache.set(anagram, [])
            }
            cache.get(anagram).push(strs[i])
        }
        console.log("cache, ", cache.values())
        const res = []
        for (let item of cache.values()) {
            res.push(item)
        }
        console.log("res", res)
        return res

    }
}
