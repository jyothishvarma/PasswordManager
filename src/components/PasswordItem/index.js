import './index.css'

const PasswordItem = props => {
  const {userDetails, deleteUserDetails, isShow} = props
  const {id, website, username, password} = userDetails

  const onDelete = () => {
    deleteUserDetails(id)
  }
  return (
    <li className="password-details-item">
      <div className="first-letter-container">
        <p className="first-letter">{username[0]}</p>
      </div>
      <div className="user-details">
        <p className="details">{website}</p>
        <p className="details">{username}</p>
        {isShow ? (
          <p className="details">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={onDelete}
        data-testId="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
