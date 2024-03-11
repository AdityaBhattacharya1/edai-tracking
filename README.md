# Installation procedure

```sh
npx hardhat node
```

copy the first private key

## setup metamask:

1. Open the MetaMask extension
2. Go to Networks
3. Add network
4. Network name = whatever name is to be given, say Localhost 8545
5. New RPC URL = http://127.0.0.1:8545
6. Chain ID = 31337
7. Currency symbol = ETH

Save the settings
add new wallet > import wallet > paste the previously copied private key

## setup frontend

! keep the backend running

compile solidity files:

```sh
npx hardhat run --network localhost scripts/deploy.js
```

copy the Tracking.json file from `./artifacts/contracts/Tracking.sol` to `./Context` and replace the `ContractAddress` in `TrackingContext.js` with the address received after compilation of the solidity files.

## run the frontend

```sh
npm run dev
```
