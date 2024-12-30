

function App() {

  return (
    <div className="main">

      <div className="hero">
        <h1 className="title">Learn to code by watching others</h1>
        <p className="description">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>

      <form className="form">
        <div className="form-pricing">
          <p className="form-pricing-text"><span className="form-pricing-text-bold">Try it free 7 days</span> then $20/mo. thereafter</p>
        </div>
        <div className="form-main">
          
            <input className="form-main-input" type="text" id="firstName" name="firstName" placeholder="First Name" required/>
            
          
            <input className="form-main-input" type="text" id="lastName" name="lastName" placeholder="Last Name" required/>
          
          
            <input className="form-main-input" type="email" id="email" name="email" placeholder="Email Address" required/>
          
          
            <input className="form-main-input" type="text" id="password" name="password" placeholder="Password" required/> 
          
          <button type="submit" className="submit-btn">claim your free trial</button>
          <p className="disclaimer">By clicking the button you are agreeing to our <span className="disclaimer-bold">Terms and Services</span></p>
        </div>
      </form>

    </div>
  )
}

export default App
