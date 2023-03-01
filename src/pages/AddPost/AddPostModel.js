class AddPostModel{
    state = {
        id: String(new Date().getTime()),
        user: "",
        title: "",
        text: ""
    }
}

export default AddPostModel;