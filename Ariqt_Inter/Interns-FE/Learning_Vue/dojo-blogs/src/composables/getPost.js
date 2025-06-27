import { ref } from "vue";
 
 const getPost = (id)=>{
    const post = ref(null);
    const error = ref(null);
    
    const GetData = async () => {
      try {
        let data = await fetch(`http://localhost:3000/posts/${id}`);
        if (!data.ok) {
          throw Error("No Data Available!");
        }
        post.value = await data.json();
        console.log(post.value);
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    return {post, error, GetData};
}

export default getPost;
