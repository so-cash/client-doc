## 📜 ISoCashFXProviderFull

### Events

#### 📢 __CurrencyAccountSet__
```js
event CurrencyAccountSet(bytes3 indexed ccy, address account)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ccy | [CCY](./api-t-CCY.md) | bytes3 |  |
|2 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


#### 📢 __FXSettlement__
```js
event FXSettlement(address indexed from, address indexed to, uint256 amount, uint256 rate)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|2 | to | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |
|3 | amount | uint256 | uint256 |  |
|4 | rate | uint256 | uint256 |  |


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

#### ⚙️ __bankIdentifier__
```js
function bankIdentifier() view returns (tuple(bytes2 country, bytes10[] codes) id)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | id | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |


#### ⚙️ __bic__
```js
function bic() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string |  |


#### ⚙️ __blacklist__
Remove sender from the whitelist.

```js
function blacklist(address oldSender)
```
Only an other whitelisted sender (or the owner, or the targetted sender) can blacklist a sender.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | oldSender | address | address | The address of the sender to remove. |


#### ⚙️ __codes__
```js
function codes() view returns (bytes10 bankCode, bytes10 branchCode)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | branchCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |


#### ⚙️ __getFXRateSource__
```js
function getFXRateSource(bytes3 base, bytes3 quote) view returns (string)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | base | [CCY](./api-t-CCY.md) | bytes3 |  |
|2 | quote | [CCY](./api-t-CCY.md) | bytes3 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string |  |


#### ⚙️ __getRateSigner__
```js
function getRateSigner() view returns (address)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | address | address |  |


#### ⚙️ __hashOfFXRate__
```js
function hashOfFXRate(tuple(uint256 rate, uint256 rateTime, uint256 expiryTime, bytes3 base, bytes3 quote) rate) view returns (bytes32)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | rate | [FXRate](./api-t-FXRate.md) | tuple |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bytes32 | bytes32 |  |


#### ⚙️ __isWhitelisted__
Check if a sender is whitelisted.

```js
function isWhitelisted(address sender) view returns (bool)
```
No control of caller is done in this function.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | sender | address | address | The address of the sender. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool | true if the sender is whitelisted or the owner, false otherwise. |


#### ⚙️ __setCurrencyAccount__
```js
function setCurrencyAccount(bytes3 ccy, address account)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ccy | [CCY](./api-t-CCY.md) | bytes3 |  |
|2 | account | [ISoCashAccount](./api-t-ISoCashAccount.md) | address |  |


#### ⚙️ __setFXRateSource__
```js
function setFXRateSource(bytes3 base, bytes3 quote, string source)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | base | [CCY](./api-t-CCY.md) | bytes3 |  |
|2 | quote | [CCY](./api-t-CCY.md) | bytes3 |  |
|3 | source | string | string |  |


#### ⚙️ __setRateSigner__
```js
function setRateSigner(address signer)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | signer | address | address |  |


#### ⚙️ __settlement__
```js
function settlement(tuple(address account, bytes11 bic, bytes32 iban) from, tuple(address account, bytes11 bic, bytes32 iban) to, uint256 amount, tuple(uint256 rate, uint256 rateTime, uint256 expiryTime, bytes3 base, bytes3 quote) rate, bytes signature, string details) returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | from | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|2 | to | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|3 | amount | uint256 | uint256 |  |
|4 | rate | [FXRate](./api-t-FXRate.md) | tuple |  |
|5 | signature | bytes | bytes |  |
|6 | details | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


#### ⚙️ __verifyFXRate__
```js
function verifyFXRate(tuple(uint256 rate, uint256 rateTime, uint256 expiryTime, bytes3 base, bytes3 quote) rate, bytes signature) view returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | rate | [FXRate](./api-t-FXRate.md) | tuple |  |
|2 | signature | bytes | bytes |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | bool | bool |  |


#### ⚙️ __version__
```js
function version() view returns (string)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string |  |


#### ⚙️ __whitelist__
Whitelist a sender.

```js
function whitelist(address newSender)
```
Only an other whitelisted sender (or the owner) can whitelist a new sender.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | newSender | address | address | The address of the sender. |


