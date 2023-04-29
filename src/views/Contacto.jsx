export const Contacto = () => {

    return(

        <div className="row justify-content-center">
            <h1>Cuéntanos, ¿En que te podemos ayudar?</h1>
            <div className="mb-3 col-6">
                <label for="exampleFormControlInput1" class="form-label">Correo</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            {/* </div>
            <div className="mb-3"> */}
                <label for="exampleFormControlTextarea1" class="form-label">Descripción</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button type="button" class="btn btn-primary mt-3">Primary</button>
            </div>
            
        </div>
        
    )
}