import { NextResponse } from "next/server";
import xrpl from "xrpl";
import { NFTokenMint } from "xrpl";

export async function POST(request: Request) {
    const { seed, uri } = await request.json();

    if (!seed || !uri) {
        return NextResponse.json({ error: "Missing seed or URI" }, { status: 400 });
    }

    try {
        const client = new xrpl.Client(process.env.XRPL_TESTNET_URL!);
        await client.connect();

        const wallet = xrpl.Wallet.fromSeed(seed);

        const tx: NFTokenMint = {
            TransactionType: "NFTokenMint" as const,
            Account: wallet.classicAddress,
            URI: xrpl.convertStringToHex(uri),
            Flags: 8,
            NFTokenTaxon: 0,
        };

        const response = await client.submitAndWait(tx, { wallet });
        await client.disconnect();
        return NextResponse.json(response.result);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
}