import { NextResponse } from "next/server"
import xrpl from "xrpl"

export async function POST(request) {
    const { seed, uri } = await request.json()

    if (!seed || !uri) {
        return NextResponse.json({ error: "Missing seed or URI" }, { status: 400 })
    }

    try {
        const client = new xrpl.Client(process.env.NEXT_PUBLIC_CLIENT)
        await client.connect()

        const wallet = xrpl.Wallet.fromSeed(seed)

        const tx = {
            TransactionType: "NFTokenMint",
            Account: wallet.classicAddress,
            URI: xrpl.convertStringToHex(uri),
            Flags: 8,
            NFTokenTaxon: 0,
        }

        const response = await client.submitAndWait(tx, { wallet })
        await client.disconnect()
        return NextResponse.json(response.result)
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}