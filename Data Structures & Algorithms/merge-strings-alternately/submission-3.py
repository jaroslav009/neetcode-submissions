class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        res = ""
        idx = 0
        for char1 in word1:
            print(idx + 1, len(word2))
            if idx + 1 <= len(word2):
                res += char1 + word2[idx]
            else:
                res += char1
            idx += 1
        if len(word2) >= idx + 1:
            res += word2[idx:]
        return res

