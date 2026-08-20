const Filter = ({value, onChange}) => {
  return (
     <div>
        <div>
          filter shown with a:{" "}
          <input value={value} onChange={onChange} />
        </div>
      </div>
  )
}

export default Filter;