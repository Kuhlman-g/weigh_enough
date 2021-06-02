const fetchRowers = async () => {
  try{
    const response = await fetch("/api/v1/rowers")
    if (!response){
      const errorMessage = `${response.status} (${response.statusTest})`
      const error = new Error(errorMessage)
      throw(error)
    }
    const parsedRowers = await response.json()
    return parsedRowers
  } catch(err){
    console.error(`Error in fetch: ${err.message}`)
  }
}

export default fetchRowers