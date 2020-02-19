const index = (req,res)=>{
    res.sendFile('index.html', {root: './views'});

} 

module.exports = {
    index
}
