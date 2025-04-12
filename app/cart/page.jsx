'use client'

export default function Cart() {

    return (
        <>
            <main className="flex flex-col items-center gap-8">
                <div className="navbar bg-primary text-primary-content justify-between">
                    <button className="btn btn-ghost text-xl">Hacklab Marketplace</button>
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" /></svg>
                        Cart
                    </button>
                </div>
                <form className="flex flex-col items-start gap-4">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Wallet Seed</legend>
                        <input type="text" className="input" placeholder="Wallet Seed" required />
                        <p className="fieldset-label">Required</p>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Issuer Address</legend>
                        <input type="text" className="input" placeholder="Issuer Address" required />
                        <p className="fieldset-label">Required</p>
                    </fieldset>
                    <button className="btn btn-primary btn-sm">Buy Now</button>
                </form>
            </main>
        </>
    )
}
