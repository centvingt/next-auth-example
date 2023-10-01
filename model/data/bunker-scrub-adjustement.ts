export interface BunkerScrubAdjustmentFromApiProperties {
  id: string
  scrub_name: string
  scrub_value: number
}
export interface BunkerScrubAdjustmentProperties {
  id: string
  label: string
  value: number
}

export interface BunkerScrubAdjustment
  extends BunkerScrubAdjustmentProperties {}
export class BunkerScrubAdjustment {
  constructor(
    bunkerScrubAdjustmentFromApi: BunkerScrubAdjustmentFromApiProperties,
  ) {
    this.id = bunkerScrubAdjustmentFromApi.id
    this.label = bunkerScrubAdjustmentFromApi.scrub_name
    this.value = bunkerScrubAdjustmentFromApi.scrub_value
  }
}
