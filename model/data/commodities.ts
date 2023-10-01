export interface CommoditiesFromApiProperties {
  id: string
  commodities: string
}
export interface CommoditiesProperties {
  id: string
  label: string
}

export interface Commodities extends CommoditiesProperties {}
export class Commodities {
  constructor(commoditiesFromApi: CommoditiesFromApiProperties) {
    this.id = commoditiesFromApi.id
    this.label = commoditiesFromApi.commodities
  }
}
