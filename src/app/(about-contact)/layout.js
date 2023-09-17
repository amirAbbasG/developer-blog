import {InsightRoll} from "@/components/layout";


const insights = [
    "big Projects Completed",
    "1+ Years of Freelancing",
    "99% Client Satisfaction",
    "hard worker",
    "creative and up to date",
];


export default function AboutLayout({children}) {
    return (
        <main className="w-full flex flex-col items-center justify-between">
            <InsightRoll insights={insights}/>
            {children}
        </main>
    )
}
