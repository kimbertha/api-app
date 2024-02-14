export const body  = {
  'customer': 'AIG',
  'obligorRef': '8002962C1',
  'overrideAnalysisDate': '2023-08-31',
  'markets': '2023Q2 Standard',
  'sectors': 'Standard v31',
  'globals': 'Standard 10k as of 28Feb23'
}

export const body2  = {
  'customer': 'AIG',
  'obligorRef': '8002962C2',
  'overrideAnalysisDate': '2023-08-31',
  'markets': '2023Q2 Standard',
  'sectors': 'Standard v31',
  'globals': 'Standard 10k as of 28Feb23'
}

export const body3  = {
  'customer': 'AIG',
  'obligorRef': '8002962C9',
  'overrideAnalysisDate': '2023-08-31',
  'markets': '2023Q2 Standard',
  'sectors': 'Standard v31',
  'globals': 'Standard 10k as of 28Feb23'
}



export const fakebody = [{
  id: 1,
  body: body
},{
  id: 2,
  body: body2
},{
  id: 3,
  body: body3
},{
  id: 4,
  body: body
},{
  id: 5,
  body: body
},{
  id: 6,
  body: body
}]

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSUzI1NmluT1RBIiwibmFtZSI6ICJDb3JlYnJpZGdlIElBIFBST01TIE5vblByb2QifQ.EiEn_7-IhwXqpTaj0zLD21d9gO45t1OehHDK5nODVxIh7kUuq4G0H2Rg1_ivyDyo_EAbtBj6hcxvU7OTaqnw220IB_nmx80IY5rYP1PKGDRsRxUZVYUzCs8bE23cRE_fIw00bWScg6utGQuOSs0NPrkL1iGTGV7HjIoLPcn0AOn2QsoywECDZBrchpDPfM4BnJ0gFzehFzALVa6y3vybrSQ40dE_0qNfuwYCYxVYFqsIcpfwVkZSqXhebYdAePG-O4qz1qPROqRGT3F0exj_hUir8lscA7J1u6KAat6sXpeeNOEYJ_sv5gEzi48iBx4e46xKjmiMHYzmL6EkGhNnhA'
export const headers = { headers: { Authorization: `Bearer ${token}` } }

