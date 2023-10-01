export interface RouteRegionFromApiProperties {
  id: string
  route_region: string
}
export interface RouteRegionProperties {
  id: string
  label: string
}

export interface RouteRegion extends RouteRegionProperties {}
export class RouteRegion {
  constructor(routeRegionFromApi: RouteRegionFromApiProperties) {
    this.id = routeRegionFromApi.id
    this.label = routeRegionFromApi.route_region
  }
}
