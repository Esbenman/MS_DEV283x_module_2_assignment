var storage=require('../storage')

module.exports= {
    
    /* GET post */
    getPosts(req, res) {
	res.send(storage.getPosts());
	//res.render('index', { title: 'Express' });
    },
    
    /* POST post */
    addPost(req, res) {
	if (!req.body.name || !req.body.text) {
	    res.send('Please provice name and text for your post')
	} else {
	    storage.addPost(req.body.name, req.url, req.body.text);
	    res.send('Thanks for posting')
	}
    },
    
    /* PUT post (ID) */
    updatePost(req, res) {
	//post=storage.getPostAtId() 
	if (req.params.postId<0) {
	    res.send("Please provide a non-negative postID")
	    return
	}
	console.log(req)
	storage.updatePost(req.params.postId,req.query)
	res.send('Updated '+req.params.postId)
    },
    
    /* DELETE post (ID) */
    removePost(req, res) {
	if (req.params.postId<0) {
	    res.send("Please provide a non-negative postID")
	}
	console.log("Delete param is "+req.params.postId)
	storage.removePost(req.params.postId)
	res.send('Removed post nr. '+req.params.postId)
    }
}


