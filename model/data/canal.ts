export interface CanalFromApiProperties {
  id: string
  canal: string
}
export interface CanalProperties {
  id: string
  label: string
}

export interface Canal extends CanalProperties {}
export class Canal {
  constructor(canalFromApi: CanalFromApiProperties) {
    this.id = canalFromApi.id
    this.label = canalFromApi.canal
  }
}
