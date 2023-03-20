import { CreatedPrivateSale as CreatedPrivateSaleEvent } from "../generated/CREATEPRIVATESALE/CREATEPRIVATESALE"
import { CreatedPrivateSale } from "../generated/schema"

export function handleCreatedPrivateSale(event: CreatedPrivateSaleEvent): void {
  let entity = new CreatedPrivateSale(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.privateSaleAddress = event.params.privateSaleAddress
  entity.createdTime = event.params.createdTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
