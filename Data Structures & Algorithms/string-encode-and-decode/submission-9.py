class Solution:
    lenList = 0
    def encode(self, strs: List[str]) -> str:
        boofer = "@^&".join(strs) 
        self.lenList = len(strs)
        return boofer
    def decode(self, s: str) -> List[str]:
        if self.lenList == 0:
            return []
        return s.split("@^&")
