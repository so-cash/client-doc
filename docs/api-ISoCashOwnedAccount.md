## 📜 ISoCashOwnedAccount

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
```js
function accountNumber() view returns (uint32)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | [AccountNumber](./api-t-AccountNumber.md) | uint32 |  |


#### ⚙️ __allowance__
```js
function allowance(address holder, address spender) view returns (uint256)
```
query the allowance granted from given holder to given spender
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | holder | address | address | approver of allowance |
|2 | spender | address | address | recipient of allowance |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | uint256 | uint256 |  |


#### ⚙️ __approve__
```js
function approve(address spender, uint256 amount) returns (bool)
```
grant approval to spender to spend tokens
prefer ERC20Extended functions to avoid transaction-ordering vulnerability (see https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729)
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | spender | address | address | recipient of allowance |
|2 | amount | uint256 | uint256 | quantity of tokens approved for spending |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __balance__
```js
function balance() view returns (uint256)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | uint256 | uint256 |  |


#### ⚙️ __balanceOf__
```js
function balanceOf(address account) view returns (uint256)
```
query the token balance of given account
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | address | address | address to query |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | uint256 | uint256 |  |


#### ⚙️ __bank__
```js
function bank() view returns (address)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | [ISoCashBank](./api-t-ISoCashBank.md) | address |  |


#### ⚙️ __decimals__
```js
function decimals() view returns (uint8)
```
return token decimals, generally used only for display purposes
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | uint8 | uint8 |  |


#### ⚙️ __fullBalance__
```js
function fullBalance() view returns (int256)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | int256 | int256 |  |


#### ⚙️ __getAttributeAddr__
```js
function getAttributeAddr(bytes32 name) view returns (address)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | address | address |  |


#### ⚙️ __getAttributeNum__
```js
function getAttributeNum(bytes32 name) view returns (int256)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | int256 | int256 |  |


#### ⚙️ __getAttributeStr__
```js
function getAttributeStr(bytes32 name) view returns (string)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | string | string |  |


#### ⚙️ __iban__
```js
function iban() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | string | string |  |


#### ⚙️ __lockFunds__
```js
function lockFunds(tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 amount, uint256 deadline, bytes32 hashlockPaid, bytes32 hashlockCancel, string opaque) returns (bytes32 key)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | recipient | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|2 | amount | uint256 | uint256 |  |
|3 | deadline | uint256 | uint256 |  |
|4 | hashlockPaid | bytes32 | bytes32 |  |
|5 | hashlockCancel | bytes32 | bytes32 |  |
|6 | opaque | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | key | bytes32 | bytes32 |  |


#### ⚙️ __lockedBalance__
```js
function lockedBalance() view returns (uint256)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | uint256 | uint256 |  |


#### ⚙️ __name__
```js
function name() view returns (string)
```
return token name
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | string | string |  |


#### ⚙️ __setAttributeAddr__
```js
function setAttributeAddr(bytes32 name, address value)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 |  |
|2 | value | address | address |  |


#### ⚙️ __setAttributeNum__
```js
function setAttributeNum(bytes32 name, int256 value)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 |  |
|2 | value | int256 | int256 |  |


#### ⚙️ __setAttributeStr__
```js
function setAttributeStr(bytes32 name, string value)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 |  |
|2 | value | string | string |  |


#### ⚙️ __symbol__
```js
function symbol() view returns (string)
```
return token symbol
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | string | string |  |


#### ⚙️ __totalSupply__
```js
function totalSupply() view returns (uint256)
```
query the total minted token supply
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | uint256 | uint256 |  |


#### ⚙️ __transfer__
```js
function transfer(address recipient, uint256 amount) returns (bool)
```
transfer tokens to given recipient
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | recipient | address | address | beneficiary of token transfer |
|2 | amount | uint256 | uint256 | quantity of tokens to transfer |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __transferEx__
```js
function transferEx(tuple(address account, bytes11 bic, bytes32 iban) recipient, uint256 amount, string details) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | recipient | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|2 | amount | uint256 | uint256 |  |
|3 | details | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __transferFrom__
```js
function transferFrom(address holder, address recipient, uint256 amount) returns (bool)
```
transfer tokens to given recipient on behalf of given holder
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | holder | address | address | holder of tokens prior to transfer |
|2 | recipient | address | address | beneficiary of token transfer |
|3 | amount | uint256 | uint256 | quantity of tokens to transfer |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __transferLockedFunds__
```js
function transferLockedFunds(bytes32 key, tuple(address account, bytes11 bic, bytes32 iban) recipient, string secret, string details) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | key | bytes32 | bytes32 |  |
|2 | recipient | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|3 | secret | string | string |  |
|4 | details | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __unlockFunds__
```js
function unlockFunds(bytes32 key, string secret) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | key | bytes32 | bytes32 |  |
|2 | secret | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __unlockedBalance__
```js
function unlockedBalance() view returns (uint256)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | uint256 | uint256 |  |


