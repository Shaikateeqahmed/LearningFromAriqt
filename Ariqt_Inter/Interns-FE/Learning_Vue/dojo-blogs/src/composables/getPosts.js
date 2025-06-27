import { ref } from "vue";
 
 const getPosts = ()=>{
    const posts = ref([]);
    const error = ref(null);
    
    const GetData = async () => {
      try {
        let data = await fetch(`http://localhost:3000/posts`);
        if (!data.ok) {
          throw Error("No Data Available!");
        }
        posts.value = await data.json();
        console.log(posts.value);
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    return {posts, error, GetData};
}

export default getPosts;
