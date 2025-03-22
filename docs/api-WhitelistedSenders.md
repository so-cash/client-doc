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
Emitted when a sender is whitelisted or blacklisted.

```js
event Whitelisted(address indexed account, bool status)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | address | address |  |
|2 | status | bool | bool |  |


### Methods

#### ⚙️ __blacklist__
Remove sender from the whitelist.

```js
function blacklist(address oldSender)
```
Only an other whitelisted sender (or the owner, or the targetted sender) can blacklist a sender.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | oldSender | address | address | The address of the sender to remove. |


#### ⚙️ __isWhitelisted__
```js
function isWhitelisted(address a) view returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | a | address | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


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


#### ⚙️ __whitelist__
Whitelist a sender.

```js
function whitelist(address newSender)
```
Only an other whitelisted sender (or the owner) can whitelist a new sender.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | newSender | address | address | The address of the sender. |


