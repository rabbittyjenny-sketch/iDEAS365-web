import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxe72M0uK62wYSEKp7L3mw7agrFJuTKZDncUrzBJsgRb4SpjR-n1Gt-X9i2e6lbzvK8/exec';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userName, businessType, email, id, name, category, url } = body;

        // Validate required fields
        if (!userName || !businessType || !email || !id || !name || !category || !url) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Send to Google Apps Script
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName, businessType, email, id, name, category, url }),
        });

        if (!response.ok) {
            throw new Error('Failed to save subscription to Google Sheets');
        }

        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error saving subscription:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to save subscription' },
            { status: 500 }
        );
    }
}
