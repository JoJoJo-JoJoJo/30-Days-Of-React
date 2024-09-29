export default function NumDiv({ numStr, numInt }) {
    const liColor = (num) => {
        if (isPrime(num)) return "lightcoral"
        if (num % 2 === 0) return "lightgreen"
        return "yellow"
    }

    return (
        <li className="num-div" style={{ backgroundColor: liColor(numInt) }}>
            <p className="text">{numStr}</p>
        </li>
    )
}

function isPrime(n) {
    //* Handle the edge cases.
    if (n <= 1) return false
    if (n === 2 || n === 3) return true
    if (n % 2 === 0 || n % 3 === 0) return false
    //* Iterate up to the square root of n.
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false
    }
    //* If all guard statements are passed, it must be a prime number!
    return true
}
