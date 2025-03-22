## 📜 ISoCashBankNostroManagementInternal interface

Interface for exposing events related to the management of nostro accounts

### Events

#### 📢 __NostroAccountRegistration__
Event emitted when a nostro account is registered or unregistered

```js
event NostroAccountRegistration(uint8 model, address indexed bank, address indexed account, bool registered)
```
This event is emitted when the back office calls the `registerNostroAccount()` or `unregisterNostroAccount()` methods

| Pos | Args | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | model | [BankModel](./api-t-BankModel.md) | uint8 | The model of the nostro account, `UNDEFINED=0`, `SO_CASH=1`, `ERC20=2` |
|2 | bank | address | address | The bank that holds the nostro account, or the address of the ERC20 token |
|3 | account | address | address | The address of the account balance (either a so|cash account or an ERC20 address that holds the balance) |
|4 | registered | bool | bool | True if the account is registered, false if it is unregistered |


