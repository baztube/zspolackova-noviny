function levenshtein(s, t) {
    if (s === t) {
        return 0;
    }
    var n = s.length, m = t.length;
    if (n === 0 || m === 0) {
        return n + m;
    }
    var x = 0, y, a, b, c, d, g, h;
    var p = new Uint16Array(n);
    var u = new Uint32Array(n);
    for (y = 0; y < n;) {
        u[y] = s.charCodeAt(y);
        p[y] = ++y;
    }

    for (; (x + 3) < m; x += 4) {
        var e1 = t.charCodeAt(x);
        var e2 = t.charCodeAt(x + 1);
        var e3 = t.charCodeAt(x + 2);
        var e4 = t.charCodeAt(x + 3);
        c = x;
        b = x + 1;
        d = x + 2;
        g = x + 3;
        h = x + 4;
        for (y = 0; y < n; y++) {
            a = p[y];
            if (a < c || b < c) {
                c = (a > b ? b + 1 : a + 1);
            }
            else {
                if (e1 !== u[y]) {
                    c++;
                }
            }

            if (c < b || d < b) {
                b = (c > d ? d + 1 : c + 1);
            }
            else {
                if (e2 !== u[y]) {
                    b++;
                }
            }

            if (b < d || g < d) {
                d = (b > g ? g + 1 : b + 1);
            }
            else {
                if (e3 !== u[y]) {
                    d++;
                }
            }

            if (d < g || h < g) {
                g = (d > h ? h + 1 : d + 1);
            }
            else {
                if (e4 !== u[y]) {
                    g++;
                }
            }
            p[y] = h = g;
            g = d;
            d = b;
            b = c;
            c = a;
        }
    }

    for (; x < m;) {
        var e = t.charCodeAt(x);
        c = x;
        d = ++x;
        for (y = 0; y < n; y++) {
            a = p[y];
            if (a < c || d < c) {
                d = (a > d ? d + 1 : a + 1);
            }
            else {
                if (e !== u[y]) {
                    d = c + 1;
                }
                else {
                    d = c;
                }
            }
            p[y] = d;
            c = a;
        }
        h = d;
    }

    return h;
}

function setPTo(text){
    document.getElementById("return").innerHTML = text
}
const data = [
    {
        "name": "Chartativní sbírka",
        "super": "cool"
    },
    {
        "name": "Fotbalové utkáni"
    },
    {
        "name": "Zájezd do Anglie"
    },
    {
        "name": "Zájezd do Německa"
    },
]

function splitInput(sentence) {
    return sentence.split(" ");
}

function extractNames(data) {
    var names = [];
    for (var i = 0; i < data.length; i++) {
        names.push(data[i].name);
    }
    return names;
}

function searchData(searchTerm, searchData){
    console.log(searchData);
    const arrayData = extractNames(searchData);
    console.log(arrayData);
    let ranked = []
    let dataRanked = []
    for (var i = 0; i < arrayData.length; i++) {
        const splitData = splitInput(arrayData[i]);
        let average = 0
        for (var d = 0; d < splitData.length; d++) {
            average = levenshtein(splitData[d], searchTerm) + average / 2;
        }
        ranked.push(average);
    }
    console.log(ranked)
    for (var i = 0; i < arrayData.length; i++) {
        const smallest = Math.min(...ranked);
        const position = ranked.indexOf(smallest);
        dataRanked.push(data[position]);
        ranked[position] = 999;
    }
    return(dataRanked)
}

function getSearchTerm(){
        const hash = window.location.hash;
        if (hash.length > 1) {
            const encodedString = hash.substring(1);
            const decodedString = decodeURIComponent(encodedString);
            
            return decodedString;
        } else {
            return null;
        }
}

function removeFromArray(array, keyToRemove) {
        if (!Array.isArray(array)) {
        console.error("Input is not an array.");
        return array;
    }
    return array.map(obj => {
        const newObj = { ...obj };
        delete newObj[keyToRemove];
        return newObj;
    });
}

async function fetchGitHubRawContent(username, repository, path) {
    try {
        const url = `https://raw.githubusercontent.com/${username}/${repository}/master/${path}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch raw content');
        }
        const rawContent = await response.text();
        return rawContent;
    } catch (error) {
        console.error('Error fetching raw content:', error);
        return null;
    }
}

    fetchGitHubRawContent("baztube", "zspolackova-noviny", "clanky.json")
    .then(rawContent => {
        console.log('Raw content:', rawContent);
        const searchContent = removeFromArray(rawContent, "html")
        const searchTerm = getSearchTerm();
        console.log(extractNames(searchContent))
        searchData(searchTerm, searchContent);
    })
    .catch(error => {
        console.error('Error:', error);
    });