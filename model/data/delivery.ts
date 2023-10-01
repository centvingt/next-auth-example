export interface DeliveryFromApiProperties {
  disch_port_id: {
    id: string
    label: string
  }

  canal_id: {
    id: string
    label: string
  } | null

  region_bsa_id: {
    id: string
  }

  region_usg_id: {
    id: string
  }
}
export interface DeliveryProperties {
  label: string
  dischPortId: string
  canalId: string | null
  regionBsaId: string
  regionUsgId: string
}

export interface Delivery extends DeliveryProperties {}
export class Delivery {
  // constructor(deliveryFromApi: DeliveryFromApiProperties) {
  //   this.label = `${deliveryFromApi.disch_port_id.label}${
  //     deliveryFromApi.canal_id ? `via ${deliveryFromApi.canal_id.label}` : ''
  //   }`

  //   this.dischPortId = deliveryFromApi.disch_port_id.id
  //   this.canalId = deliveryFromApi.canal_id?.id ?? null
  //   this.regionBsaId = deliveryFromApi.region_bsa_id.id
  //   this.regionUsgId = deliveryFromApi.region_usg_id.id
  // }
  constructor(deliveryFromApi: DeliveryFromApiProperties) {
    this.label =
      deliveryFromApi.disch_port_id && deliveryFromApi.disch_port_id.label
        ? deliveryFromApi.disch_port_id.label
        : ''

    if (deliveryFromApi.canal_id && deliveryFromApi.canal_id.label) {
      this.label += ` via ${deliveryFromApi.canal_id.label}`
    }

    this.dischPortId = deliveryFromApi.disch_port_id?.id || ''
    this.canalId = deliveryFromApi.canal_id?.id || null
    this.regionBsaId = deliveryFromApi.region_bsa_id?.id || ''
    this.regionUsgId = deliveryFromApi.region_usg_id?.id || ''
  }

  static gqlQueryFields = `
    disch_port_id {
      id
      label: port
    }
    canal_id {
      id
      label: canal
    }
    region_bsa_id {
      id
    }
    region_usg_id {
      id
    }
  `
}
