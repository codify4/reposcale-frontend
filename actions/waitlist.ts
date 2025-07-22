'use server'

export async function addToWaitlist(formData: FormData) {
    const email = formData.get('email') as string

    const url = process.env.NODE_ENV === 'development' ? process.env.DEV_BACKEND_URL : process.env.PROD_BACKEND_URL

    const response = await fetch(`${url}/waitlist`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (!response.ok) {
        return response.json()
    }

    
    return response.json()
}

export async function getWaitlistSize() {
    const url = process.env.NODE_ENV === 'development' ? process.env.DEV_BACKEND_URL : process.env.PROD_BACKEND_URL

    const response = await fetch(`${url}/waitlist`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (!response.ok) {
        return 0
    }

    return response.json()
}