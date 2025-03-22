## 📜 ISoCashAccountData interface for bank account

The bank account data service is used to manage the attributes and info of a bank account in so|cash.

This interface is used by the account owner and the bank to get and manage the attributes of the account.

### Methods

#### ⚙️ __accountNumber__
Get the account number of the account.

```js
function accountNumber() view returns (uint32)
```
The account number is a sequential number of the accounts created in the bank but this is not an obligation. 

Implementations are free to use any kind of account number as long as it respects the IBAN standard.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [AccountNumber](./api-t-AccountNumber.md) | uint32 | The account number of the account. |


#### ⚙️ __bank__
Get the bank module of the account.

```js
function bank() view returns (address)
```
The bank is the contract that manages the account. It is also the `owner` in the [IOwnable](./api-IOwnable) sense.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | [ISoCashBank](./api-t-ISoCashBank.md) | address | The bank of the account. |


#### ⚙️ __getAttributeAddr__
Get attribute as address

```js
function getAttributeAddr(bytes32 name) view returns (address)
```
The attributes are used to store additional info on the account. 

Note that the `name`is unique for the account but can be duplicated by type of attribute.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 | The name of the attribute. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | address | address | The value of the attribute as an address. |


#### ⚙️ __getAttributeNum__
Get attribute as number

```js
function getAttributeNum(bytes32 name) view returns (int256)
```
The attributes are used to store additional info on the account. 

Note that the `name`is unique for the account but can be duplicated by type of attribute.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 | The name of the attribute. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | int256 | int256 | The value of the attribute as a number. |


#### ⚙️ __getAttributeStr__
Get attribute as string

```js
function getAttributeStr(bytes32 name) view returns (string)
```
The attributes are used to store additional info on the account. 

Note that the `name`is unique for the account but can be duplicated by type of attribute.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 | The name of the attribute. |


| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | The value of the attribute as a string. |


#### ⚙️ __iban__
Get the iban of the account.

```js
function iban() view returns (string)
```
The IBAN is the international bank account number of the account and contains the country of the bank, the bank codes and the account number.

| Pos | Return | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | ⌀ | string | string | The IBAN of the account. |


#### ⚙️ __setAttributeAddr__
Set attribute as address

```js
function setAttributeAddr(bytes32 name, address value)
```
The attributes are used to store additional info on the account. 

Note that the `name`is unique for the account but can be duplicated by type of attribute.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 | The name of the attribute. |
|2 | value | address | address | The value of the attribute as an address. |


#### ⚙️ __setAttributeNum__
Set attribute as number

```js
function setAttributeNum(bytes32 name, int256 value)
```
The attributes are used to store additional info on the account. 

Note that the `name`is unique for the account but can be duplicated by type of attribute.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 | The name of the attribute. |
|2 | value | int256 | int256 | The value of the attribute as a number. |


#### ⚙️ __setAttributeStr__
Set attribute as string

```js
function setAttributeStr(bytes32 name, string value)
```
The attributes are used to store additional info on the account. 

Note that the `name`is unique for the account but can be duplicated by type of attribute.

| Pos | Parameter | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | name | bytes32 | bytes32 | The name of the attribute. |
|2 | value | string | string | The value of the attribute as a string. |


