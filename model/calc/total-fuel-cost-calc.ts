interface TotalFuelCost {
  speed1: number
  speed2: number
  speed3: number
  speed4: number
}
export interface TotalFuelCostResult {
  totalFuelCostVesselRoute1: TotalFuelCost
  totalFuelCostBkiRoute1: TotalFuelCost
  totalFuelCostVesselRoute2: TotalFuelCost
  totalFuelCostBkiRoute2: TotalFuelCost
}
