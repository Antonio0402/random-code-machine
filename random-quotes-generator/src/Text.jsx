const Text = ({quote, person}) => {
  return (
    <div className="text-area">
      <span id="text">
        {quote}
      </span>
      <p id="author">
        {person}
      </p>
    </div>
  )
}

export default Text;