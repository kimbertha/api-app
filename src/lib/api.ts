export const run = 'https://aig-sierra.radleypropertysolutions.com/iadev/promsrest/runrequest'

export const check = (id:number) => `https://aig-sierra.radleypropertysolutions.com/iadev/promsrest/runrequeststatus/${id}`

export const get = (id:number) => `https://aig-sierra.radleypropertysolutions.com/iadev/promsrest/runresult/${id}/SV`