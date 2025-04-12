import { NextResponse } from 'next/server'
import xrpl from "xrpl"

export async function GET() {
    try {
        const client = new xrpl.Client(process.env.NEXT_PUBLIC_CLIENT)
        await client.connect()
        return NextResponse.json({ message: "Connected to XRPL Testnet" })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}