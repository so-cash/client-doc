## 📜 ISoCashOwnedAccount

Exposes the functions and events for basic interactions with a bank account in so|cash.

This interface inherits from [ISoCashAccountActions](./api-ISoCashAccountActions) and [ISoCashAccountData](./api-ISoCashAccountData) to provide the basic functions. 

It also inherits from [IERC20](./api-IERC20) and [IERC20Metadata](./api-IERC20Metadata) to provide the ERC20 compatibility. 

It also inherits from [ISoCashAccount](./api-ISoCashAccount) but this does not add any new function. 

It is used by the [ISoCashAccountFull](./api-ISoCashAccountFull) to provide the full set of functions.

### Events

#### 📢 __Approval__
```js
event Approval(address indexed owner, address indexed spender, uint256 value)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | owner | address | address |  |
|2 | spender | address | address |  |
|3 | value | uint256 | uint256 |  |


#### 📢 __Transfer__
```js
event Transfer(address indexed from, address indexed to, uint256 value)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | address | address |  |
|2 | to | address | address |  |
|3 | value | uint256 | uint256 |  |


### Methods

#### ⚙️ __accountNumber__
Get the account number of the account.

```js
function accountNumber() view returns (uint32)
```
The account number is a sequential number of the accounts created in the bank but this is not an obligation. 

Implementations are free to use any kind of account number as long as it respects the IBAN standard.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [AccountNumber](./api-t-AccountNumber.md) | uint32 | The account number of the account. |


#### ⚙️ __allowance__
query the allowance granted from given holder to given spender

```js
function allowance(address holder, address spender) view returns (uint256)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | holder | address | address | approver of allowance |
|2 | spender | address | address | recipient of allowance |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 | token allowance |


#### ⚙️ __approve__
grant approval to spender to spend tokens

```js
function approve(address spender, uint256 amount) returns (bool)
```
prefer ERC20Extended functions to avoid transaction-ordering vulnerability (see https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729)

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | spender | address | address | recipient of allowance |
|2 | amount | uint256 | uint256 | quantity of tokens approved for spending |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | success status (always true; otherwise function should revert) |


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


#### ⚙️ __balanceOf__
query the token balance of given account

```js
function balanceOf(address account) view returns (uint256)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | address | address | address to query |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 | token balance |


#### ⚙️ __bank__
Get the bank module of the account.

```js
function bank() view returns (address)
```
The bank is the contract that manages the account. It is also the `owner` in the [IOwnable](./api-IOwnable) sense.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [ISoCashBank](./api-t-ISoCashBank.md) | address | The bank of the account. |


#### ⚙️ __decimals__
return token decimals, generally used only for display purposes

```js
function decimals() view returns (uint8)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint8 | uint8 | token decimals |


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


#### ⚙️ __getAttributeAddr__
Get attribute as address

```js
function getAttributeAddr(bytes32 name) view returns (address)
```
The attributes are used to store additional info on the account. 

Note that the `name`is unique for the account but can be duplicated by type of attribute.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 | The name of the attribute. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | address | address | The value of the attribute as an address. |


#### ⚙️ __getAttributeNum__
Get attribute as number

```js
function getAttributeNum(bytes32 name) view returns (int256)
```
The attributes are used to store additional info on the account. 

Note that the `name`is unique for the account but can be duplicated by type of attribute.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 | The name of the attribute. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | int256 | int256 | The value of the attribute as a number. |


#### ⚙️ __getAttributeStr__
Get attribute as string

```js
function getAttributeStr(bytes32 name) view returns (string)
```
The attributes are used to store additional info on the account. 

Note that the `name`is unique for the account but can be duplicated by type of attribute.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 | The name of the attribute. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | The value of the attribute as a string. |


#### ⚙️ __iban__
Get the iban of the account.

```js
function iban() view returns (string)
```
The IBAN is the international bank account number of the account and contains the country of the bank, the bank codes and the account number.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | The IBAN of the account. |


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


#### ⚙️ __name__
return token name

```js
function name() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | token name |


#### ⚙️ __setAttributeAddr__
Set attribute as address

```js
function setAttributeAddr(bytes32 name, address value)
```
The attributes are used to store additional info on the account. 

Note that the `name`is unique for the account but can be duplicated by type of attribute.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 | The name of the attribute. |
|2 | value | address | address | The value of the attribute as an address. |


#### ⚙️ __setAttributeNum__
Set attribute as number

```js
function setAttributeNum(bytes32 name, int256 value)
```
The attributes are used to store additional info on the account. 

Note that the `name`is unique for the account but can be duplicated by type of attribute.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 | The name of the attribute. |
|2 | value | int256 | int256 | The value of the attribute as a number. |


#### ⚙️ __setAttributeStr__
Set attribute as string

```js
function setAttributeStr(bytes32 name, string value)
```
The attributes are used to store additional info on the account. 

Note that the `name`is unique for the account but can be duplicated by type of attribute.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 | The name of the attribute. |
|2 | value | string | string | The value of the attribute as a string. |


#### ⚙️ __symbol__
return token symbol

```js
function symbol() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | token symbol |


#### ⚙️ __totalSupply__
query the total minted token supply

```js
function totalSupply() view returns (uint256)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 | token supply |


#### ⚙️ __transfer__
transfer tokens to given recipient

```js
function transfer(address recipient, uint256 amount) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | recipient | address | address | beneficiary of token transfer |
|2 | amount | uint256 | uint256 | quantity of tokens to transfer |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | success status (always true; otherwise function should revert) |


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


#### ⚙️ __transferFrom__
transfer tokens to given recipient on behalf of given holder

```js
function transferFrom(address holder, address recipient, uint256 amount) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | holder | address | address | holder of tokens prior to transfer |
|2 | recipient | address | address | beneficiary of token transfer |
|3 | amount | uint256 | uint256 | quantity of tokens to transfer |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | success status (always true; otherwise function should revert) |


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


