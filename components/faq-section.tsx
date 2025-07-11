"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
    {
        question: "How secure is reposcale?",
        answer:
        "reposcale uses enterprise-grade security with token-based authentication, encrypted connections, and secure access controls. We never store your repository data - we only provide secure access links.",
    },
    {
        question: "Do I need to add people as GitHub collaborators?",
        answer:
        "No! That's the beauty of reposcale. You can share repository access without adding users as collaborators, maintaining full control over your repository permissions.",
    },
    {
        question: "What happens after the one-time purchase?",
        answer:
        "After your one-time purchase, you get lifetime access to all features in your plan. No recurring fees, no subscription renewals - just unlimited secure sharing.",
    },
    {
        question: "Can I revoke access to shared repositories?",
        answer:
        "You can instantly revoke access to any shared repository link from your dashboard. You can also set automatic expiration dates when creating shares.",
    },
    {
        question: "What analytics do you provide?",
        answer:
        "Our analytics dashboard shows you who accessed your repositories, when they accessed them, which files were viewed, and how much time was spent. Perfect for tracking engagement and usage.",
    },
    {
        question: "Do you support other Git providers besides GitHub?",
        answer:
        "Currently we support GitHub, but we're actively working on GitLab and Bitbucket integration. Existing customers will get access to new providers at no additional cost.",
    },
]

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

  return (
        <section id="faq" className="py-32 flex flex-col items-center justify-center">
            <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center justify-center">
                <div className="max-w-3xl mb-20 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Frequently asked questions</h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                    Everything you need to know about reposcale. Can't find what you're looking for?
                </p>
                </div>

                <Accordion type="single" collapsible defaultValue="item-0" className="max-w-3xl w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium text-lg">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
