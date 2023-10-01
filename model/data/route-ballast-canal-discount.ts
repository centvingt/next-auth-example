export interface RouteBallastCanalDiscountFromApiProperties {
  id: string
  label: string
  value: string
  daysLost: number
}
export interface RouteBallastCanalDiscountProperties {
  id: string
  label: string
  value: number
  daysLost: number
}

export interface RouteBallastCanalDiscount
  extends RouteBallastCanalDiscountProperties {}
export class RouteBallastCanalDiscount {
  constructor(
    routeBallastCanalDiscountFromApi: RouteBallastCanalDiscountFromApiProperties,
  ) {
    this.id = routeBallastCanalDiscountFromApi.id
    this.label = routeBallastCanalDiscountFromApi.label
    this.value = Number(routeBallastCanalDiscountFromApi.value)
    this.daysLost = routeBallastCanalDiscountFromApi.daysLost
  }

  static gqlQueryFields = `
    id
    label: ballast_canal_discount
    value: cost
    daysLost: days_lost
  `
}
