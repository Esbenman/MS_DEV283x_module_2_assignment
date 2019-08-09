var storage=[]
module.exports={
    getPosts() {
	return storage
    },

    addPost(name,url,text) {
	storage.push({"name":name, "url":url, "text":text, comments:[]})
    },

    updatePost(index,update) {
	console.log('Updating '+index+' with '+JSON.stringify(update))
	if (update.name) {
	    storage[index].name=update.name
	}
	if (update.text) {
	    storage[index].text=update.text
	}
    },
    
    removePost(index) {
	storage.splice(index,1)
    },

    getComments(index) {
	if (storage[index].comments) {
	    return storage[index].comments
	} else return []
    },

    addComment(index, comment) {
	if (!storage[index].comments) {
	    storage[index].comments=[]
	}
	storage[index].comments.push(comment)
    },

    updateComment(postIndex, commentIndex, comment) {
	storage[postIndex].comments[commentIndex]= comment
    },

    removeComment(postIndex, commentIndex) {
	storage[postIndex].comments.splice(commentIndex,1)
    }
    
}     
