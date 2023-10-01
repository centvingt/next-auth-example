import { Delivery } from './delivery'
import { Route } from './route'
import { Vessel } from './vessel'

export interface Input {
  selectedVessel?: Vessel | null
  selectedRoute?: Route | null
  selectedDelivery?: Delivery | null
  daysPanamaLaden?: number | null
}

// export interface Input extends InputProperties {}
// export interface InputConstructorParams {
//   actionPayload: InputProperties
//   stateValue: InputProperties
// }
// export class Input {
//   constructor({ actionPayload, stateValue }: InputConstructorParams) {
//     const {
//       selectedVessel: payloadSelectedVessel,
//       selectedRoute: payloadSelectedRoute,
//       selectedDelivery: payloadSelectedDelivery,
//       daysPanamaLaden: payloadDaysPanamaLaden,
//     } = actionPayload

//     const {
//       selectedVessel: stateSelectedVessel,
//       selectedRoute: stateSelectedRoute,
//       selectedDelivery: stateSelectedDelivery,
//       daysPanamaLaden: stateDaysPanamaLaden,
//     } = stateValue

//     this.selectedVessel =
//       payloadSelectedVessel === undefined
//         ? stateSelectedVessel
//         : payloadSelectedVessel

//     this.selectedRoute =
//       payloadSelectedRoute === undefined
//         ? stateSelectedRoute
//         : payloadSelectedRoute

//     this.selectedDelivery =
//       payloadSelectedDelivery === undefined
//         ? stateSelectedDelivery
//         : payloadSelectedDelivery

//     this.daysPanamaLaden =
//       payloadDaysPanamaLaden === undefined
//         ? stateDaysPanamaLaden
//         : payloadDaysPanamaLaden
//   }
// }
