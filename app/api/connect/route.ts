import { NextResponse } from 'next/server';
import xrpl from "xrpl";

export async function GET() {
    try {
        const client = new xrpl.Client(process.env.XRPL_TESTNET_URL!);
        await client.connect();
        return NextResponse.json({ message: "Connected to XRPL Testnet" });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
}