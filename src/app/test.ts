const testFunc = async () => {

  const func =  async (option:any) => {
    console.log('called')
    const res:any = await axios.post(run, option.body, headers)
    if (res.data.status === 'Recieved') {
      const data  = await axios.get(check(res.data.id), headers) 
      return data.data
    }
  }

  const batches = [], size = 2
    
  while (fakebody.length > 0)
    batches.push(fakebody.splice(0, size))
    
  const funcs = batches.map(batch =>  Promise.all(batch.map(option => func(option))).then((data) => console.log(data)))

  await Promise.all(funcs).then((data) =>  console.log('COMPLETE'))

  // await Promise.all(promises).then((data) => {
  //   console.log(data)
  //   console.log('COMPLETE')
  // })
}
