export interface RouteZoneFromApiProperties {
  id: string
  route_zone: string
}
export interface RouteZoneProperties {
  id: string
  label: string
}

export interface RouteZone extends RouteZoneProperties {}
export class RouteZone {
  constructor(routeZoneFromApi: RouteZoneFromApiProperties) {
    this.id = routeZoneFromApi.id
    this.label = routeZoneFromApi.route_zone
  }
}
