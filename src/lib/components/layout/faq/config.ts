interface Element {
    question: string,
    answer: string
}

interface Section {
    title: string,
    icon: string,
    questions: Element[]
}

export const sections: Section[] = [
    {
        title: "General",
        icon: "lucide:home",
        questions: [
            {
                question: "How does the dog breed scanning process work?",
                answer: "Just snap a clear photo of your pup and upload it! Our AI will take a look and match their features to known breeds, giving you results in no time!"
            },
            {
                question: "What breeds can your scanner detect? ",
                answer: "No answer yet."
            },
            {
                question: "How accurate are the results?",
                answer: "No answer yet."
            },
            {
                question: "What if my dog’s breed result seems off?",
                answer: "No answer yet."
            }
        ]
    },
    {
        title: "Support",
        icon: "lucide:message-square",
        questions: [
            {
                question: "No question yet.",
                answer: "No answer yet."
            },
            {
                question: "No question yet.",
                answer: "No answer yet."
            },
            {
                question: "No question yet.",
                answer: "No answer yet."
            },
            {
                question: "No question yet.",
                answer: "No answer yet."
            }
        ]
    },
    {
        title: "Others",
        icon: "lucide:layout-grid",
        questions: [
            {
                question: "No question yet.",
                answer: "No answer yet."
            },
            {
                question: "No question yet.",
                answer: "No answer yet."
            },
            {
                question: "No question yet.",
                answer: "No answer yet."
            },
            {
                question: "No question yet.",
                answer: "No answer yet."
            }
        ]
    }
]