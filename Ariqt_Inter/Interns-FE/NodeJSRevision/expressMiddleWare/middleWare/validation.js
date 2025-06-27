const validation = (req,res,next)=>{
    let body = req.body;
    console.log(typeof(body.Cast))
    if(body.ID && body.Name && body.Rating && body.Description && body.Genre && body.Cast){
        if(typeof(body.ID)==='number' && typeof(body.Name)==='string' && typeof(body.Rating)==='number' && typeof(body.Description)==='string' && typeof(body.Genre)==='string' && Array.isArray(body.Cast) && body.Cast.every(item => typeof item === "string")){
              next();
        }else{
            res.send('Bad Request 400');
        }
    }else{
        res.send('Bad Request 400');
    }
}

module.exports = {validation}