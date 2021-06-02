const FetchLineups = async () => {
  try{
    const response = await fetch("/api/v1/lineups")
    if (!response){
      const errorMessage = `${response.status} (${response.statusTest})`
      const error = new Error(errorMessage)
      throw(error)
    }
    const parsedLineups = await response.json()
    return parsedLineups
  } catch(err){
    console.error(`Error in fetch: ${err.message}`)
  }
}

export default FetchLineups