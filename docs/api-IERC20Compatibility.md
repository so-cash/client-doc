## 📜 IERC20 Compatibility

Interface for ERC20 compatibility

This interface is used by the bank modules to provide ERC20 compatibility 

It inherits from [IERC20CompatibilityBaseInternal](./api-IERC20CompatibilityBaseInternal) and [IERC20CompatibilityMetadata](./api-IERC20CompatibilityMetadata)

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

#### ⚙️ __balanceOf__
```js
function balanceOf(address account) view returns (uint256)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | address | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 |  |


#### ⚙️ __decimals__
```js
function decimals() view returns (uint8)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint8 | uint8 |  |


#### ⚙️ __name__
Get the name of the account

```js
function name() view returns (string)
```
Get the name of the account for developers

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | The name of the account |


#### ⚙️ __symbol__
```js
function symbol() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string |  |


#### ⚙️ __totalSupply__
```js
function totalSupply() view returns (uint256)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | uint256 | uint256 |  |


