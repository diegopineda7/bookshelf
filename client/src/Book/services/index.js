import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export const saveBook = async bookInfo => {
  const bookData = new FormData()
  bookData.append('userEmail', bookInfo.userEmail)
  bookData.append('name', bookInfo.name)
  bookData.append('author', bookInfo.author)
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

export const saveQuote = async quoteInfo => {
  const quoteData = new FormData()
  quoteData.append('bookId', quoteInfo.bookId)
  quoteData.append('quote', quoteInfo.quote)

  try {
    const response = await axios({
      url: `${baseUrl}/book/quote`,
      method: 'POST',
      data: quoteData
    })

    return response
  } catch (e) {
    console.error(e)
  }
}
