import items from "../components/Items"

const MyPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items)
        }, 2000)
    })
}

export default MyPromise;