import {
  BunkerScrubAdjustment,
  BunkerScrubAdjustmentFromApiProperties,
} from './bunker-scrub-adjustement'

export interface BunkerFromApiProperties {
  id: string
  bunker_name: string
  fo: number
  do: number
  scrub_adj_id: BunkerScrubAdjustmentFromApiProperties
}
export interface BunkerProperties {
  id: string
  label: string
  fo: number
  do: number
  scrubAdjustment: BunkerScrubAdjustment // label modifié
}

export interface Bunker extends BunkerProperties {}
export class Bunker {
  constructor(bunkerFromApi: BunkerFromApiProperties) {
    this.id = bunkerFromApi.id
    this.label = bunkerFromApi.bunker_name
    this.fo = bunkerFromApi.fo
    this.do = bunkerFromApi.do

    this.scrubAdjustment = new BunkerScrubAdjustment(bunkerFromApi.scrub_adj_id)
  }
}
