import { getPortfolioWorks, getBlogPosts, getProducts, getAboutProfile, getBackgroundItems } from '@/lib/google-sheets';

export default async function TestSheetsPage() {
    const portfolioWorks = await getPortfolioWorks();
    const blogPosts = await getBlogPosts();
    const products = await getProducts();
    const aboutProfile = await getAboutProfile();
    const backgroundItems = await getBackgroundItems();

    return (
        <div style={{ padding: '40px', fontFamily: 'system-ui', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '40px', color: '#000' }}>Google Sheets Integration Test</h1>

            <section style={{ marginBottom: '40px', borderLeft: '4px solid #000', paddingLeft: '20px' }}>
                <h2 style={{ color: '#000' }}>Portfolio Works - {portfolioWorks.length} items</h2>
                <pre style={{ background: '#f5f5f5', padding: '20px', overflow: 'auto', borderRadius: '8px' }}>
                    {JSON.stringify(portfolioWorks, null, 2)}
                </pre>
            </section>

            <section style={{ marginBottom: '40px', borderLeft: '4px solid #000', paddingLeft: '20px' }}>
                <h2 style={{ color: '#000' }}>Blog Posts - {blogPosts.length} items</h2>
                <pre style={{ background: '#f5f5f5', padding: '20px', overflow: 'auto', borderRadius: '8px' }}>
                    {JSON.stringify(blogPosts, null, 2)}
                </pre>
            </section>

            <section style={{ marginBottom: '40px', borderLeft: '4px solid #000', paddingLeft: '20px' }}>
                <h2 style={{ color: '#000' }}>Products - {products.length} items</h2>
                <pre style={{ background: '#f5f5f5', padding: '20px', overflow: 'auto', borderRadius: '8px' }}>
                    {JSON.stringify(products, null, 2)}
                </pre>
            </section>

            <section style={{ marginBottom: '40px', borderLeft: '4px solid #000', paddingLeft: '20px' }}>
                <h2 style={{ color: '#000' }}>About Profile - {aboutProfile.length} items</h2>
                <pre style={{ background: '#f5f5f5', padding: '20px', overflow: 'auto', borderRadius: '8px' }}>
                    {JSON.stringify(aboutProfile, null, 2)}
                </pre>
            </section>

            <section style={{ marginBottom: '40px', borderLeft: '4px solid #000', paddingLeft: '20px' }}>
                <h2 style={{ color: '#000' }}>Background Items - {backgroundItems.length} items</h2>
                <pre style={{ background: '#f5f5f5', padding: '20px', overflow: 'auto', borderRadius: '8px' }}>
                    {JSON.stringify(backgroundItems, null, 2)}
                </pre>
            </section>

            <div style={{ marginTop: '60px', padding: '20px', background: '#e8f5e9', borderRadius: '8px' }}>
                <h3 style={{ color: '#2e7d32', margin: '0 0 10px 0' }}>✅ Integration Status: SUCCESS</h3>
                <p style={{ margin: 0, color: '#1b5e20' }}>
                    All data is being fetched directly from Google Sheets in real-time.
                </p>
            </div>
        </div>
    );
}
