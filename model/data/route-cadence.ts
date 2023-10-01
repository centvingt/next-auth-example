export interface RouteCadenceFromApiProperties {
  id: string
  cadence: string
  ratio: number
}
export interface RouteCadenceProperties {
  id: string
  label: string
  ratio: number
}

export interface RouteCadence extends RouteCadenceProperties {}
export class RouteCadence {
  constructor(routeCadenceFromApi: RouteCadenceFromApiProperties) {
    this.id = routeCadenceFromApi.id
    this.label = routeCadenceFromApi.cadence
    this.ratio = routeCadenceFromApi.ratio
  }
}
