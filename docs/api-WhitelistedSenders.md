## 📜 WhitelistedSenders

### Events

#### 📢 __OwnershipTransferred__
```js
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | previousOwner | address | address |  |
|2 | newOwner | address | address |  |


#### 📢 __Whitelisted__
```js
event Whitelisted(address indexed account, bool status)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | address | address |  |
|2 | status | bool | bool |  |


### Methods

#### ⚙️ __blacklist__
```js
function blacklist(address oldSender)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | oldSender | address | address |  |


#### ⚙️ __isWhitelisted__
```js
function isWhitelisted(address a) view returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | a | address | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __owner__
```js
function owner() view returns (address)
```
Returns the address of the current owner.
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | address | address |  |


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


#### ⚙️ __whitelist__
```js
function whitelist(address newSender)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | newSender | address | address |  |


