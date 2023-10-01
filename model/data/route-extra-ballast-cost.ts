export interface RouteExtraBallastCostFromApiProperties {
  id: string
  extra_ballast_cost: string
}
export interface RouteExtraBallastCostProperties {
  id: string
  label: string
}

export interface RouteExtraBallastCost
  extends RouteExtraBallastCostProperties {}
export class RouteExtraBallastCost {
  constructor(
    routeExtraBallastCostFromApi: RouteExtraBallastCostFromApiProperties,
  ) {
    this.id = routeExtraBallastCostFromApi.id
    this.label = routeExtraBallastCostFromApi.extra_ballast_cost
  }
}
