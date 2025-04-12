import { Wallet, classicAddressToXAddress } from 'xrpl'

export default async function getWalletDetails(client) {
  const wallet = Wallet.fromSeed(process.env.SEED)

  const accountInfo = await client.request({
    command: 'account_info',
    account: wallet.address,
    ledger_index: 'validated',
  })

  const serverInfo = await client.request({
    command: 'server_info'
  })

  const reserveBase = serverInfo.result.info.validated_ledger.reserve_base_xrp
  const reserveInc = serverInfo.result.info.validated_ledger.reserve_inc_xrp
  const ownerCount = accountInfo.result.account_data.OwnerCount || 0

  return {
    account_data: accountInfo.result.account_data,
    accountReserve: ownerCount * reserveInc + reserveBase,
    xAddress: classicAddressToXAddress(wallet.address, false, false),
    address: wallet.address
  }
}