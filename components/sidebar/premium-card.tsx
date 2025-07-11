import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Sparkles } from 'lucide-react'

const PremiumCard = () => {
    return (
        <Card className="bg-black rounded-none text-white border border-white/20 hover:border-white/40 transition-all duration-300 py-4">
            <CardHeader className='px-4'>
                <CardTitle className='flex items-center gap-2'>
                    <Sparkles className="w-4 h-4" color='white' />
                    Premium
                </CardTitle>
                <CardDescription>
                    Upgrade to the premium plan to get access to all features.
                </CardDescription>
            </CardHeader>
            <CardContent className='px-4'>
                <Button className="w-full bg-white hover:bg-white/80 text-black">
                    Upgrade
                </Button>
            </CardContent>
        </Card>
    )
}

export default PremiumCard