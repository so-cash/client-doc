## 📜 IOwnable

Interface of the openzeppelin ownership management service.

This interface is used by several smart contracts that need a owner to control the contract.

### Events

#### 📢 __OwnershipTransferred__
Emitted when ownership is transferred.

```js
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | previousOwner | address | address | The address of the previous owner. |
|2 | newOwner | address | address | The address of the new owner. |


### Methods

#### ⚙️ __owner__
Get the owner of the contract.

```js
function owner() view returns (address)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | address | address | The address of the owner. |


#### ⚙️ __renounceOwnership__
Renounce ownership.

```js
function renounceOwnership()
```
Only the owner can renounce ownership. 

It will set the owner to the zero address. 

Equivalent to `transferOwnership(address(0))`.

#### ⚙️ __transferOwnership__
Transfer ownership to a new account.

```js
function transferOwnership(address account)
```
Only the owner can transfer ownership.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | address | address | The address of the new owner. |


