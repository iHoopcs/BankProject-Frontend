import './App.css'; 

export default function Login(){
    return (
        <>
            <div className="navbar navbar-default centerNavTxt">
                <h1>React Online Banking</h1>
            </div>

            <div className='credentialForm'>
                <h3>Enter Login Credentials</h3>
                <form className="form-horizontal">
                    <div className="row">
                        <input type={'text'} className='form-control'  placeholder="Username" name="username"/>
                        <br></br>
                        <input type={'text'} className='form-control' placeholder="Password" name="password"/>
                        <br></br>
                        <button type="submit" className="btn btn-default">Submit</button> 
                        <button type="button" className="btn btn-default"><a href="/signup">Need an account?</a></button>
                    </div>
                </form>
            </div>
            
            
            
        </>
        
    )
}