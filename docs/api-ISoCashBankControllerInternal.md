## 📜 ISoCashBankControllerInternal

The interface for defining the events emitted by the BankController facet

The interface is used to define the events emitted by the [ISoCashBankController](./api-ISoCashBankController) implementation

### Events

#### 📢 __BankControllerSet__
Event emitted when a bank controller is set or removed for a bank

```js
event BankControllerSet(bytes10 indexed bankCode, address controller, bool indexed allowed)
```
The event is emitted by `setBankController` and `unsetBankController` functions

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | bankCode | [CodeType](./api-t-CodeType.md) | bytes10 | The bank code of the bank the controller wallet is given access to. |
|2 | controller | address | address | The address of the wallet that is given access to the bank. |
|3 | allowed | bool | bool | True if the controller is now allowed to access the bank, false if the controller is now disallowed to access the bank. |


