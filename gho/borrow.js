import { Pool, InterestRate } from "@aave/contract-helpers";

const pool = new Pool(provider, {
  POOL: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60",
  WETH_GATEWAY: "0x9c402E3b0D123323F0FCed781b8184Ec7E02Dd31", 
});

/*
- @param `user` The ethereum address that will receive the borrowed amount 
- @param `reserve` The ethereum address of the reserve asset 
- @param `amount` The amount to be borrowed, in human readable units (e.g. 2.5 ETH)
- @param `interestRateMode`//Whether the borrow will incur a stable (InterestRate.Stable) or variable (InterestRate.Variable) interest rate
- @param @optional `debtTokenAddress` The ethereum address of the debt token of the asset you want to borrow. Only needed if the reserve is ETH mock address 
- @param @optional `onBehalfOf` The ethereum address for which user is borrowing. It will default to the user address 
*/
const txs: EthereumTransactionTypeExtended[] = await pool.borrow({
  user,
  reserve: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60", 
  amount,
  interestRateMode,
  //debtTokenAddress: "0x80aa933EfF12213022Fd3d17c2c59C066cBb91c7", // Goerli GHO market
  onBehalfOf,
  referralCode,
});
