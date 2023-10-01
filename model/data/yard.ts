export interface YardFromApiProperties {
  id: string
  yard: string
}
export interface YardProperties {
  id: string
  label: string
}

export interface Yard extends YardProperties {}
export class Yard {
  constructor(yardFromApi: YardFromApiProperties) {
    this.id = yardFromApi.id
    this.label = yardFromApi.yard
  }

  static getGraphqlGetAllQuery() {
    return `
      query {
        yards: Vessel_Yard(limit: -1) {
          id
          yard
        }
      }
    `
  }
}
