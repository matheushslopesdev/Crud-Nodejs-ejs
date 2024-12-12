const Crud = require('../models/Crud')

module.exports = class CrudController{
  
    static Home(req,res){
        res.render('pages/home')
    }

    static CadastroUser(req,res){
        res.render('pages/cadastroUser')
    }



    static async ListUser(req,res){

        const user = await Crud.findAll({ raw: true })
        res.render('pages/usuariosList', {user:user})
    }

    static async EditUser(req,res){
        //
        const id = req.params.id
        const users = await Crud.findOne({ where: { id: id} })
        res.render('pages/editUser', {users:users})
    }

    static async EditAdd(req,res){
        const {id,nome,sobrenome,idade} = req.body
        await Crud.update({nome:nome,sobrenome:sobrenome,idade:idade},{where:{id:id}} )
        res.redirect('/lista')
    }


    static async DeleteUser(req,res){

       await Crud.destroy({
            where:{
                id: req.params.id
            }
       })
       res.redirect('/lista')
    }


    static async CadastroAdd(req,res){
        const {nome,sobrenome,idade} = req.body
        await Crud.create({nome:nome, sobrenome:sobrenome, idade:idade})
        res.redirect('/lista')
    }
}