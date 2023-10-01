export interface PortRegionFromApiProperties {
  id: string
  port_region: string
}
export interface PortRegionProperties {
  id: string
  label: string
}

export interface PortRegion extends PortRegionProperties {}
export class PortRegion {
  constructor(portRegionFromApi: PortRegionFromApiProperties) {
    this.id = portRegionFromApi.id
    this.label = portRegionFromApi.port_region
  }
}
