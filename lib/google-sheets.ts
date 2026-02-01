// Google Sheets Data Fetcher
// ดึงข้อมูลจาก Google Sheets โดยไม่ต้องใช้ API Key

const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID || '1R8_h1FGyIvalUj77AzBOgx-Ny4w0Xl75qHI1hidiVpE';

interface SheetData {
    [key: string]: string;
}

/**
 * ดึงข้อมูลจาก Google Sheets (Public)
 * @param sheetName ชื่อ Sheet (เช่น "Blog Posts", "Portfolio Works")
 * @returns Array ของ objects
 */
export async function fetchSheetData(sheetName: string): Promise<SheetData[]> {
    try {
        // ใช้ CSV export URL (ไม่ต้อง API Key)
        const gid = getSheetGID(sheetName);
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;

        const response = await fetch(url, {
            next: { revalidate: 60 } // Cache 60 วินาที
        });

        if (!response.ok) {
            console.error(`Failed to fetch ${sheetName}:`, response.statusText);
            return [];
        }

        const csvText = await response.text();
        return parseCSV(csvText);
    } catch (error) {
        console.error(`Error fetching ${sheetName}:`, error);
        return [];
    }
}

/**
 * แปลง CSV เป็น Array of Objects
 */
function parseCSV(csvText: string): SheetData[] {
    const lines = csvText.split('\n').filter(line => line.trim());
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    const data: SheetData[] = [];

    for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i]);
        const row: SheetData = {};

        headers.forEach((header, index) => {
            row[header] = values[index] || '';
        });

        data.push(row);
    }

    return data;
}

/**
 * Parse CSV line (รองรับ comma ใน quotes)
 */
function parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }

    result.push(current.trim());
    return result.map(v => v.replace(/^"|"$/g, ''));
}

/**
 * แปลงชื่อ Sheet เป็น GID (Sheet ID ภายใน)
 * ต้องตรวจสอบจาก URL ของแต่ละ Sheet
 */
function getSheetGID(sheetName: string): string {
    const gidMap: { [key: string]: string } = {
        'Blog Posts': '0',           // Sheet แรก (default)
        'Portfolio Works': '1',      // Sheet ที่ 2
        'Products': '2',             // Sheet ที่ 3
        'About Profile': '3',        // Sheet ที่ 4
        'Background Items': '4',     // Sheet ที่ 5
    };

    return gidMap[sheetName] || '0';
}

// Export ฟังก์ชันสำหรับแต่ละ Sheet
export async function getBlogPosts() {
    return fetchSheetData('Blog Posts');
}

export async function getPortfolioWorks() {
    return fetchSheetData('Portfolio Works');
}

export async function getProducts() {
    return fetchSheetData('Products');
}

export async function getAboutProfile() {
    return fetchSheetData('About Profile');
}

export async function getBackgroundItems() {
    return fetchSheetData('Background Items');
}
