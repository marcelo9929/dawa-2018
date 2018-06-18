const User = require('../models/user.js');

const exposedFields = [
'username',
'name',
'email'
];

module.exports = {
	create: (req,res,next)=>{
		var user = new User({
			...req.body
		});
		user
		.save()
		.then(result => {
			res.status(200).json({
				message: 'User succesfully created',
				data: {
					....result['_doc']
				}
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error:err
			});
		});
	},
	find: (req,res,next) => {
		User.find()
		    .select(exposedFields.join(''))
		    .exec()
		    .then(docs =>{
		    	const response = {
		    		count: docs.length,
		    		data: docs.map(doc =>{
		    			return {
		    				...doc['_doc']
		    			};
		    		})
		    	};
		    	res.status(200).json(response);
		    })
		    .catch(err=>{
		    	console.log(err);
		    	res.status(500).json({
		    		error:err
		    	});
		    });
	},
	findOne: (req,res,next)=>{
		const id = req.params.id;
		Plan.findById(id)
		    .exec()
		    .then(doc => {
		    	if (doc) {
		    		res.status(200),json({
		    			data: doc['_doc'],
		    		});
		    	}else{
		    		res.status(404).json({message: 'No valid entry found'});	
		    	}
		    })
		    .catch(err =>{
		    	console.log(err);
		    	res.status(500).json({
		    		error:err
		    	});
		    });
	},
	update: (req,res,next) =>{
		const id = req.params.id;
		let updateParams ={
			...req.body
		};
		User.update({_id: id},{$set: updateParams})
		    .exec()
		    .then(result =>{
		    	message: 'User updated!',
		    	data: result['_doc']
		    });
	})
    .catch(err =>{
    	
    })
}
