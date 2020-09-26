import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export const saveBook = async bookInfo => {
  const bookData = new FormData()
  bookData.append('name', bookInfo.email)
  bookData.append('author', bookInfo.password)
  bookData.append('pdf', bookInfo.pdf)

  try {
    const response = await axios({
      url: `${baseUrl}/book/save`,
      method: 'POST',
      data: bookData
    })

    return response
  } catch (e) {
    console.error(e)
  }
}
