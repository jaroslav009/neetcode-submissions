class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        arr = s.split(" ")
        if len(arr) > 0:
            for item in list(reversed(arr)):
                if item != "":
                    return len(item)