import { NextResponse } from 'next/server'
import xrpl from "xrpl"

export async function POST() {
    try {
        const wallet = xrpl.Wallet.generate()
        return NextResponse.json({
            address: wallet.classicAddress,
            seed: wallet.seed
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}