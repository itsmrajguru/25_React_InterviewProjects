import useFetch from "../../components/hooks";

function CommentsComponents() {
    const { data, loading, error } = useFetch("https://dummyjson.com/comments")

    if (loading) return <h3>Fetching Data ,Please Wait </h3>

    return (
        <div>
            <h2>This is Comments Page</h2>
            <ul>
                {
                    data?.comments?.length > 0
                        ? data?.comments.map((commentItem) => (
                            <div>
                                <label>{commentItem?.body}</label>
                                <p>{commentItem?.likes}</p>
                            </div>

                        ))
                        : null
                }
            </ul>
        </div>
    );
}

export default CommentsComponents;