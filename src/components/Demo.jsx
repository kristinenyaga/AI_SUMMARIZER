import { useState, useEffect } from "react"
import { copy, linkIcon, loader, tick } from '../assets'
import { useLazyGetSummaryQuery } from "../services/article"
const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary:''
  })
  const [getSummary, { isFetching, error }] = useLazyGetSummaryQuery()
  const [allArticles, setAllArticles] = useState([])
  const [copied,setCopied]=useState("")
  
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'))
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage)
    }
  },[])


  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await getSummary({ articleUrl: article.url })
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary }
      const updatedAllArticles = [ newArticle,...allArticles]


      setArticle(newArticle)
      setAllArticles(updatedAllArticles)
      // you stringify because local storage can only store strings
      localStorage.setItem('articles', JSON.stringify(updatedAllArticles))
    }
    
  }

  const handleCopy = (copiedUrl) => {
    setCopied(copiedUrl)
    navigator.clipboard.writeText(copiedUrl)
    setTimeout(()=>setCopied(false),3000)
    
  }
  
  return (
    <section className="mt-16 w-full max-w-6xl">
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
          <img src={ linkIcon} alt="link icon"  className="absolute left-0 my-2 ml-3 w-5" />
          <input
            type="url"
            placeholder="paste your url"
            value={article.url}
            onChange={(e) => setArticle({...article,url:e.target.value})}
            required
            className="url_input peer"
            style={{width : '98%'}}
          />
          {/* using peer-link two elements together  if we focus on the input the button gets focused as well */}
          <button type="submit" className="submit-btn absolute ml-8 border-2 right-1 text-3xl p-1.5 peer-focus:border-gray-500 peer-focus:text-gray-500">
           ✔️
          </button>

        </form>
        {/* browse url history */}
          <h1 className="font-satoshi orange_gradient font-bold ml-1">History of articles</h1>

        <div className="mt-4  p-2 gap-1 max-h-60 overflow-y-auto">
          {allArticles?.map((article, index) => (
            <div key={`link-${index}`} className="link_card " onClick={() => setArticle(article)}>
              <div className="copy_btn " onClick={()=>handleCopy(article.url)}>
                <img src={copied === article.url ? tick:copy} className="w-[40%] h-[40%] object-contain absolute" alt="copy-icon" />
              </div>
              <p className="font-satoshi flex-1 font-medium truncate text-blue-600 border-b-2 w-full p-3">{ article.url}</p>
            </div>
          ))}

        </div>
      </div>
      {/* display results */}
      <div className="my-10 flex justify-center items-center">
        {isFetching ? (
          <img src={ loader } alt="loading icon" className="w-20 h-20 object-contain" />
        ) : error ? (<p className="text-red-800 font-inter font-bold text-center">That was not successful <br /> <span className="font-satoshi text-gray-700">{error?.data?.error}</span></p>) : (
              article.summary &&(
              <div className="flex flex-col gap-3">
                <h2 className="font-satoshi font-bold text-gray-600 text-xl">Article summary</h2>
                <div className="summary_box">
                  <p className="font-satoshi text-gray-800">{article.summary }</p>
                </div>
              </div>
              )
            
        )}

      </div>
    </section>
  )
}

export default Demo