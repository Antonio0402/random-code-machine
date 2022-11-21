import Tweet from './Tweet';

const Generator = ({quote, handleAddQuote}) => {
  return (
    <div className="button-area">
        <Tweet quote={quote}/>
      <button type="button" id="new-quote" onClick={handleAddQuote}>New Quote</button>
    </div>
  )
}

export default Generator;