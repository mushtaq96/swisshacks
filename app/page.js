'use client'

import Link from 'next/link'

import EventTicket from "./components/event-ticket"

const events = [
    {
        id: "event1",
        name: "Zurich Street Parade",
        total_tickets: 5000,
        price_rlusd: 30,
        tickets_sold: 5,
        organizer_wallet: "rOrganizer1",
        location: "Zurich, Switzerland"
    },
    {
        id: "event2",
        name: "Berlin Techno Festival",
        total_tickets: 3000,
        price_rlusd: 45,
        tickets_sold: 0,
        organizer_wallet: "rOrganizer2",
        location: "Berlin, Germany"
    },
    {
        id: "event3",
        name: "Paris Jazz Festival",
        total_tickets: 2000,
        price_rlusd: 60,
        tickets_sold: 0,
        organizer_wallet: "rOrganizer3",
        location: "Paris, France"
    },
    {
        id: "event4",
        name: "Tomorrowland Winter",
        total_tickets: 10000,
        price_rlusd: 250,
        tickets_sold: 0,
        organizer_wallet: "rOrganizer4",
        location: "Alpe d'Huez, France"
    },
    {
        id: "event5",
        name: "Vienna Opera Ball",
        total_tickets: 1500,
        price_rlusd: 120,
        tickets_sold: 0,
        organizer_wallet: "rOrganizer5",
        location: "Vienna, Austria"
    },
    {
        id: "event6",
        name: "Amsterdam Dance Event",
        total_tickets: 8000,
        price_rlusd: 55,
        tickets_sold: 0,
        organizer_wallet: "rOrganizer6",
        location: "Amsterdam, Netherlands"
    },
    {
        id: "event7",
        name: "Oktoberfest",
        total_tickets: 12000,
        price_rlusd: 15,
        tickets_sold: 0,
        organizer_wallet: "rOrganizer7",
        location: "Munich, Germany"
    },
    {
        id: "event8",
        name: "Ibiza Closing Parties",
        total_tickets: 4000,
        price_rlusd: 75,
        tickets_sold: 0,
        organizer_wallet: "rOrganizer8",
        location: "Ibiza, Spain"
    },
    {
        id: "event9",
        name: "Sziget Festival",
        total_tickets: 9000,
        price_rlusd: 90,
        tickets_sold: 0,
        organizer_wallet: "rOrganizer9",
        location: "Budapest, Hungary"
    },
    {
        id: "event10",
        name: "Edinburgh Fringe",
        total_tickets: 7000,
        price_rlusd: 25,
        tickets_sold: 0,
        organizer_wallet: "rOrganizer10",
        location: "Edinburgh, UK"
    },
    {
        id: "d3fc7f70-3e29-45d8-b9b5-8d85c7790517",
        name: "string",
        total_tickets: 0,
        price_rlusd: 0.0,
        organizer_wallet: "string",
        tickets_sold: 0
    },
    {
        id: "c3937995-9bfc-4424-a160-600a96f986fc",
        name: "string",
        total_tickets: 0,
        price_rlusd: 0.0,
        organizer_wallet: "string",
        tickets_sold: 0
    },
    {
        id: "5f8ba58c-c63c-4864-acb1-3d5db03ed776",
        name: "string",
        total_tickets: 0,
        price_rlusd: 0.0,
        organizer_wallet: "string",
        tickets_sold: 0
    },
    {
        id: "673167c7-2580-40b2-85a3-dcc65cba6b32",
        name: "Concert",
        total_tickets: 100,
        price_rlusd: 50.0,
        organizer_wallet: "rOrg...",
        tickets_sold: 1
    }
];

export default function Home() {

    return (
        <>
            <main className="flex flex-col items-center gap-8">
                <div className="navbar bg-primary text-primary-content justify-between">
                    <button className="btn btn-ghost text-xl">RIPPIKET</button>
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
                        events.map(i => (
                            <EventTicket
                                ticket={i}
                                eventName={i.name}
                                date={"date"}
                                time={"time"}
                                price={100}
                                imageUrl={"/concert.jpg"}
                                location={"location"}
                                key={i.id}
                            />
                        ))
                    }
                </div>
            </main>
        </>
    )
}
