export interface RouteLadenCanalDiscountFromApiProperties {
  id: string
  laden_canal_discount: string
  cost: string
  days_lost: number
}
export interface RouteLadenCanalDiscountProperties {
  id: string
  label: string
  cost: number
  daysLost: number
}

export interface RouteLadenCanalDiscount
  extends RouteLadenCanalDiscountProperties {}
export class RouteLadenCanalDiscount {
  constructor(
    routeLadenCanalDiscountFromApi: RouteLadenCanalDiscountFromApiProperties,
  ) {
    this.id = routeLadenCanalDiscountFromApi.id
    this.label = routeLadenCanalDiscountFromApi.laden_canal_discount
    this.cost = Number(routeLadenCanalDiscountFromApi.cost)
    this.daysLost = routeLadenCanalDiscountFromApi.days_lost
  }
}
