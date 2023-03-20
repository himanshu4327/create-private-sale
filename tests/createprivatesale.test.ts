import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CreatedPrivateSale } from "../generated/schema"
import { CreatedPrivateSale as CreatedPrivateSaleEvent } from "../generated/CREATEPRIVATESALE/CREATEPRIVATESALE"
import { handleCreatedPrivateSale } from "../src/createprivatesale"
import { createCreatedPrivateSaleEvent } from "./createprivatesale-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let privateSaleAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let createdTime = BigInt.fromI32(234)
    let newCreatedPrivateSaleEvent = createCreatedPrivateSaleEvent(
      owner,
      privateSaleAddress,
      createdTime
    )
    handleCreatedPrivateSale(newCreatedPrivateSaleEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CreatedPrivateSale created and stored", () => {
    assert.entityCount("CreatedPrivateSale", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CreatedPrivateSale",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CreatedPrivateSale",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "privateSaleAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CreatedPrivateSale",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "createdTime",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
