export interface FlagFromApiProperties {
  id: string
  flag: string
}
export interface FlagProperties {
  id: string
  label: string
}

export interface Flag extends FlagProperties {}
export class Flag {
  constructor(flagFromApi: FlagFromApiProperties) {
    this.id = flagFromApi.id
    this.label = flagFromApi.flag
  }

  static getGraphqlGetAllQuery() {
    return `
      query {
        flags: Vessel_Flag(limit: -1) {
          id
          flag
        }
      }
    `
  }
}
