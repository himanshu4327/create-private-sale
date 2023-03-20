import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { CreatedPrivateSale } from "../generated/CREATEPRIVATESALE/CREATEPRIVATESALE"

export function createCreatedPrivateSaleEvent(
  owner: Address,
  privateSaleAddress: Address,
  createdTime: BigInt
): CreatedPrivateSale {
  let createdPrivateSaleEvent = changetype<CreatedPrivateSale>(newMockEvent())

  createdPrivateSaleEvent.parameters = new Array()

  createdPrivateSaleEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  createdPrivateSaleEvent.parameters.push(
    new ethereum.EventParam(
      "privateSaleAddress",
      ethereum.Value.fromAddress(privateSaleAddress)
    )
  )
  createdPrivateSaleEvent.parameters.push(
    new ethereum.EventParam(
      "createdTime",
      ethereum.Value.fromUnsignedBigInt(createdTime)
    )
  )

  return createdPrivateSaleEvent
}
