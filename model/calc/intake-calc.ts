export enum IntakeRouteOptionLabel {
  maxCubic = 'max cubic',
  maxDraft = 'max draft',
  maxCargo = 'max cargo',
}
interface IntakeRouteOption {
  label: IntakeRouteOptionLabel
  value: number
}
export interface IntakeCalcResult {
  selectedVesselRoute1: IntakeRouteOption
  bkiVesselRoute1: IntakeRouteOption
  selectedVesselRoute2: IntakeRouteOption
  bkiVesselRoute2: IntakeRouteOption
}
