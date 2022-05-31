const Title = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{`title : ${props.title}`}</h1>
            <h3>{props.name}</h3>
            {props.childeren && props.childeren}
        </div>
    );
};

export default Title;