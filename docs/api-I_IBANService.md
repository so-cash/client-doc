## 📜 I_IBANService

Create and decode IBANs that are managed within the so|cash scope.

This interface is used to create and decode IBANs. It is implemented by any service capable of creating or decoding IBANs, even on a partial scope. 



Consult the documentation of the provider for more information.  



Typical implementation are done by the so|cash referential, global and by country. 



The general structure for coding and decoding IBANs is a country code (ISO-3166 2 letters codes) and a set of codes that are specific to the country. 



For example, the IBAN for a French bank account is FR1420041010050500013M02606. 



It is composed of FR (country code), 20041 (bank code), 01005 (branch code), 0500013M026 (account number), the last 3 are the codes.

### Methods

#### ⚙️ __createIBAN__
Create an IBAN from a country code and a set of codes.

```js
function createIBAN(bytes2 country, string[] codes) view returns (string)
```
The function should return a valid IBAN if the country code and the codes are valid else it can fail.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | country | [CountryCode](./api-t-CountryCode.md) | bytes2 | The country code of the IBAN to create. It must be 2 letters long. |
|2 | codes | string[] | string[] | Array of codes of the IBAN to create accouding to the country standard. They must be valid for the country. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | The IBAN created from the country code and the codes. |


#### ⚙️ __decodeIBAN__
Decode an IBAN to a country code and a set of codes.

```js
function decodeIBAN(string iban) view returns (bool valid, bytes2 country, string[] codes)
```
The function should return the country code and the codes if the IBAN is valid. The function should never fail. 



If the country code or the bank code cannot be resolved then the valid flag should be false.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | iban | string | string | The IBAN to decode. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | valid | bool | bool | True if the IBAN is valid, false otherwise. |
|2 | country | [CountryCode](./api-t-CountryCode.md) | bytes2 | The country code of the IBAN. |
|3 | codes | string[] | string[] | Array of codes of the IBAN according to the country standard. |


#### ⚙️ __decodeIBANToContracts__
Decode an IBAN to a bank module and an account smart contract address.

```js
function decodeIBANToContracts(string iban) view returns (bool valid, address bank, address account)
```
The function should return the bank module and the account if the IBAN is valid. The function should never fail. 



If the bank or the account cannot be resolved then the valid flag should be false and the addresses are zeroed.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | iban | string | string | The IBAN to decode. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | valid | bool | bool | True if the IBAN is valid, false otherwise. |
|2 | bank | address | address | The bank address of the IBAN. Typically a [ISoCashBank](./api-ISoCashBank) contract or zero if the bank cannot be resolved. |
|3 | account | address | address | The account address of the IBAN. Typically a [ISoCashAccount](./api-ISoCashAccount) contract or zero if the account cannot be resolved. |


