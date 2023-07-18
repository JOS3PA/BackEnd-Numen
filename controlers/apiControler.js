const { Melquiades }= require('../models/melquiades');


class ApiControler {
    async ver(req, res) {
        const libros = await Melquiades.find() // éste "find/ver" es de Mongoose , no el find de arrays
        res.status(200).json(libros)
    }
        
    async buscarSegunID(req, res) {
        console.log('y ahora en el controlador')
        const libros = await Melquiades.findById(req.params.id); 
        res.status(200).json(libros)
    }
    
    async crear(req, res){
        try {   const nuevoLibro = new Melquiades(req.body)
                await nuevoLibro.save()
                 res.status(201).json(nuevoLibro)
        } catch (error) {
            res.status(500).json(error)
        }
        
    }
    async editar(req, res){
        try {
            await Melquiades.findByIdAndUpdate(req.params.id,req.body) 
            res.status(201).json({
                msg:"el libro " + req.params.id + " fue actualizado"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async eliminar(req, res){
        await  Melquiades.findByIdAndDelete(req.params.id);
        res.status(200).json({
            msg: "su libro se eliminó con éxito"
          })
    }
    async external(req, res) {
        try {
          const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 
          const response = await axios.get(apiUrl); 
      
          const data = response.data; 
          res.json(data); 
        } catch (error) {
          res.status(500).json({ error: 'Error al obtener datos de la API externa' });
        }
      }
}



module.exports = new ApiControler

 