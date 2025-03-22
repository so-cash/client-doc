## 📜 ISoCashBankExternalTransfer interface 

Interface for transfer request by account smart contracts

This interface exposes a method to transfer funds from a caller account to a recipient account

### Methods

#### ⚙️ __transfer__
Transfer funds from the caller account to a recipient account

```js
function transfer(tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount, string details) returns (bool)
```
This method can only be called by a smart contract that is registered as an account in the bank module 

Events Transfer and TransferEx are emitted

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple | The recipient account to transfer the funds to |
|2 | amount | uint256 | uint256 | The amount of the transfer expressed in the smallest unit of the currency |
|3 | details | string | string | The details of the transfer |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the transfer is successful, false otherwise |


