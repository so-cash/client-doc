## 📜 ISoCashCountryReferentialFull

### Events

#### 📢 __BankControllerSet__
```js
event BankControllerSet(bytes10 indexed bankCode, address controller, bool indexed allowed)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | controller | address | address |  |
|3 | allowed | bool | bool |  |


#### 📢 __BankModuleSet__
```js
event BankModuleSet(bytes10 indexed bankCode, bytes10[] codes, bytes3 indexed currency, address indexed bankModule)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|3 | currency | bytes3 | bytes3 |  |
|4 | bankModule | [ISoCashBankExternal](./api-t-ISoCashBankExternal.md) | address |  |


#### 📢 __CorrespondentBankChange__
```js
event CorrespondentBankChange(bytes10 indexed bankCode, bytes10[] codes, bytes3 indexed currency, tuple(bytes2 country, bytes10[] codes) correspondent, bool added)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|3 | currency | bytes3 | bytes3 |  |
|4 | correspondent | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |
|5 | added | bool | bool |  |


#### 📢 __FXProviderSet__
```js
event FXProviderSet(bytes10 indexed bankCode, address indexed fxProvider, bool indexed added)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | fxProvider | [ISoCashFXProvider](./api-t-ISoCashFXProvider.md) | address |  |
|3 | added | bool | bool |  |


#### 📢 __SSIChange__
```js
event SSIChange(bytes10 indexed bankCode, bytes10[] codes, bytes3 indexed currency, tuple(uint8 model, address bank, address account) account)
```
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|3 | currency | bytes3 | bytes3 |  |
|4 | account | [BankAccount](./api-t-BankAccount.md) | tuple |  |


### Methods

#### ⚙️ __addCorrespondent__
```js
function addCorrespondent(bytes10[] codes, bytes3 currency, tuple(bytes2 country, bytes10[] codes) correspondent)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|2 | currency | bytes3 | bytes3 |  |
|3 | correspondent | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |


#### ⚙️ __countryCode__
```js
function countryCode() view returns (bytes2)
```
| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bytes2 | bytes2 |  |


#### ⚙️ __createIBAN__
```js
function createIBAN(bytes2 country, string[] codes) view returns (string)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | country | [CountryCode](./api-t-CountryCode.md) | bytes2 |  |
|2 | codes | string[] | string[] |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | string | string |  |


#### ⚙️ __decodeIBAN__
```js
function decodeIBAN(string iban) view returns (bool valid, bytes2 country, string[] codes)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | iban | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | valid | bool | bool |  |
|2 | country | [CountryCode](./api-t-CountryCode.md) | bytes2 |  |
|3 | codes | string[] | string[] |  |


#### ⚙️ __decodeIBANToContracts__
```js
function decodeIBANToContracts(string iban) view returns (bool valid, address bank, address account)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | iban | string | string |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | valid | bool | bool |  |
|2 | bank | address | address |  |
|3 | account | address | address |  |


#### ⚙️ __delCorrespondent__
```js
function delCorrespondent(bytes10[] codes, bytes3 currency, tuple(bytes2 country, bytes10[] codes) correspondent)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|2 | currency | bytes3 | bytes3 |  |
|3 | correspondent | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |


#### ⚙️ __getBankModule__
```js
function getBankModule(bytes10[] codes, bytes3 currency) view returns (address)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|2 | currency | bytes3 | bytes3 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | [ISoCashBankExternal](./api-t-ISoCashBankExternal.md) | address |  |


#### ⚙️ __getCorrespondentBanks__
```js
function getCorrespondentBanks(bytes10[] codes, bytes3 currency) view returns (tuple(bytes2 country, bytes10[] codes)[] correspondents)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|2 | currency | bytes3 | bytes3 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | correspondents | [BankIdentifier[]](./api-t-BankIdentifier.md) | tuple[] |  |


#### ⚙️ __getSSI__
```js
function getSSI(bytes10[] codes, bytes3 currency) view returns (tuple(uint8 model, address bank, address account) account)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|2 | currency | bytes3 | bytes3 |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | account | [BankAccount](./api-t-BankAccount.md) | tuple |  |


#### ⚙️ __isBankController__
```js
function isBankController(bytes10 bankCode, address controller) view returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | controller | address | address |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __isCorrespondent__
```js
function isCorrespondent(bytes10[] codes, bytes3 currency, tuple(bytes2 country, bytes10[] codes) correspondent) view returns (bool)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|2 | currency | bytes3 | bytes3 |  |
|3 | correspondent | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | null | bool | bool |  |


#### ⚙️ __setBankController__
```js
function setBankController(bytes10 bankCode, address controller)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | controller | address | address |  |


#### ⚙️ __setBankModule__
```js
function setBankModule(bytes10[] codes, bytes3 currency, address bankModule)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|2 | currency | bytes3 | bytes3 |  |
|3 | bankModule | [ISoCashBankExternal](./api-t-ISoCashBankExternal.md) | address |  |


#### ⚙️ __setFXProvider__
```js
function setFXProvider(bytes10 bankCode, address fxProvider)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | fxProvider | [ISoCashFXProvider](./api-t-ISoCashFXProvider.md) | address |  |


#### ⚙️ __setSSI__
```js
function setSSI(bytes10[] codes, bytes3 currency, tuple(uint8 model, address bank, address account) account)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | codes | [CodeType[]](./api-t-CodeType.md) | bytes10[] |  |
|2 | currency | bytes3 | bytes3 |  |
|3 | account | [BankAccount](./api-t-BankAccount.md) | tuple |  |


#### ⚙️ __unsetBankController__
```js
function unsetBankController(bytes10 bankCode, address controller)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | controller | address | address |  |


#### ⚙️ __unsetFXProvider__
```js
function unsetFXProvider(bytes10 bankCode, address fxProvider)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 |  |
|2 | fxProvider | [ISoCashFXProvider](./api-t-ISoCashFXProvider.md) | address |  |


