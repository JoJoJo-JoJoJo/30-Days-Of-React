export default function useSortCountries(iterArr, prop) {
    const tempArr = [];
    // iterArr is the countries filtered for by the current search query.

    iterArr.map(item => {
        let langObj;
        const arr = Object.values(item[prop]);

        arr.forEach(lang => {
            langObj = tempArr.find(obj => obj.name === lang);

            if (langObj == null) {
                tempArr.push({
                    name: lang,
                    lang: 1
                })
            } else {
                langObj.lang++
            }
        });

        // Now sort in descending order (of num).
        tempArr.sort((a, b) => b.lang - a.lang);
    })

    return tempArr
}

/*
e.g.

tempArr = [
    {
        name: "English",
        lang: {
            num: 72,
            percent: this.num / 100
        }
    },
    {
        name: "French",
        lang: {
            num: 45,
            percent: this.num / 100
        }
    }
]
*/
