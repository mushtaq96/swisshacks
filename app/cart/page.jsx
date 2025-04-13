'use client'

import { useEffect, useState } from "react"
import EventTicket from "../components/event-ticket"

export default function Cart() {

    const state = JSON.parse(localStorage.getItem("state"))

    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const [txHash, setTxHash] = useState("")
    const [feedback, setFeedback] = useState([])
    const [msg, setMsg] = useState("")
    const [name, setName] = useState("")

    let seed = "";
    let account = {};
    let accountInfo = {};



    async function fetchData(options, endpoint, setData) {
        try {
            const response = await fetch(`http://127.0.0.1:8000${endpoint}`, options)

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error ${response.status}: ${errorText}`);
            }

            const data = await response.json()
            setData(data)
        }
        catch (error) {
            throw new Error(error)
        }
    }

    async function fetchSeed(seed) {
        const options = {
            method: "POST", headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ seed: seed })
        }

        const setAccount = (info) => {
            account = info;
        }

        await fetchData(options, "/get_account", setAccount)
    }

    async function getAccountInfo() {
        const setAccountInfo = (info) => {
            accountInfo = info;
        }
        await fetchData({ method: "GET" }, `/get_account_info/${account["accountId"]}`, setAccountInfo)
    }

    async function sendXRP(amount) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                seed: account.seed,
                amount: amount,
                destination: "rhefsePi68fFQ3sRMUU5J6LGb2tHApQhc7"
            })
        }
        await fetchData(options, `/send_xrp`, setTxHash)

    }

    async function buyNow() {
        setLoading(true)
        setSubmitted(true)
        setMsg("fetching seed...")
        try {
            await fetchSeed(seed)
        } catch (err) {
            setMsg("failed!")
            return
        }
        setMsg("Done!")

        setMsg("fetching account info...")
        try {
            await getAccountInfo()
        } catch (err) {
            setMsg("failed!")
            return
        }
        setMsg("Done!")

        setMsg("sending money: $100")
        try {
            await sendXRP(1)
        } catch (err) {
            setMsg("failed!")
            return
        }
        setMsg("Done!")

        setLoading(false)
        document.getElementById("my_modal_2").showModal()
    }

    useEffect(() => {
        setFeedback([...feedback, msg])
    }, [msg])

    return (
        <>
            <main className="flex flex-col items-center gap-8">
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Transaction Complete!</h3>
                        <p className="py-4">{name}</p>
                        <p className="py-4">Transaction Hash:</p>
                        <p className="py-4"><code>{txHash["tx_hash"]}</code></p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                <div className="navbar bg-primary text-primary-content justify-between">
                    <button className="btn btn-ghost text-xl">RIPPIKET</button>
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" /></svg>
                        Cart
                    </button>
                </div>
                <div className="flex items-center gap-20">
                    <EventTicket
                        eventName={state.name}
                        date={"11.5.2026"}
                        time={"22:00"}
                        price={100}
                        imageUrl={"/concert.jpg"}
                        location={"Zurich"}
                        key={0}
                    />
                    <div className="w-[25vw] p-4 shadow-xl">
                        {
                            submitted && (
                                <div className="mockup-code bg-secondary text-primary-content w-full">
                                    {
                                        feedback.map((item, i) => (
                                            <pre key={i} data-prefix=">" className=""><code>{item}</code></pre>
                                        ))
                                    }
                                </div>
                            )
                        }
                        <form className="flex flex-col items-start gap-4">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">What is your name?</legend>
                                <input type="text" className="input" placeholder="Type here" required onChange={(e) => setName(e.target.value)} />
                                <p className="fieldset-label">Required</p>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Wallet Seed</legend>
                                <input type="text" className="input" placeholder="Wallet Seed" required onChange={(e) => seed = (e.target.value)} />
                                <p className="fieldset-label">Optional</p>
                            </fieldset>
                            <div className="flex gap-4">
                                <button className="btn btn-primary " type="button" disabled={loading} onClick={buyNow}>Buy Now</button>
                                {loading && <span className="loading loading-spinner loading-md"></span>}
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}
