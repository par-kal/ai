const API_KEY = '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'
const submitbutton = document.querySelector('#submit')

async function getmessage() {
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "text-davinci-002",
            messages: [{role: "user", content:"Hello!"}],
            "max_tokens": 1024,
            "temperature": random.uniform(0.5, 1)
        })
         
    }
    try {
        const response = await fetch('https://api.openai.com/v1/completions', options)
        const data = await response.json()
        console.log(data)
        
    } catch (error){
        console.error(error)
    }
}

submitbutton.addEventListener('click', getmessage)