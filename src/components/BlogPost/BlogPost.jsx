import './BlogPost.css';

function BlogPost({element}) {
    return (
        <div className='BlogPost'>
            <h3>{element.title}</h3>
            <p>{element.content}</p>
            <small>{element.date}</small>
        </div>
    )
}

export default BlogPost