class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = '';

        for (let word of strs) {
            str += word.length;
            str += '#';
            str += word;
        }

        return str

    }

    decode(str) {
        let result = []
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] != '#') {
                j++
            }

            let length = str.slice(i, j)
            let lengthNum = Number(length)
            i = j + 1
            let word = str.slice(i, i + lengthNum)
            result.push(word)
            i += lengthNum
            j = i
        }

        
        return result
    }
}
