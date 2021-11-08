const convertCount = (count) => {
  if (typeof(count) === "undefined") return

  if (isNaN(count)) throw 'Please insert a valid number.'

  return Number(count)
}

module.exports = convertCount
