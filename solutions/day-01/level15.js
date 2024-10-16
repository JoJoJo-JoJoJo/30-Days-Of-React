class Statistics {
    #numArr
    #arrSum
    #min
    #max
    #freq

    constructor(numArr) {
        this.#numArr = numArr;
        this.#arrSum = this.#numArr.reduce((a, b) => a + b, 0);
        this.#min = Math.min.apply(null, this.#numArr);
        this.#max = Math.max.apply(null, this.#numArr);
        this.#freq = {};
        for (i of this.#numArr) {
            this.#freq[i] ? this.#freq[i]++ : this.#freq[i] = 1
        }
    }

    count() {
        return this.#numArr.length
    }

    sum() {
        return this.#arrSum
    }

    min() {
        return this.#min
    }

    max() {
        return this.#max
    }

    range() {
        return this.#max - this.#min
    }

    mean() {
        return this.#arrSum / this.#numArr.length
    }

    median() {
        return this.#numArr.length % 2 === 0 ?
            (this.#numArr[this.#numArr.length / 2] +
                this.#numArr[(this.#numArr.length / 2) + 1]) / 2 :
            this.#numArr[this.#numArr.length / 2]
    }

    mode() {
        let compare = 0;
        let mode;

        for (i in this.#freq) {
            if (this.#freq[i] > compare) {
                compare = this.#freq[i];
                mode = i;
            }
        }

        return parseInt(mode)
    }

    variance() {
        return this.#numArr.reduce(
            (prev, curr) => prev + (curr - this.mean()) ^ 2, 0
        ) / this.#numArr.length
    }

    std() {
        return Math.sqrt(this.variance())
    }

    freqDist() {
        return "Idk my brain tired now."
    }
}


ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages);

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ', statistics.var()) // 17.5
console.log('Frequency Distribution: ', statistics.freqDist())
// [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31),
// (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
