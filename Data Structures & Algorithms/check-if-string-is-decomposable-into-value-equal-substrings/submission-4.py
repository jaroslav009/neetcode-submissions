class Solution:
    def checkDecomposable(self, curr, len_substring_2):
        if len_substring_2 > 1 or curr == 1:
            return False
        return True
    def isDecomposable(self, s: str) -> bool:
        num = None
        curr = 0
        arr = []
        substring_2 = []
        substring_other = []
        for item in s:
            if item == num or num is None:
                if curr == 3:
                    arr.append(curr)
                    num = item
                    curr = 1
                    continue
                curr += 1
                num = item
            else:
                arr.append(curr)
                if curr == 2:
                    substring_2.append(curr)
                if not self.checkDecomposable(curr, len(substring_2)):
                    return False
                num = item
                curr = 1
        arr.append(curr)
        print(arr)

        if curr == 2:
            substring_2.append(curr)
        if not self.checkDecomposable(curr, len(substring_2)) or len(substring_2) == 0:
            return False

        return True
