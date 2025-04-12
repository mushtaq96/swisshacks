'use client'

import Link from 'next/link'

import EventTicket from "./components/event-ticket"

export default function Home() {

    function events() {
        let eventsList = []
        for (let i = 0; i < 10; i++) {
            eventsList.push(i)
        }
        return eventsList
    }

    return (
        <>
            <main className="flex flex-col items-center gap-8">
                <div className="navbar bg-primary text-primary-content justify-between">
                    <button className="btn btn-ghost text-xl">Hacklab Marketplace</button>
                    <Link className="btn" href="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" /></svg>
                        Cart
                    </Link>
                </div>
                <label className="input m-4">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                    <input type="search" required placeholder="Search" />
                </label>
                <div className="grid grid-cols-3 gap-4">
                    {
                        events().map(i => (
                            <EventTicket
                                eventName={"name"}
                                date={"date"}
                                time={"time"}
                                price={100}
                                imageUrl={"/concert.jpg"}
                                location={"location"}
                                key={i}
                            />
                        ))
                    }
                </div>
            </main>
        </>
    )
}
