## HTLC structure

| Pos | Field | Type | Solidity | Details |
| --- | --- | --- | --- | --- |
|1 | recipient | [RecipentInfo](./api-t-RecipentInfo.md) | tuple |  |
|2 | amount | uint256 | uint256 |  |
|3 | deadline | uint256 | uint256 |  |
|4 | hashlockPaid | bytes32 | bytes32 |  |
|5 | hashlockCancel | bytes32 | bytes32 |  |
|6 | opaque | string | string |  |
|7 | state | [HTLCState](./api-t-HTLCState.md) | uint8 |  |


