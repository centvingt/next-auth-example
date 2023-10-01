import { MainCalcResult } from './main-calc'
import { MissingValue } from './missing-value'

export interface Calc {
  result: MainCalcResult
  missingValues: MissingValue[] | null
}
