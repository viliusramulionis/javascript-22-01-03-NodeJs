const Fetcher = async (url, data = {}, method = 'GET') => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(method !== 'GET') 
        options.body = JSON.stringify(data)

    const fetcher = await fetch(url, options)

    return await fetcher.json()
}

export default Fetcher