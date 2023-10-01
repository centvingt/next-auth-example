export interface UnitFromApiProperties {
  id: string
  unit: string
}
export interface UnitProperties {
  id: string
  label: string
}

export interface Unit extends UnitProperties {}
export class Unit {
  constructor(unitFromApi: UnitFromApiProperties) {
    this.id = unitFromApi.id
    this.label = unitFromApi.unit
  }
}
