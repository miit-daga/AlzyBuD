// app/page.jsx
'use client';
import React from 'react';
import { useParams } from 'next/navigation';



export default function MainPage() {
    const { 'patient_id': patientId } = useParams()
    return (
        <>
        <div className="flex justify-center text-center mx-10 flex-col items-center min-h-[calc(100vh-64px)]">
        <TaskHeading heading="Orientation" />
        <SubHeading subhead="Instruction"/>
        <Paragraph para="We will ask you a few questions about general information, such as the day, date, and place. Please answer each question to the best of your ability"/>    
        <Link href={`/${patientId}/word-recall-test`}>
            <Btn name="Start the test"/>
        </Link>
        </div>
        </>
    );
}