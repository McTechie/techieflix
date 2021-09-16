import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { selectUser } from 'features/userSlice'
import { signOut } from 'firebase/auth'
import { auth } from 'firebase'
import { Nav, Plans } from 'components'
import './ProfileScreen.css'

const ProfileScreen = () => {
  const history = useHistory()
  const user = useSelector(selectUser)

  const handleSignOut = () => {
    signOut(auth)
    history.push('/')
  }

  return (
    <div className="profile-screen">
      <Nav />
      <div className="profile-screen-body">
        <h1>Edit Profile</h1>
        <div className="profile-screen-info">
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1b/1b78352c6e41eab45748dfb0bce99b46e4584267_full.jpg"
            alt="User Avatar"
          />
          <div className="profile-screen-details">
            <h2>{user.email}</h2>
            <div className="profile-screen-plans">
              <h3>Plans</h3>
              <Plans />
              <button
                onClick={handleSignOut}
                className="profile-screen-signout-btn"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
