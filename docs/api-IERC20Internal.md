## 📜 ERC20 internal interface

see https://eips.ethereum.org/EIPS/eip-20

### Events

#### 📢 __Approval__
```js
event Approval(address indexed owner, address indexed spender, uint256 value)
```
Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | owner | address | address |  |
|2 | spender | address | address |  |
|3 | value | uint256 | uint256 |  |


#### 📢 __Transfer__
```js
event Transfer(address indexed from, address indexed to, uint256 value)
```
Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | address | address |  |
|2 | to | address | address |  |
|3 | value | uint256 | uint256 |  |


