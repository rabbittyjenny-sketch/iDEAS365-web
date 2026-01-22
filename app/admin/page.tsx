export default function AdminDashboard() {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <h1>Smart Lazy Admin Dashboard</h1>
            <p>Manage your content from one place. (Database Connection Required)</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
                {/* Blog Manager Card */}
                <div style={{ padding: '32px', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
                    <h2>📝 Blog Posts</h2>
                    <p>Write and publish new articles.</p>
                    <button className="btn btn-outline" style={{ marginTop: '16px' }}>Manage Posts</button>
                </div>

                {/* Work Manager Card */}
                <div style={{ padding: '32px', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
                    <h2>💼 Portfolio Work</h2>
                    <p>Add new case studies and projects.</p>
                    <button className="btn btn-outline" style={{ marginTop: '16px' }}>Manage Work</button>
                </div>

                {/* Shop Manager Card */}
                <div style={{ padding: '32px', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
                    <h2>🛍️ Resources / Shop</h2>
                    <p>Update products and downloads.</p>
                    <button className="btn btn-outline" style={{ marginTop: '16px' }}>Manage Products</button>
                </div>
            </div>
        </div>
    );
}
