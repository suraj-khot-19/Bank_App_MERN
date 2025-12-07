export default function signup() {
    return (
        <>
            <div className='mt-5 p-4'>
                <h2 className='mx-auto text-bold' style={{ width: "15px" }}>Login</h2>
            </div>
            <div className='container mt-5 w-50 border border-warning p-5' >
                <form>
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mx-auto" style={{ width: "150px" }}>
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
