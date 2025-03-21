## 📜 ISoCashGlobalReferentialFull

### Events

#### 📢 __CountrySet__
```js
event CountrySet(bytes2 indexed country, address indexed countryContract)
```
Event emitted when a country is set in the referential
| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | country | bytes2 | bytes2 |  |
|2 | countryContract | [ISoCashCountryReferential](./api-t-ISoCashCountryReferential.md) | address |  |


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


#### ⚙️ __getCountry__
```js
function getCountry(bytes2 country) view returns (address contractAddress)
```
Get the country contract for the given country code
The function is expected to return the ZeroAddress if the country is not in the referential
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | country | bytes2 | bytes2 | The country code as a Ascii encoded bytes2 |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | contractAddress | [ISoCashCountryReferential](./api-t-ISoCashCountryReferential.md) | address | The country contract for the given country code or ZeroAddress if the country is not in the referential |


#### ⚙️ __resolveRoute__
```js
function resolveRoute(bytes3 currency, tuple(bytes2 country, bytes10[] codes) from, tuple(bytes2 country, bytes10[] codes) target) view returns (bool resolved, tuple(bytes2 country, bytes10[] codes)[] route)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | currency | bytes3 | bytes3 |  |
|2 | from | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |
|3 | target | [BankIdentifier](./api-t-BankIdentifier.md) | tuple |  |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | resolved | bool | bool |  |
|2 | route | [BankIdentifier[]](./api-t-BankIdentifier.md) | tuple[] |  |


#### ⚙️ __setCountry__
```js
function setCountry(address countryContract)
```
| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | countryContract | [ISoCashCountryReferential](./api-t-ISoCashCountryReferential.md) | address |  |


