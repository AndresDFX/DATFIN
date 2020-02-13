

const index = (req,res)=>{
    res.render('index', {
        title: 'My webstore'
    })

} 

module.exports = {
    index
}
