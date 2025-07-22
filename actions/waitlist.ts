'use server'

export async function addToWaitlist(formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    const url = process.env.NODE_ENV === 'development' ? process.env.DEV_BACKEND_URL : process.env.PROD_BACKEND_URL

    const response = await fetch(`${url}/waitlist`, {
        method: 'POST',
        body: JSON.stringify({ name, email }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (!response.ok) {
        return response.json()
    }

    
    return response.json()
}