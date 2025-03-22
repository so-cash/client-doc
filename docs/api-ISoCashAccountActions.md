## 📜 ISoCashAccountActions interface for bank account

The bank account actions service is used to operate payment from a bank account in so|cash.

This interface is used by the account owner and the bank to manage the actions on the account.

### Methods

#### ⚙️ __balance__
Get the balance of the account.

```js
function balance() view returns (uint256)
```
The balance is the positive amount of the account. If the account is in overdraft, the balance is zero. 

 This function conserve ERC20 compatibility.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 | The balance of the account. |


#### ⚙️ __fullBalance__
Get the full balance of the account.

```js
function fullBalance() view returns (int256)
```
The full balance is the actual balance of the account including overdraft. 

 If the account is in overdraft, the full balance is negative.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | int256 | int256 | The full balance of the account. |


#### ⚙️ __lockFunds__
Locks an amount for a certain payment using a secret.

```js
function lockFunds(tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 amount, uint256 deadline, bytes32 hashlockPaid, bytes32 hashlockCancel, string opaque) returns (bytes32 key)
```
This function is used to lock an amount for a certain payment using a secret following HTLC interoperability. 

Only whitelisted senders can call this function. 

The `recipient` has the same meaning as in `transferEx()`. 

Note that because this function is a transaction, the best way to retrieve the returned id of the HTLC it via the event `HTLCPaymentCreated` defined in [IHTLCPaymentInternal](./api-IHTLCPaymentInternal). 

To do this, retrieve the transaction hash of that transaction, gets the receipt and then the logs that match the block, the target smart contract and the event signature. 

Because the `hashlockPaid` is unique and indexed in the event you can also filter new events with that hash.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | recipient | [RecipentInfo](./api-t-RecipentInfo.md) | tuple | The recipient of the funds. |
|2 | amount | uint256 | uint256 | The amount to lock. It must be available in the account. |
|3 | deadline | uint256 | uint256 | The timestamp in sec when the lock expires. |
|4 | hashlockPaid | bytes32 | bytes32 | The hash of the secret that can trigger the payment. |
|5 | hashlockCancel | bytes32 | bytes32 | The hash of the secret that can cancel the payment (deprecated). |
|6 | opaque | string | string | The optional opaque data to be interpreted by the user according to their protocol. Typically a JSON string. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | key | bytes32 | bytes32 | The unique identifier of the payment. (see note above) |


#### ⚙️ __lockedBalance__
Get the locked balance of the account.

```js
function lockedBalance() view returns (uint256)
```
The locked balance is the amount of the account balance that is locked in a payment. 

 You can have a negative `fullBalance` and a positive `lockedBalance` if the account is in overdraft.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 | The locked balance of the account. |


#### ⚙️ __transferEx__
Transfer funds to another account.

```js
function transferEx(tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 amount, string details) returns (bool)
```
This function is used to transfer funds to another account. 

Note that the [IERC20](./api-IERC20) function `transfer()` is also available and calls this function with the details "ERC20 Transfer". 

Only whitelisted senders can call this function or callers that has received an allowance. 

Allowance can be provided by a whitelisted sender using the `approve()` function of [IERC20](./api-IERC20). 

Note that the `recipient` is a structure where you provide either the smart contract address of the beneficiary account or its IBAN.  

If the beneficiary is a bank, the BIC can also be provided (deprecated)

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | recipient | [RecipentInfo](./api-t-RecipentInfo.md) | tuple | The recipient of the funds. |
|2 | amount | uint256 | uint256 | The amount to transfer. |
|3 | details | string | string | The details of the transfer. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the transfer is successful, false otherwise. |


#### ⚙️ __transferLockedFunds__
Transfer locked funds to the recipient.

```js
function transferLockedFunds(bytes32 key, tuple(address account, bytes11 bic, bytes32 iban) recipient, string secret, string details) returns (bool)
```
This function is used to transfer locked funds to the pre-set recipient. 

Anyone can call this function as long as they have the valid secret. 

The `recipient` is ignored and will be removed in a future version. 

The `secret` is the secret that can unlock the payment. 

If successful, the HTLC `state` is set to `PAID` and the event `HTLCPaymentRemoved` is emitted revealing the secret.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | key | bytes32 | bytes32 | The unique identifier of the payment. |
|2 | recipient | [RecipentInfo](./api-t-RecipentInfo.md) | tuple | The recipient of the funds. (deprecated and ignored). |
|3 | secret | string | string | The secret to unlock the payment. |
|4 | details | string | string | The details of the transfer transmitted with the payment. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the transfer is successful, false otherwise. |


#### ⚙️ __unlockFunds__
Unlock locked funds.

```js
function unlockFunds(bytes32 key, string secret) returns (bool)
```
This function is used to unlock locked funds. 

Only whitelisted sender can call this function. 

If successful, the HTLC `state` is set to `CANCELLED` and the event `HTLCPaymentRemoved` is emitted revealing the cancel secret if present. 

Note that to properly uses the cancel secret (that must be provided by the caller of the `lockFunds()` function), the `hashlockCancel`  must have been provided by the counterparty (and not the owner of the funds).  In that way, if the counterparty decide to no complete the process it can send the cancel secret to the initial holder in order to unlock the funds before the end of the deadline.  However, if the counterparty realizes that the lock does not contains its cancel hash (or a zero hash),  then it can decide not to proceed with the transaction as it can mean that the initial fund owner may have the actual secret to retrieve the funds  before the end of the deadline and the counterparty will not be able to retrieve the funds after completing its end of the bargain.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | key | bytes32 | bytes32 | The unique identifier of the payment. |
|2 | secret | string | string | The secret to unlock the payment.   |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the unlock is successful, false otherwise. |


#### ⚙️ __unlockedBalance__
Get the unlocked balance of the account.

```js
function unlockedBalance() view returns (uint256)
```
The unlocked balance is the amount of the account balance that is imediatly available for payment. 

 If the `balance` is lower than the `lockedBalance`, the `unlockedBalance` is zero, else it is the difference of the 2.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 | The unlocked balance of the account. |


