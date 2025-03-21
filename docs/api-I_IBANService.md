## 📜 I_IBANService

### Methods

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


