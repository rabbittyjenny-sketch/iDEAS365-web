import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwbvCK3k7DEJI29u6HSZxRK7vwjFVDvxF8wtKWjGaJJ6XYNpg0blLTRf9YGZZ5ZB03g/exec';

export async function GET() {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch resources from Google Sheets');
        }

        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching resources:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch resources' },
            { status: 500 }
        );
    }
}
