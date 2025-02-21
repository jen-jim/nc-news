export default function Error({ error }) {
    return (
        <section className="error-container">
            <h2 className="error-header">Oops! Something went wrong...</h2>
            {error ? (
                <div>
                    <h3 className="error-status">{error.status}</h3>
                    <p className="error-msg">{error.data.error}</p>
                </div>
            ) : (
                <div>
                    <h3 className="error-status">404</h3>
                    <p className="error-msg">Path not found</p>
                </div>
            )}
        </section>
    );
}
