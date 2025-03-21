## 📜 IERC20

see https://eips.ethereum.org/EIPS/eip-20
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


