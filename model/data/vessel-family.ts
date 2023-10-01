export interface VesselFamilyFromApiProperties {
  id: string
  family: string
}
export interface VesselFamilyProperties {
  id: string
  label: string
}

export interface VesselFamily extends VesselFamilyProperties {}
export class VesselFamily {
  constructor(vesselFamilyFromApi: VesselFamilyFromApiProperties) {
    this.id = vesselFamilyFromApi.id
    this.label = vesselFamilyFromApi.family
  }
  static getGraphqlGetAllQuery() {
    return `
      query {
        families: Vessel_Family(limit: -1) {
          id
          family
        }
      }
    `
  }
}
