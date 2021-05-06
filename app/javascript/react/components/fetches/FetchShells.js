const fetchShells = async () => {
  try{
    const response = await fetch("/api/v1/boats")
    if (!response){
      const errorMessage = `${response.status} (${response.statusTest})`
      const error = new Error(errorMessage)
      throw(error)
    }
    const parsedShells = await response.json()
    return parsedShells
  } catch(err){
    console.error(`Error in fetch: ${err.message}`)
  }
}

export default fetchShells