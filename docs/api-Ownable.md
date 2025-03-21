## 📜 Ownable

Contract module which provides a basic access control mechanism, where there is an account (an owner) that can be granted exclusive access to specific functions. By default, the owner account will be the one that deploys the contract. This can later be changed with {transferOwnership}. This module is used through inheritance. It will make available the modifier `onlyOwner`, which can be applied to your functions to restrict their use to the owner.

### Events

#### 📢 __OwnershipTransferred__
```js
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | previousOwner | address | address |  |
|2 | newOwner | address | address |  |


### Methods

#### ⚙️ __owner__
```js
function owner() view returns (address)
```
Returns the address of the current owner.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | address | address |  |


#### ⚙️ __renounceOwnership__
```js
function renounceOwnership()
```
Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.

#### ⚙️ __transferOwnership__
```js
function transferOwnership(address newOwner)
```
Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | newOwner | address | address |  |


