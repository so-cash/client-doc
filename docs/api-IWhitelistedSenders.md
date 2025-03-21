## 📜 IWhitelistedSenders

### Events

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
function isWhitelisted(address sender) view returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | sender | address | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __whitelist__
```js
function whitelist(address newSender)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | newSender | address | address |  |


