import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {}

const FAQs = (props: Props) => {
    return (
        <>
            <div className='m-auto w-[510px] text-gray-600 mb-5'>
                <h1 className="w-[120px] m-auto text-5xl font-semibold">FAQ's</h1>
                <p className='text-xl pt-4 font-medium text-center'>Say-It-Right! frequently asked questions</p>
            </div>
            
            <Accordion type="single" collapsible className="w-1/2 m-auto">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='ml-5 text-gray-800 text-xl font-semibold'>How does the pronunciation feedback system work?
                </AccordionTrigger>
                    <AccordionContent className='ml-5 text-gray-600 text-lg font-medium'>
                    Our unique analysis system compares your spoken recordings against ideal pronunciations, providing detailed feedback and suggestions for improvement.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='ml-5 text-gray-800 text-xl font-semibold'>Can I track my progress over time?
</AccordionTrigger>
                    <AccordionContent className='ml-5 text-gray-600 text-lg font-medium'>
                    Yes, our progress tracking dashboard and reports allow you to monitor your pronunciation development and identify areas for further practice.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='ml-5 text-gray-800 text-xl font-semibold'> Is the system suitable for beginners?
</AccordionTrigger>
                    <AccordionContent className='ml-5 text-gray-600 text-lg font-medium'>
                    Absolutely! Our platform caters to learners of all levels, offering customizable learning paths and interactive exercises to support your language journey.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className='ml-5 text-gray-800 text-xl font-semibold'>Are multiple languages supported?
</AccordionTrigger>
                    <AccordionContent className='ml-5 text-gray-600 text-lg font-medium'>
                    Yes, our system supports multiple target languages, providing tailored feedback and resources to suit your language learning goals.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className='ml-5 text-gray-800 text-xl font-semibold'>How can I access the system?
</AccordionTrigger>
                    <AccordionContent className='ml-5 text-gray-600 text-lg font-medium'>
                    You can access our system by logging into our simple web interface, making it convenient for you to practice pronunciation anytime anywhere.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default FAQs;