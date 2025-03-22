## 📜 ISoCashBackOfficePayments interface

Interface for the back office to manage payments

This interface exposes methods to manage payments with a wallet that is whitelisted as a back office

### Methods

#### ⚙️ __decidePendingTransfer__
Instruct the bank module to proceed with a pending transfer or to cancel it

```js
function decidePendingTransfer(uint256 id, uint8 status, string reason) returns (bool)
```
This method requires that the caller is whitelisted

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [TransferId](./api-t-TransferId.md) | uint256 | The unique identifier of the transfer |
|2 | status | [TransferStatus](./api-t-TransferStatus.md) | uint8 | The status of the transfer, `CANCELLED=3`, `PROCESSED=4` |
|3 | reason | string | string | The reason of the status of the transfer when put in pending, cancelled or processed |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the decision is successful, false or fail otherwise |


#### ⚙️ __requestNetting__
request another bank that holds a nostro account to operate a netting

```js
function requestNetting(address correspondent, address loro, uint256 amount) returns (bool)
```
This method requires that the caller is whitelisted

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | correspondent | [ISoCashBank](./api-t-ISoCashBank.md) | address | The bank module that holds the nostro account |
|2 | loro | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account of the correspondent with the caller bank where the netting should be operated |
|3 | amount | uint256 | uint256 | The amount of the netting expressed in the smallest unit of the currency |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the netting is successful, false or fail otherwise |


#### ⚙️ __synchroNostro__
Forces the update of the copy of a nostro balance in the bank module

```js
function synchroNostro(address bank, address account) returns (bool)
```
This method requires that the caller is whitelisted 

The nostro account can be a so|cash account or an ERC20 token account

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bank | address | address | The bank that holds the nostro account or the address of the ERC20 token |
|2 | account | address | address | The address of the account balance |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the update is successful, false or fail otherwise |


#### ⚙️ __transferFrom__
Initiate a transfer from the back office side on behalf of a client

```js
function transferFrom(address from, tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount, string details) returns (bool)
```
This method requires that the caller is whitelisted

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | [ISoCashAccount](./api-t-ISoCashAccount.md) | address | The account to transfer the funds from |
|2 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple | The recipient account to transfer the funds to |
|3 | amount | uint256 | uint256 | The amount of the transfer expressed in the smallest unit of the currency |
|4 | details | string | string | The details of the transfer |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the transfer is successful, false or fail otherwise |


