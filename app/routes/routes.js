module.exports = function(app,mongoose, userModel){


	app.get('/userinfo', function(req,res){
		//{ status: { $ne:'deleted'}
		userModel.find({},{__v:0}, function(err, data){
			if(!err&&data!=null){
				res.json({success:true, users: data});
			}
			else{
				res.json({success:false});
			}

		})
	});
	app.post('/userinfo', function(req,res){
		console.log("New user data added");
		console.log(req.body.user);
		req.body.user.date = new Date().toLocaleString();
		req.body.user.systemdate = new Date().getTime();
		req.body.user.status = "New";
		
		var user = new userModel(req.body.user);
		user.save(function(err){
			if(!err){
				res.json({success : true});
			}
			else{
				res.json({success : false});
			}
		})
     });

	app.put('/userinfo/delete', function(req, res){
		userModel.update({_id : req.body.doc_id},{$set: {status:'Deleted'}} ,function(err){
			if(!err){
				res.json({success:true});
			}	
			else{
				res.json({success:false});
			}
		})
		
	});

	app.post('/login',function(req,res){
		console.log(req.body.admin);
		if(req.body.admin.username=="admin"&&req.body.admin.password=="admin"){
			res.json({success:true});			
		}
		else{
			res.json({success:false});	
		}

	})


}