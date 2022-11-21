const Tweet = ({quote}) => {
  return (
    <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote}`} target="_blank" rel="noreferrer">
      <i className="fa-brands fa-twitter"></i>
    </a>
  )
}

export default Tweet;