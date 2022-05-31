import React from 'react'
import './NewProduct.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

const NewProduct = () => {
    return (
        <div className='formContainer' >
            <section>
                <h3>Informacion</h3>
                <form action=''>
                    <fieldset>
                        <label for = "title" >Titulo</label>
                        <input type="text" placeholder='Titulo' name='title' id='title'/>
                    </fieldset>

                    <fieldset>
                        <label for = "price" >Precio</label>
                        <input type="number" placeholder='Precio' name='price' id='price' />
                    </fieldset>

                    <fieldset className='relative'>
                        <label for = "stock" >Stock</label>
                        <input type="number"  placeholder='Stock' name='stock' id='stock' />
                        {/* <FontAwesomeIcon icon={faPlus}/>
                        <FontAwesomeIcon icon={faMinus} /> */}
                    </fieldset>

                    <fieldset>
                        <label for = "description" >Descripción</label>
                        <textarea id='description' name="description" cols="30" rows="10" placeholder="Descripción" ></textarea>
                    </fieldset>

                    <fieldset >
                        <label class="" for='Store'>Tienda</label>
                        <select name="brand" class="" id='Store'>
                            <option value="-1" selected>Seleccione una Tienda</option>
                            <option value></option>
                        </select>
                    </fieldset>

                    <h3>Galeria de Imagenes</h3>
                    <fieldset>
                        <label>Nueva Imagen</label>
                        <input type="file" name="images" multiple />
                    </fieldset>

                    <button>Guardar</button>
                    <button>Cancelar</button>
                </form>
            </section>
        </div >
    )
}

export default NewProduct;