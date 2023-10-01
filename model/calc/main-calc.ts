import { IntakeCalcResult } from './intake-calc'
import { RouteCostsResult } from './route-costs-calc'
import { StoppingRouteCostsResult } from './stopping-route-costs-calc'
import { TotalFuelCostResult } from './total-fuel-cost-calc'
import { TotalRouteDurationResult } from './total-route-duration-calc'

export interface MainCalcResult {
  stoppingRouteCostsResult: StoppingRouteCostsResult | null
  routeCostsResult: RouteCostsResult | null
  intakeCalcResult: IntakeCalcResult | null
  totalRouteDurationResult: TotalRouteDurationResult | null
  totalFuelCostResult: TotalFuelCostResult | null
}

// export interface MainCalc {
//   result: MainCalcResult
//   missingValues: Array<MissingValue> | null
// }
