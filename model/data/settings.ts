import { DeliveryFromApiProperties, Delivery } from './delivery'
// import { Distance, SlimDistanceProperties } from './distance'
import {
  RouteBallastCanalDiscount,
  RouteBallastCanalDiscountFromApiProperties,
} from './route-ballast-canal-discount'
import {
  RouteLadenCanalDiscount,
  RouteLadenCanalDiscountFromApiProperties,
} from './route-laden-canal-discount'
import { Vessel, VesselFromApiProperties } from './vessel'

const NEXT_PUBLIC_BKI_ID = process.env.NEXT_PUBLIC_BKI_ID || ''
const NEXT_PUBLIC_ROUTELADENCANALDISCOUNT_SUEZ_ID =
  process.env.NEXT_PUBLIC_ROUTELADENCANALDISCOUNT_SUEZ_ID
const NEXT_PUBLIC_ROUTELADENCANALDISCOUNT_PANAMA_ID =
  process.env.NEXT_PUBLIC_ROUTELADENCANALDISCOUNT_PANAMA_ID
const NEXT_PUBLIC_ROUTELADENCANALDISCOUNT_SUEZDISCOUNT_ID =
  process.env.NEXT_PUBLIC_ROUTELADENCANALDISCOUNT_SUEZDISCOUNT_ID
const NEXT_PUBLIC_ROUTEBALLASTCANALDISCOUNT_SUEZBSA_ID =
  process.env.NEXT_PUBLIC_ROUTEBALLASTCANALDISCOUNT_SUEZBSA_ID
const NEXT_PUBLIC_ROUTEBALLASTCANALDISCOUNT_SUEZUSG_ID =
  process.env.NEXT_PUBLIC_ROUTEBALLASTCANALDISCOUNT_SUEZUSG_ID
const NEXT_PUBLIC_ROUTEBALLASTCANALDISCOUNT_PANAMA_ID =
  process.env.NEXT_PUBLIC_ROUTEBALLASTCANALDISCOUNT_PANAMA_ID

export interface SettingsFromApiProperties {
  settings: { oldVesselPrime: string }
  bkiVessel: VesselFromApiProperties
  routeLadenCanalDiscounts: RouteLadenCanalDiscountFromApiProperties[]
  allDeliverys: DeliveryFromApiProperties[]
  routeBallastCanalDiscounts: RouteBallastCanalDiscountFromApiProperties[]
}
interface RouteLadenCanalDiscounts {
  panama: RouteLadenCanalDiscount
  suez: RouteLadenCanalDiscount
  suezDiscount: RouteLadenCanalDiscount
}
interface RouteBallastCanalDiscounts {
  panama: RouteBallastCanalDiscount
  suezBsa: RouteBallastCanalDiscount
  suezUsg: RouteBallastCanalDiscount
}
export interface SettingsProperties {
  oldVesselPrime: number
  bkiVessel: Vessel
  routeLadenCanalDiscounts: RouteLadenCanalDiscounts
  deliveryOptions: Delivery[]
  routeBallastCanalDiscounts: RouteBallastCanalDiscounts
}
export interface Settings extends SettingsProperties {}
export class Settings {
  constructor(settingsFromApi: SettingsFromApiProperties) {
    this.oldVesselPrime = Number(settingsFromApi.settings.oldVesselPrime)
    this.bkiVessel = new Vessel(settingsFromApi.bkiVessel)

    // const allDeliverys = settingsFromApi.allDeliverys.map(
    //   (option) => new Delivery(option),
    // )
    const allDeliverys = settingsFromApi.allDeliverys
      .filter((option) => option !== null && option !== undefined)
      .map((option) => new Delivery(option))

    this.deliveryOptions = Object.values(
      allDeliverys.reduce((acc, obj) => ({ ...acc, [obj.label]: obj }), {}),
    )

    const ladenSuez = settingsFromApi.routeLadenCanalDiscounts.find(
      (routeCanal) =>
        routeCanal.id === NEXT_PUBLIC_ROUTELADENCANALDISCOUNT_SUEZ_ID,
    )
    const ladenPanama = settingsFromApi.routeLadenCanalDiscounts.find(
      (routeCanal) =>
        routeCanal.id === NEXT_PUBLIC_ROUTELADENCANALDISCOUNT_PANAMA_ID,
    )
    const ladenSuezDiscount = settingsFromApi.routeLadenCanalDiscounts.find(
      (routeCanal) =>
        routeCanal.id === NEXT_PUBLIC_ROUTELADENCANALDISCOUNT_SUEZDISCOUNT_ID,
    )

    if (
      ladenSuez === undefined ||
      ladenPanama === undefined ||
      ladenSuezDiscount === undefined
    )
      throw new Error('MISSING ROUTE LADEN DISCOUNT')

    this.routeLadenCanalDiscounts = {
      panama: new RouteLadenCanalDiscount(ladenPanama),
      suez: new RouteLadenCanalDiscount(ladenSuez),
      suezDiscount: new RouteLadenCanalDiscount(ladenSuezDiscount),
    }

    const ballastSuezBsa = settingsFromApi.routeBallastCanalDiscounts.find(
      (routeCanal) =>
        routeCanal.id === NEXT_PUBLIC_ROUTEBALLASTCANALDISCOUNT_SUEZBSA_ID,
    )
    const ballastSuezUsg = settingsFromApi.routeBallastCanalDiscounts.find(
      (routeCanal) =>
        routeCanal.id === NEXT_PUBLIC_ROUTEBALLASTCANALDISCOUNT_SUEZUSG_ID,
    )
    const ballastPanama = settingsFromApi.routeBallastCanalDiscounts.find(
      (routeCanal) =>
        routeCanal.id === NEXT_PUBLIC_ROUTEBALLASTCANALDISCOUNT_PANAMA_ID,
    )

    if (
      ballastSuezBsa === undefined ||
      ballastSuezUsg === undefined ||
      ballastPanama === undefined
    )
      throw new Error('MISSING ROUTE BALLAST DISCOUNT')

    this.routeBallastCanalDiscounts = {
      panama: new RouteBallastCanalDiscount(ballastPanama),
      suezUsg: new RouteBallastCanalDiscount(ballastSuezUsg),
      suezBsa: new RouteBallastCanalDiscount(ballastSuezBsa),
    }
  }

  static graphqlQuery = `
      query {
        settings: Settings {
          oldVesselPrime: old_vessel_prime
        }
        bkiVessel: Vessel_by_id( id: "${NEXT_PUBLIC_BKI_ID}" ) 
        {
          ${Vessel.getGraphqlGetOneByIdQueryFields()}
        }
        routeLadenCanalDiscounts: Route_Laden_Canal_Discount {
          id
          laden_canal_discount
          cost
          days_lost
        }
        allDeliverys: Distance( limit:-1 ) {
          ${Delivery.gqlQueryFields}
        }
        routeBallastCanalDiscounts: Route_Ballast_Canal_Discount {
          ${RouteBallastCanalDiscount.gqlQueryFields}
        }
      }
    `
}
