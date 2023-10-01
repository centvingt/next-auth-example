import {
  PortRegion,
  PortRegionFromApiProperties,
  PortRegionProperties,
} from './port-region'

export interface PortFromApiProperties {
  id: string
  port: string
  load: boolean
  region_id: PortRegionFromApiProperties
}
export interface PortProperties {
  id: string
  label: string
  isLoadingPort: boolean
  region: PortRegionProperties
}

export interface Port extends PortProperties {}
export class Port {
  constructor(portFromApi: PortFromApiProperties) {
    this.id = portFromApi.id
    this.label = portFromApi.port
    this.isLoadingPort = portFromApi.load
    this.region = new PortRegion(portFromApi.region_id)
  }
}
