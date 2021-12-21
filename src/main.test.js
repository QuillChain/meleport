beforeAll(async function () {
  // NOTE: nearlib and nearConfig are made available by near-cli/test_environment
  const near = await nearlib.connect(nearConfig)
  window.accountId = nearConfig.contractName
  window.contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: ['nft_token'],
    changeMethods: [],
    sender: window.accountId
  })

  window.walletConnection = {
    requestSignIn() {
    },
    signOut() {
    },
    isSignedIn() {
      return true
    },
    getAccountId() {
      return window.accountId
    }
  }
})

test('nft_token', async () => {
  const message = await window.contract.nft_token({ token_id: "starsparrow.testnet" })
  console.log(message)
  expect(message).toEqual('Hello')
})
