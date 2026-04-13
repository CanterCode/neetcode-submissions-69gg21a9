class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";

        for (let s of strs) {
            str+=(s.length);
            str+=("#");
            str+=(s);
        }

        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            
            while (str[j] !== "#") {
                j++
            }

            let lengthString = str.substring(i,j);

            let lengthStringNum = Number(lengthString)

            let start = j + 1
            let end = start + lengthStringNum

            let word = str.substring(start, end)

            result.push(word)

            i = end
        }

        return result
    }
}
