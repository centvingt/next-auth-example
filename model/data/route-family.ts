// export interface RouteFamilyFromApiProperties {
//   id: string
//   route_zone: string
// }
interface RouteFamilyProperties {
  label: string
  value: number
}

export interface RouteFamily extends RouteFamilyProperties {}
export class RouteFamily {
  constructor(params: { label: string; value: number }) {
    this.label = params.label
    this.value = params.value
  }
}
