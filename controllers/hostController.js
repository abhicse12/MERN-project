//import home
const Home=require("../models/home")

exports.getAddhome=(req, res, next) => {
    res.render('host/edit-home', {pageTitle: 'Add Home to airbnb',currentPage:'addHome',editing:false,home:null,});
};

exports.getEditHome=(req, res, next) => {
    const homeId=req.params.homeId;
    const editing=req.query.editing==='true';
    Home.findById(homeId).then(home=>{
        if(!home){
            console.log("home not found for editing")
            res.redirect("/host/host-home-list");
        }
        console.log(homeId, editing)
        res.render('host/edit-home', {pageTitle: 'edit host home',home:home,currentPage:'host-homes',editing: editing});

    })
   
};

exports.getHostHome=(req, res, next) => {
    Home.fetchAll().then(registeredHomes =>{res.render('host/host-home-list', {registeredHomes: registeredHomes, pageTitle: 'Host Home List',currentPage:'host-homes'}) });
    
}

exports.postAddhome =(req, res, next) => {
    console.log('Home Registration successful for:', req.body);
    const {houseName,location,price,rating,photoURL,description}=req.body;
    const home=new Home(houseName,location,price,rating,photoURL,description);
    home.save().then(()=>{
        console.log("Home Registration successfully");
    })
    res.redirect('/host/host-home-list');
}

exports.postEditHome =(req, res, next) => {
    console.log('Home Registration successful for:', req.body);
    const {id,houseName,location,price,rating,photoURL,description}=req.body;
    const home=new Home(houseName,location,price,rating,photoURL,description,id);
    home._id=id;
    home.save().then(result=>{
        console.log("home updated successfully",result);
    });
    res.redirect('/host/host-home-list');
};

exports.postDeleteHome =(req, res, next) => {
    const homeId=req.params.homeId;
    console.log('CAme to delete',homeId);
    Home.deleteById(homeId).then(()=>{
        res.redirect('/host/host-home-list');
    }).catch(error=>{
            console.log('error while deleting',error);
    })
    
};


