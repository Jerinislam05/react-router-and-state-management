import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/RefForm/RefForm'
// import HookForm from './hooks/HookForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  /* const handleSignUpSubmit = data =>{
    console.log('Sign Up',data);
}

  const handleUpdateProfile = data =>{
    console.log('Update Profile',data);
  }; */

  return (
    <>
      
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReusableForm formTitle={'Sign Up'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>please sign up!</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'}
      handleSubmit={handleUpdateProfile} submitBtnText={'Update'}>
        <div>
          <h2>Update Profile</h2>
          <p>always keep the profile update</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
