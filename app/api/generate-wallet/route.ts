import { NextResponse } from 'next/server';
import xrpl from "xrpl";

export async function POST() {
    try {
        const wallet = xrpl.Wallet.generate();
        return NextResponse.json({ address: wallet.classicAddress, seed: wallet.seed });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
}