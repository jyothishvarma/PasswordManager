import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    userDetailsList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    isShow: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  deleteUserDetails = id => {
    const {userDetailsList} = this.state
    const filteredDetails = userDetailsList.filter(each => each.id !== id)
    this.setState({userDetailsList: filteredDetails})
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onShowPassword = event => {
    if (event.target.checked) {
      this.setState({isShow: true})
    } else {
      this.setState({isShow: false})
    }
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newUserDetails = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      userDetailsList: [...prevState.userDetailsList, newUserDetails],
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {
      userDetailsList,
      website,
      username,
      password,
      searchInput,
      isShow,
    } = this.state
    const searchResults = userDetailsList.filter(eachUser =>
      eachUser.website.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-manager-container">
            <form className="form-container" onSubmit={this.onAddPassword}>
              <h1 className="add-heading">Add New Password</h1>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />
                <input
                  type="text"
                  className="input-el"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                  value={website}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon"
                />
                <input
                  type="text"
                  className="input-el"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                  value={username}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon"
                />
                <input
                  type="password"
                  className="input-el"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
              <div className="button-container">
                <button className="add-btn" type="submit">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
          </div>
          <div className="your-passwords-container">
            <div className="password-details-container">
              <div className="passwords-count-container">
                <h1 className="count-head">Your Passwords</h1>
                <div className="count-container">
                  <p>{userDetailsList.length}</p>
                </div>
              </div>
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="search-input"
                  onChange={this.onSearch}
                />
              </div>
            </div>
            <hr className="line" />
            <div className="show-passwords-container">
              <div className="show-passwords">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                  onChange={this.onShowPassword}
                />
                <label className="show-head" htmlFor="checkbox">
                  Show passwords
                </label>
              </div>
            </div>
            {searchResults.length === 0 ? (
              <div className="no-passwords-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  className="no-image"
                  alt="no passwords"
                />
                <p className="no-passwords-text">No Passwords</p>
              </div>
            ) : (
              <ul className="list-container">
                {searchResults.map(eachUser => (
                  <PasswordItem
                    userDetails={eachUser}
                    key={eachUser.id}
                    deleteUserDetails={this.deleteUserDetails}
                    isShow={isShow}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
